import path from "path";
import express from "express";

module.exports = (app, router) => {
  // Set static route to map to static assets
  app.use("/", express.static(path.resolve(__dirname, "../public")));
}