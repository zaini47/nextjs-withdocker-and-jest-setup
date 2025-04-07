module.exports = {
  preset: "ts-jest",
  testEnvironment: "jest-environment-jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
  },
  collectCoverage: true, 
  collectCoverageFrom: ["src/**/*.{ts,tsx}"], 
  coverageDirectory: "coverage",
  testPathIgnorePatterns: ["/node_modules/", "/build/"], 
  clearMocks: true, 
};
// /** @type {import('ts-jest').JestConfigWithTsJest} **/
// module.exports = {
//   testEnvironment: "node",
//   transform: {
//     "^.+\.tsx?$": ["ts-jest",{}],
//   },
// };
