function isIsogram(str) {
    const normalizedString = str.toLowerCase();

    for (let i = 0; i < normalizedString.length; i++) {
        for (let j = i + 1; j < normalizedString.length; j++){
            if (str[j] === str[i]) return false;
        }
    }

    return true;
}

console.log(isIsogram("aba"));