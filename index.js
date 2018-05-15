const express = require("express");
const path = require("path");

// Middleware
const session = require("express-session");
const compression = require("compression");

// Get dependencies needed for HTTPS
const fs = require("fs");
const http = require("http");
const https = require("https");
const helmet = require("helmet");

// Create an Express application
const app = express();
const port = process.env.PORT || 8001;

const hostingEnvironment = process.env.ENV || "localhost";
console.log("Running on hosting environment: " + hostingEnvironment);

app.get("/health-check", (req, res) =>
    res.status(200).send("200: Server is healthy!"),
);

setupMiddleware(hostingEnvironment);
const router = setupRoutes(app);

// If running locally, use HTTPS. If running on Bluemix, use HTTP (because Bluemix uses its own HTTPS certificate)
hostingEnvironment === "localhost" ? runHTTPS() : runHTTP();

function setupRoutes(app) {
    app.use("/", express.static(path.resolve(__dirname, "./dist")));
}

function setupMiddleware(hostingEnvironment) {
    if (hostingEnvironment === "localhost") {
        const morgan = require("morgan");
        app.use(morgan("dev"));
    }

    // Use Helmet for increased HTTPS security
    // And to remove client-side caching so any JS changes are propagated instantly
    // Learn more about what each of these security settings do here:
    // https://helmetjs.github.io/
    app.use(
        helmet({
            dnsPrefetchControl: true,
            frameguard: true,
            hidePoweredBy: true,
            hsts: true,
            ieNoOpen: true,
            noCache: true,
            noSniff: true,
            referrerPolicy: true,
            xssFilter: true,
        }),
    );

    // Enable content security policy
    // So only resources from our domain will be executed
    // To prevent malicious code injection
    // Learn more here:
    // https://helmetjs.github.io/docs/csp/

    // Middleware for initialising passport with sessions:
    // Parses payload bodies in requests so it is easier to work with
    app.use(express.json());


    // Creates user session cookies that allows users to navigate between protected routes without
    // having to log in every time
    app.use(
        session({
            secret: "this is a super secret secret for computing a session hash 76FGUYTCIKUVCDNAOL^&*TGy",
            resave: false,
            saveUninitialized: true,
            cookie: {
                httpOnly: true,
                secure: true,
            },
        }),
    );

    // Use compression
    app.use(compression());

}

function runHTTP() {
    // Bluemix needs this because it sorts out HTTPS by itself
    http.createServer(app).listen(port, () => {
        console.log(`Listening to HTTP port: ${port}`);
    });
}

function runHTTPS() {
    // Localhost uses the self-signed SSL certificate
    const filePath = process.cwd() + "/private/ssl";
    const sslOptions = {
        key: fs.readFileSync(filePath + "/localhost-key.pem"),
        cert: fs.readFileSync(filePath + "/localhost-cert.pem"),
        passphrase: "daniel",
        requestCert: false,
        rejectUnauthorized: false,
    };

    https.createServer(sslOptions, app).listen(port, () => {
        console.log(`Listening to HTTPS port: ${port}`);
    });
}
