const fs = require('fs');
const stylelint = require('stylelint');

// Read the CSS file
const cssContent = fs.readFileSync('/home/ashu/react-pr/Emoji-Interpreter/src/styles.css', 'utf8');

// Define Stylelint configuration (customize as needed)
const stylelintConfig = {
  extends: 'stylelint-config-standard',
  // Add more rules or override defaults here
};

// Validate the CSS content
stylelint.lint({
  code: cssContent,
  config: stylelintConfig,
}).then((result) => {
  if (result.errored) {
    console.error('CSS validation failed:');
    result.results.forEach((fileResult) => {
      fileResult.warnings.forEach((warning) => {
        console.error(`[${fileResult.source}:${warning.line}:${warning.column}] ${warning.text}`);
      });
    });
    process.exit(1); // Exit with a non-zero code to indicate failure
  } else {
    console.log('CSS validation passed.');
  }
});
