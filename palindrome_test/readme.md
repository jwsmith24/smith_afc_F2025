Notes:

## Jest with TypeScript
- `jest.config.js` added to tell Jest how it should execute the tests.
  - Uses the ts-jest package to transform TS test files to JS before running them
- Requirement 2 (valid input types) is implicitly met by using Typescript.
If the source code calls `isPalindrome` with a non-string input, the code will not compile.