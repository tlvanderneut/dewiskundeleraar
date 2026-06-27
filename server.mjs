import http from "node:http";
import fs from "node:fs/promises";
import path from "node:path";

const root = path.resolve("public");
const port = Number(process.env.PORT || 4173);

const types = new Map([
  [".html", "text/html; charset=utf-8"],
  [".css", "text/css; charset=utf-8"],
  [".js", "text/javascript; charset=utf-8"],
  [".png", "image/png"],
  [".jpg", "image/jpeg"],
  [".jpeg", "image/jpeg"],
  [".svg", "image/svg+xml"],
  [".txt", "text/plain; charset=utf-8"],
]);

function safePath(urlPath) {
  const decoded = decodeURIComponent(urlPath.split("?")[0]);
  const clean = decoded.endsWith("/") ? `${decoded}index.html` : decoded;
  const target = path.resolve(root, `.${clean}`);
  return target.startsWith(root) ? target : path.join(root, "index.html");
}

const server = http.createServer(async (req, res) => {
  try {
    let target = safePath(req.url || "/");
    try {
      const stat = await fs.stat(target);
      if (stat.isDirectory()) target = path.join(target, "index.html");
    } catch {
      target = path.join(root, "index.html");
    }

    const body = await fs.readFile(target);
    res.writeHead(200, { "content-type": types.get(path.extname(target)) || "application/octet-stream" });
    res.end(body);
  } catch (error) {
    res.writeHead(500, { "content-type": "text/plain; charset=utf-8" });
    res.end(String(error));
  }
});

server.listen(port, "127.0.0.1", () => {
  console.log(`http://127.0.0.1:${port}`);
});
