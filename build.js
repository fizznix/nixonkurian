"use strict";

const chalk = require("chalk");
const boxen = require("boxen");
const fs = require("fs");
const path = require("path");

const option = {
  padding: 1,
  margin: 1,
  borderStyle: "round",
};

const data = {
  name: chalk.white("                Nixon Kurian"),
  handle: chalk.white("Scarface69420"),
  twitter: chalk.gray("https://twitter.com/") + chalk.cyan("kuriannixon"),
  instagram: chalk.gray("https://instagram.com/") + chalk.redBright("fizz_nix"),
  github:
    chalk.gray("https://github.com/") + chalk.blackBright("fizznix"),
  linkedin:
    chalk.gray("https://linkedin.com/in/") +
    chalk.blue("nixon-kurian-5438b320b"),
  npm: chalk.gray("https://npmjs.com/") + chalk.red("~nixonkurian"),
  web: chalk.cyanBright("https://nixonkurian.netlify.app/"),
  labelTwitter: chalk.white.bold("     Twitter:"),
  labelGithub: chalk.white.bold("      Github:"),
  labelInstagram: chalk.white.bold("   Instagram:"),
  labelLinkedIn: chalk.white.bold("    LinkedIn:"),
  labelnpm: chalk.white.bold("         npm:"),
  labelWeb: chalk.white.bold("         Web:"),
};

const newline = "\n";
const headline = `${data.name} / ${data.handle}`;
const twitter = `${data.labelTwitter} ${data.twitter}`;
const instagram = `${data.labelInstagram} ${data.instagram}`;
const github = `${data.labelGithub} ${data.github}`;
const linkedin = `${data.labelLinkedIn} ${data.linkedin}`;
const npm = `${data.labelnpm} ${data.npm}`;
const web = `${data.labelWeb} ${data.web}`;

const output =
  headline +
  newline +
  newline +
  newline +
  github +
  newline +
  linkedin +
  newline +
  twitter +
  newline +
  instagram +
  newline +
  npm +
  newline +
  web +
  newline;

fs.writeFileSync(
  path.join(__dirname, "bin/output"),
  chalk.green(boxen(output, option))
);
