import {isPalindrome} from "../src/isPalindrome";

describe("isPalindrome function basic cases", () => {
    it("returns true for simple palindromes", () => {
        expect(isPalindrome("racecar")).toBe(true);
        expect(isPalindrome("madam")).toBe(true);
    });

    it("returns false for words that aren't palindromes", () => {
        expect(isPalindrome("postgresql")).toBe(false);
        expect(isPalindrome("typescript")).toBe(false);
    });

    it("ignores case and whitespace", () => {
        expect(isPalindrome("RAceCAr")).toBe(true);
        expect(isPalindrome("\t mAdAm     \t")).toBe(true);
    });
});

describe("isPalindrome function complex cases", () => {
    it("returns true for complex palindromes", () => {
        expect(isPalindrome("Never odd or even")).toBe(true);
        expect(isPalindrome("A man, a plan, a canal: Panama")).toBe(true);
        expect(isPalindrome("r:a.-)ceCAR/ . , []{}/"))
    });

    it("returns false for complex phrases that aren't palindromes", () => {
        expect(isPalindrome("postgres iS, a. super::rad database")).toBe(false);
        expect(isPalindrome("w;ow::/. this ph[ra}se is NOT a ./;'[]]]][] palindrome"))
    });
})