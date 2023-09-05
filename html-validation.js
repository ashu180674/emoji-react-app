const fs = require('fs');
const HTMLHint = require('htmlhint').HTMLHint;

// Define the HTMLHint rules (customize as needed)
const htmlhintRules = {
  "tagname-lowercase": true,
  "attr-lowercase": true,
  "attr-value-double-quotes": true,
  // Add more rules here
};

// Read the HTML file
const htmlContent = fs.readFileSync('/home/ashu/react-pr/Emoji-Interpreter/build/index.html', 'utf8');

// Validate the HTML content
const result = HTMLHint.verify(htmlContent, htmlhintRules);

if (result.length > 0) {
  console.error('HTML validation failed:');
  result.forEach((error) => {
    console.error(`[${error.line}:${error.col}] ${error.message}`);
  });
  process.exit(1); // Exit with a non-zero code to indicate failure
} else {
  console.log('HTML validation passed.');
}
