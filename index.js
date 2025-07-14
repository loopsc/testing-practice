function capitalize(str) {
    return str[0].toUpperCase() + str.slice(1);
}

function reverse(str) {
    return str.split("").reverse().join("");
}

const calculator = {
    add: function (numOne, numTwo) {
        return numOne + numTwo;
    },
    sub: function (numOne, numTwo) {
        return numOne - numTwo;
    },
    mult: function (numOne, numTwo) {
        return numOne * numTwo;
    },
    div: function (numOne, numTwo) {
        return numOne / numTwo;
    },
};

function caesarCipher(string, shiftFactor) {
    let newString = "";
    for (let i = 0; i < string.length; i++) {
        let currentChar = string.charAt(i);
        // Check if the letter is in the alphabet, maintaining case-sensitivity.
        if (isLetter(currentChar)) {
            newString = newString + getNewLetter(currentChar, shiftFactor);
        } else {
            newString = newString + currentChar;
        }
    }
    return newString;
}

function analyzeArray(arr) {
    return (object = {
        average:
            arr.reduce((acc, curr) => {
                return acc + curr;
            }, 0) / arr.length,

        min: Math.min(...arr),

        max: Math.max(...arr),

        length: arr.length,
    });
}

function getNewLetter(letter, shiftFactor) {
    let currentLetterCode = letter.charCodeAt(0); //65
    let newLetterCode = currentLetterCode + shiftFactor; //67

    const capitalMin = "A".charCodeAt(0);
    const capitalMax = "Z".charCodeAt(0);
    const lowerMin = "a".charCodeAt(0);
    const lowerMax = "z".charCodeAt(0);

    // If letter is uppercase
    if (letter === letter.toUpperCase()) {
        // If the new letter wraps around
        if (newLetterCode > capitalMax) {
            const offset = newLetterCode - capitalMax;
            return String.fromCharCode(offset + capitalMin - 1);
        }
        return String.fromCharCode(newLetterCode);
    }
    // Letter is lowercase
    else {
        if (newLetterCode > lowerMax) {
            const offset = newLetterCode - lowerMax;
            return String.fromCharCode(offset + lowerMin - 1);
        }
        return String.fromCharCode(newLetterCode);
    }
}

function isLetter(letter) {
    return letter.length === 1 && letter.match(/[a-z]/i);
}

module.exports = {
    capitalize,
    reverse,
    calculator,
    caesarCipher,
    analyzeArray
};
