import { execFileSync } from "node:child_process";
import { existsSync, readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { runInNewContext } from "node:vm";

const here = dirname(fileURLToPath(import.meta.url));
const input = pathToFileURL(join(here, "index.html")).href;
const window = {};
runInNewContext(readFileSync(join(here, "cv-data.js"), "utf8"), { window });
const slug = (s) => s.normalize("NFD").replace(/\p{Diacritic}/gu, "").replace(/[^A-Za-z0-9]+/g, "-");
const person = `${slug(window.CV.firstName)}-${slug(window.CV.lastName)}`;
const exports = [
  { lang: "fr", file: `${person}-CV.pdf` },
  { lang: "fr", file: `${person}-CV-complet.pdf`, complete: true },
  { lang: "en", file: `${person}-Resume.pdf` },
  { lang: "en", file: `${person}-Resume-full.pdf`, complete: true },
];
const ogImage = join(here, "og-image.png");

const candidates = [
  process.env.CHROME_PATH,
  "C:/Program Files/Google/Chrome/Application/chrome.exe",
  "C:/Program Files (x86)/Google/Chrome/Application/chrome.exe",
  "C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe",
  "C:/Program Files/Microsoft/Edge/Application/msedge.exe",
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  "/usr/bin/google-chrome",
  "/usr/bin/chromium",
  "/usr/bin/chromium-browser",
].filter(Boolean);

const browser = candidates.find((p) => existsSync(p));
if (!browser) {
  console.error("Chrome/Edge introuvable. Définis CHROME_PATH vers l'exécutable.");
  process.exit(1);
}

const run = (...args) =>
  execFileSync(browser, ["--headless=new", "--disable-gpu", "--virtual-time-budget=5000", ...args], { stdio: "ignore" });

for (const e of exports) {
  const output = join(here, e.file);
  run("--no-pdf-header-footer", `--print-to-pdf=${output}`, `${input}?lang=${e.lang}${e.complete ? "&complet" : ""}`);
  console.log(`PDF généré : ${output}`);
}
run("--hide-scrollbars", "--window-size=1200,630", `--screenshot=${ogImage}`, `${input}?lang=fr&og`);
console.log(`Aperçu généré : ${ogImage}`);
