module.exports = {
  // Run ESLint with auto-fix on all staged JS/TS files
  "**/*.{js,jsx,ts,tsx}": ["bun eslint --fix"],

  // Run Stylelint on CSS files
  "**/*.css": ["bun stylelint --fix"],

  // Run Prettier on all supported staged files
  "**/*.{js,jsx,ts,tsx,json,css,md}": ["bun prettier --write"],
};
