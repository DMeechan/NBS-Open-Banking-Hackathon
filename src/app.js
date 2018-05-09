import express from "express";
import path from "path";
import pkgJson from "../package.json";

// Middleware
import cookieParser from "cookie-parser";
import session from "express-session";
import compression from "compression";

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

app.locals.version = pkgJson.version;
app.get("/health-check", (req, res) =>
    res.status(200).send("200: Server is healthy!"),
);

setupMiddleware(hostingEnvironment);
const router = setupRoutes();

// If running locally, use HTTPS. If running on Bluemix, use HTTP (because Bluemix uses its own HTTPS certificate)
hostingEnvironment === "localhost" ? runHTTPS() : runHTTP();


function setupRoutes() {
    // Add routes to app
    const pageRouter = express.Router();
    const apiRouter = express.Router();

    const configureRoutes = require("./routes");
    const configureApi = require('./api');

    configureRoutes(app, pageRouter);
    configureApi(apiRouter);

    app.use(pageRouter);
    app.use('/api', apiRouter);
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

    // Parses requests cookies. This is needed to get the user session cookie
    app.use(cookieParser());

    // Creates user session cookies that allows users to navigate between protected routes without
    // having to log in every time
    app.use(
        session({
            secret: "this is a super secret secret for computing a session hash 768TR&FYO*IF^&%D",
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

export default app;