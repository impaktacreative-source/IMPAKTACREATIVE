import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";

const root = process.cwd();

const removedPaths = [
  "src/routes/app.tsx",
  "src/layouts/custom.tsx",
  "src/components/custom-ui",
  "src/landing-content.ts",
  "public/assets/landing/template-preview.svg",
  "tests/landing-contract.test.ts",
];

const failures = [];
for (const relativePath of removedPaths) {
  if (existsSync(join(root, relativePath))) {
    failures.push(
      `${relativePath} should not exist — the unused Higgsfield app scaffold was removed for the real IMPAKTA Creative site`,
    );
  }
}

const packageJson = JSON.parse(readFileSync(join(root, "package.json"), "utf8"));
const deps = { ...packageJson.dependencies, ...packageJson.devDependencies };
if ("@higgsfield/app-landing" in deps) {
  failures.push("package.json should not depend on @higgsfield/app-landing — the scaffold using it was removed");
}

const landingRoutePath = join(root, "src/routes/index.tsx");
if (!existsSync(landingRoutePath)) {
  failures.push("src/routes/index.tsx is required — it is the real IMPAKTA Creative homepage");
} else {
  const source = readFileSync(landingRoutePath, "utf8");
  if (/LandingPage|previewMode/.test(source)) {
    failures.push("src/routes/index.tsx still references the removed scaffold's LandingPage/previewMode");
  }
}

if (failures.length > 0) {
  console.error("Scaffold-removal check failed:\n");
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log("Scaffold stays removed — check passed.");
