export function isPalindrome(word: string):boolean {

    // remove everything that's not an alphanumeric character, replace with empty string
    const normalizedWord = word.toLowerCase().replace(/[^a-z0-9]/g, "");
    console.log(`Normalized to: ${normalizedWord}`)

    let startPointer = 0;
    let endPointer = normalizedWord.length - 1;

    while (startPointer < endPointer) {
        if (normalizedWord.charAt(startPointer) !== normalizedWord.charAt(endPointer)){
            console.log(`${word} is not a palindrome 😤`)
            return false;
        }
        startPointer++;
        endPointer--;
    }

    console.log(`${word} is a palindrome! 🏆`)
    return true;
}