/* eslint-disable */

/**
 * This script prints some tags to stdout so that
 * changesets can pick them up for each release
 */
const fs = require("fs");
const path = require("path");
const { spawnSync, execSync } = require("child_process");

/**
 * Add each package that we want to create a git tag for
 */
const packages = [
  path.join(__dirname, "..", "apps", "docs", "package.json"),
  path.join(__dirname, "..", "apps", "web", "package.json"),
];

packages.forEach((packagePath) => {
  const pkgJson = require(packagePath);

  const tag = `${pkgJson.name}@${pkgJson.version}`;

  const { status, stdout } = spawnSync("git", [
    "ls-remote",
    `https://${process.env.GITHUB_TOKEN}@github.com/statelyai/registry.git`,
    tag,
  ]);

  const exists = stdout.toString().trim() !== "";

  if (!exists) {
    console.log(`\nNew tag: ${tag}`);
  }
});

/**
 * Push to main
 */
execSync(
  [
    `git config user.name "github-actions[bot]"`,
    `git config user.email "github-actions[bot]@users.noreply.github.com"`,
    `git commit -m 'Release to main' --allow-empty`,
    `git push origin HEAD:main --force`,
  ].join(" && "),
  {
    stdio: "inherit",
  },
);
