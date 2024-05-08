module.exports = {
  transform: {
    '^.+\\.(js|jsx)$': 'babel-jest',
    '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
  },
  testMatch: [
    // "**/vanilla_js/day4_js_basic1/**/*.test.js",
    // "**/vanilla_js/day5_js_basic2/**/*.test.js",
    // '**/vanilla_js/day6_oop/**/*.test.js',
    // "**/vanilla_js/day7_functions/**/*.test.js",
    '**/vanilla_js/day8_promise/**/*.test.js',
  ],
};
