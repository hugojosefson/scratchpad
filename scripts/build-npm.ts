/** Compile the scratchpad's two public library entries for npm. */
const config = JSON.parse(await Deno.readTextFile("deno.json"));
const git = new Deno.Command("git", {
  args: ["rev-parse", "HEAD"],
  clearEnv: true,
  env: { PATH: Deno.env.get("PATH") ?? "" },
});
const output = await git.output();
if (!output.success) {
  throw new Error("Cannot read the release commit.");
}
const sha = Deno.env.get("HJ_RELEASE_SHA") ??
  new TextDecoder().decode(output.stdout).trim();
await Deno.mkdir(".hj/npm", { recursive: true });
for (
  const [source, name] of [["src/lib/mod.ts", "index.js"], [
    "src/hello.ts",
    "hello.js",
  ]]
) {
  const result = await new Deno.Command("deno", {
    args: [
      "bundle",
      "--platform=browser",
      "--format=esm",
      "--output",
      `.hj/npm/${name}`,
      source,
    ],
    clearEnv: true,
    env: { PATH: Deno.env.get("PATH") ?? "" },
  }).output();
  if (!result.success) {
    throw new Error("npm bundle failed.");
  }
}
await Deno.writeTextFile(
  ".hj/npm/package.json",
  JSON.stringify(
    {
      name: config.name,
      version: config.version,
      gitHead: sha,
      type: "module",
      description: "Scratchpad fixture for hj npm publication",
      license: config.license,
      main: "index.js",
      exports: { ".": "./index.js", "./hello": "./hello.js" },
      files: ["index.js", "hello.js", "README.md", "LICENSE"],
      repository: {
        type: "git",
        url: "git+https://github.com/hugojosefson/scratchpad.git",
      },
      publishConfig: {
        access: "public",
        registry: "https://registry.npmjs.org/",
      },
    },
    null,
    2,
  ) + "\n",
);
await Deno.writeTextFile(
  ".hj/npm/README.md",
  "# Scratchpad\n\nTest package for the hj npm publisher.\n\nImport `@hugojosefson/scratchpad` or `@hugojosefson/scratchpad/hello`.\n",
);
await Deno.copyFile("LICENSE", ".hj/npm/LICENSE");
