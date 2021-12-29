module.exports = {
    moduleFileExtensions: ["js", "jsx", "ts", "tsx"],
    moduleDirectories: ['node_modules', 'src'],
    globals: {
      "ts-jest": {
        tsconfig: "tsconfig.json",
        babelConfig: true,
        diagnostics: false,
      },
    },
    modulePathIgnorePatterns: ["/cypress/"],
    coveragePathIgnorePatterns: ["/node_modules/", "/server/"],
    coverageReporters: ["json", "lcov", "text", "text-summary"],
    moduleNameMapper: {
        'roots': [
            '<rootDir>/src'
        ],
    },
    preset: "ts-jest",
  };