//---Day 0: Hello, World!

function greeting(parameterVariable) {
    // This line prints 'Hello, World!' to the console:
    console.log('Hello, World!');
    console.log(parameterVariable);

    // Write a line of code that prints parameterVariable to stdout using console.log:
}

//---Day 0: Data types

function performOperation(secondInteger, secondDecimal, secondString) {
    // Declare a variable named 'firstInteger' and initialize with integer value 4.
    const firstInteger = 4;

    // Declare a variable named 'firstDecimal' and initialize with floating-point value 4.0.
    const firstDecimal = 4.0;

    // Declare a variable named 'firstString' and initialize with the string "HackerRank".
    const firstString = 'HackerRank ';

    // Write code that uses console.log to print the sum of the 'firstInteger' and 'secondInteger' (converted to a Number        type) on a new line.
    console.log(firstInteger + parseInt(secondInteger));

    // Write code that uses console.log to print the sum of 'firstDecimal' and 'secondDecimal' (converted to a Number            type) on a new line.
    console.log(firstDecimal + parseFloat(secondDecimal));

    // Write code that uses console.log to print the concatenation of 'firstString' and 'secondString' on a new line. The        variable 'firstString' must be printed first.
    console.log(firstString + secondString);
}

//--Day 1: Arithmetic operators

function getArea(length, width) {
    let area;
    // Write your code here
    area = length * width;
    return area;
}

function getPerimeter(length, width) {
    let perimeter;
    // Write your code here
    perimeter = (length + width) * 2;
    return perimeter;
}

//--Day 1: Functions

function factorial(n) {
    if (n > 1) {
        return n * factorial(n - 1);
    } else
        return 1;
}

//--Day 1 Let and Const

function main() {
    // Write your code here. Read input using 'readLine()' and print output using 'console.log()'.
    let r = readLine();
    const PI = Math.PI;
    // Print the area of the circle:
    console.log(PI * r * r);

    // Print the perimeter of the circle:
    console.log(2 * PI * r);

    //--Day 2: conditional statements

    function getGrade(score) {
        let grade;
        // Write your code here
        if (score > 25 && score <= 30) { grade = "A" };
        else if (score > 20 && score <= 25) { grade = "B" };
        else if (score > 15 && score <= 20) { grade = "C" };
        else if (score > 10 && score <= 15) { grade = "D" };
        else if (score > 5 && score <= 10) { grade = "E" };
        else if (score > 0 && score <= 5) { grade = "F" };

        return grade;
    }

    //--Day 2: conditional statement switch

    function getLetter(s) {
        let letter;
        // Write your code here
        switch (true) {
            case "aeiou".includes(s[0]):
                //"aeiou".includes(s[0]):
                letter = "A"
                break;
            case "bcdfg".includes(s[0]):
                //"bcdfg".includes(s[0]):
                letter = "B"
                break;
            case "hjklm".includes(s[0]):
                letter = "C"
                break;
            default:
                letter = "D";
        }

        return letter;
    }

    //--Day 2: loops

    function vowelsAndConsonants(s) {
        const vowels = "aeiou";
        var consonants = '';

        for (var i = 0; i < s.length; i++) {
            if (vowels.includes(s[i])) {
                console.log(s[i]);
            } else {
                consonants += s[i] + '\n';
            }
        }

        console.log(consonants.trim());
    }