// Builds index.html for GitHub Pages from family-quiz-game.html.
// family-quiz-game.html is written as page content only (no <!doctype>/<head>), because Claude artifacts
// add that wrapper when publishing. This script adds the same wrapper so the page works as a normal website.
// Run after every change:  node tools/build-pages.js
const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "..");
const body = fs.readFileSync(path.join(root, "family-quiz-game.html"), "utf8");

const favicon = "data:image/svg+xml," + encodeURIComponent(
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y=".9em" font-size="90">🍭</text></svg>'
);

const html = `<!doctype html>
<html lang="en-GB">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<meta name="theme-color" content="#FFF6FA">
<meta name="description" content="A pass-the-phone family quiz that reads questions aloud and adapts the difficulty to each player.">
<link rel="icon" href="${favicon}">
<style>
:root{color-scheme:light;padding-top:env(safe-area-inset-top,0px);padding-bottom:env(safe-area-inset-bottom,0px)}
body{margin:0;font:14px/1.4 system-ui,sans-serif}
img{max-width:100%}
[hidden]{display:none!important}
</style>
</head>
<body>
${body}
</body>
</html>
`;

fs.writeFileSync(path.join(root, "index.html"), html);
console.log("Wrote index.html (" + html.length + " bytes)");
