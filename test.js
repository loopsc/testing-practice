const functions = require("./index");

describe("Capitalize first Letter", () => {
    test("Word is capitalized", () => {
        expect(functions.capitalize("test")).toBe("Test");
    });
});

describe("Reverse a string", () => {
    test("Word is reversed", () => {
        expect(functions.reverse("test")).toBe("tset");
    });
    test("Word is reversed", () => {
        expect(functions.reverse("TesT")).toBe("TseT");
    });
});

describe("Calculator oprations work", () => {
    test("Addition", () => {
        expect(functions.calculator.add(1, 2)).toBe(3);
    });
    test("Subtraction", () => {
        expect(functions.calculator.sub(1, 2)).toBe(-1);
    });
    test("Multiplication", () => {
        expect(functions.calculator.mult(1, 2)).toBe(2);
    });
    test("Division", () => {
        expect(functions.calculator.div(2, 2)).toBe(1);
    });
});

describe("Caesar Cipher works", () => {
    test("Encrypt a word", () => {
        expect(functions.caesarCipher("Hello, World!", 3)).toBe(
            "Khoor, Zruog!"
        );
    });
    test("Encrypt word", () => {
        expect(functions.caesarCipher("abc123", 3)).toBe("def123");
    });
});

describe("Analyze an array", () => {
    test("Analyse an array", () => {
        expect(functions.analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
            average: 4,
            min: 1,
            max: 8,
            length: 6,
        });
    });
});
