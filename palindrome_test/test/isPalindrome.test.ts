import {isPalindrome} from "../src/isPalindrome";

describe("isPalindrome function", () => {
    it("returns true for simple palindromes", () => {
        expect(isPalindrome("racecar")).toBe(true);
        expect(isPalindrome("madam")).toBe(true);
    });

    it("returns true for complex palindromes", () => {
        expect(isPalindrome("Never odd or even")).toBe(true);
        expect(isPalindrome("A man, a plan, a canal: Panama")).toBe(true);
        expect(isPalindrome("r:a.-)ceCAR/ . , []{}/"))
    })

    it("returns false for words that aren't palindromes", () => {
        expect(isPalindrome("postgresql")).toBe(false);
        expect(isPalindrome("typescript")).toBe(false);
    });

    it("returns false for complex phrases that aren't palindromes", () => {
        expect(isPalindrome("postgres iS, a. super::rad database")).toBe(false);
        expect(isPalindrome("wow::/. this phrase is NOT a ./;'[]]]][] palindrome"))
    })

    it("ignores case and whitespace", () => {
        expect(isPalindrome("RAceCAr")).toBe(true);
        expect(isPalindrome("\t mAdAm     \t")).toBe(true);
    });
});