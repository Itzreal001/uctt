import express from "express";
import path from "path";

const app = express();

// Serve static files from dist/public
const staticPath = path.resolve(process.cwd(), "dist", "public");

app.use(express.static(staticPath));

// Handle client-side routing - serve index.html for all routes
app.get("*", (_req, res) => {
  res.sendFile(path.join(staticPath, "index.html"));
});

export default app;
