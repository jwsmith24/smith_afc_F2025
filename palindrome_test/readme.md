# Steps to run
1) cd into `palindrome_test` directory
2) run `npm i` to install required dependencies
3) run `npm test` to execute the test suite



## Jest with TypeScript
- `jest.config.js` added to tell Jest how it should execute the tests.
  - Uses the ts-jest package to transform TS test files to JS before running them
- Requirement 2 (valid input types) is implicitly met by using Typescript.
If the source code calls `isPalindrome` with a non-string input, the code will not compile.