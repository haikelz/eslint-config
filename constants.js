import path from "path";
import { fileURLToPath } from "url";

export const FILENAME = fileURLToPath(import.meta.url);
export const DIRNAME = path.dirname(FILENAME);

export const IGNORES_LIST = ["node_modules", ".vercel", "**/*.min.js", "dist"];
