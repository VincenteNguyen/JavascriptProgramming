/*
    JavaScript Basics
        + case-sensitive language
        + console.log
        + two styles of comments: Inline Comments & Block Comments (/ * and * /)
        + Data:
            // The integer number twelve:
            12 

            // The floating-point number one-point-two:
            1.2 

            // A string of text:
            "Hello, World." 

            // Another string:
            'Hi!' 

            // A boolean value:
            true 

            // The absence of an object:
            null 

            // An object initializer:
            {x: 1, y: 2} 

            // An array initializer:
            [1, 2, 3, 4, 5] 

        + Identifiers
            // Some valid identifiers are:
            x
            variable_name
            sum13
            _variable
            $variable

        + Optional Semicolon
*/

function greeting(parameterVariable) {
    // This line prints 'Hello, World!' to the console:
    console.log('Hello, World!');

    // Write a line of code that prints parameterVariable to stdout using console.log:
    console.log(parameterVariable);
}

function performOperation(secondInteger, secondDecimal, secondString) {
    // Declare a variable named 'firstInteger' and initialize with integer value 4.
    const firstInteger = 4;
    
    // Declare a variable named 'firstDecimal' and initialize with floating-point value 4.0.
    const firstDecimal = 4.0;
    
    // Declare a variable named 'firstString' and initialize with the string "HackerRank".
    const firstString = 'HackerRank ';
    
    // Write code that uses console.log to print the sum of the 'firstInteger' and 'secondInteger' (converted to a Number        type) on a new line.
    const sumInteger = firstInteger + Number(secondInteger);
    console.log(sumInteger);
    
    // Write code that uses console.log to print the sum of 'firstDecimal' and 'secondDecimal' (converted to a Number            type) on a new line.
    const sumDecimal = firstDecimal + Number(secondDecimal);
    console.log(sumDecimal);
    
    // Write code that uses console.log to print the concatenation of 'firstString' and 'secondString' on a new line. The        variable 'firstString' must be printed first.
    console.log(firstString + secondString);
}

