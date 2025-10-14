function count(string) {
    let result = {};

    // empty case
    if (string.length === 0) {
        return result;
    }

    // loop through each char in the string
    for (let i = 0; i < string.length; i++) {
        const char = string.charAt(i)

        if (result[char]) {
            result[char]++;
        } else {
            result[char] = 1;
        }
    }


    return result;
}

console.log(count('aba'));