function checkPalindrome(str) {
    let string = str
        .toString() // to be sure that we're working with a string
        .toLowerCase() // make all characters lower cased
        .replace(/[^\w]/gi, ""); // replace characters which aren't letters (e.g. ", . / @ # &" etc.)

    return string === string.split('').reverse().join(''); // compare initial string and reversed string and return the boolean value
}

checkPalindrome('madam');