import { execSync } from "node:child_process";

const isCloudflarePages =
  process.env.CF_PAGES === "1" ||
  process.env.CLOUDFLARE_PAGES === "1" ||
  typeof process.env.CF_PAGES_BRANCH === "string";

const command = isCloudflarePages
  ? "npx --yes @cloudflare/next-on-pages@1 build"
  : "next build";

console.log(`Running build command: ${command}`);

try {
  execSync(command, { stdio: "inherit" });
} catch (error) {
  console.error(`Build command failed: ${command}`);
  throw error;
}
