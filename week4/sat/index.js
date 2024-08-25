const fs = require("fs");
const path = require("path");
const { Command } = require("commander");
const program = new Command();

function website(name, dir) {
  const indexHtml = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${name}</title>
        <link rel="stylesheet" href="style.css">
    </head>
    <body>
        <h1>Welcome to ${name}</h1>
        <script src="script.js"></script>
    </body>
    </html>
    `;

  const styleCss = ``;

  const scriptJs = `console.log("Template created by CLI");`;

  fs.writeFileSync(path.join(dir, "index.html"), indexHtml);
  console.log(`Website ${name} has been created.`);

  fs.writeFileSync(path.join(dir, "style.css"), styleCss);
  console.log(`CSS file for ${name} has been created.`);

  fs.writeFileSync(path.join(dir, "script.js"), scriptJs);
  console.log(`Script file for ${name} has been created.`);
}

program
  .name("web")
  .description("CLI to make default Website codes")
  .version("1.0.0");

program
  .command("web")
  .description("make website template")
  .argument("<name>", "Name of the website")
  .action((name) => {
    const dir = path.join(process.cwd(), name);

    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir);
      website(name, dir);
    } else if (fs.existsSync(dir)) {
      console.log("Directory already exists, try a different name.");
    }
  });

program.parse(process.argv);
