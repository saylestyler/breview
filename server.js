import express from "express";
import serveStatic from "serve-static";
import { join } from "path";
const app = express();

// workaround for __dirname not being in module scope
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

//we are configuring dist to serve site files
app.use("/", serveStatic(join(__dirname, "/dist")));

// this * route is to serve project on different page routes except root `/`
app.get(/.*/, function (req, res) {
  res.sendFile(join(__dirname, "./client/dist/index.html"));
});

const port = process.env.PORT || 8080;
app.listen(port);

console.log(`site is listening on port: ${port}`);
