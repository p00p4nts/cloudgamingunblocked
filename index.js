import express from "express";
import { createProxyMiddleware } from "http-proxy-middleware";

const app = express();

app.use("/", createProxyMiddleware({
  target: "https://xbox.com/play",
  changeOrigin: true,
  ws: true,
  secure: true
}));

app.listen(10000, () => console.log("Proxy running"));
