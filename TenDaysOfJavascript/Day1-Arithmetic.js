/* Day 1: Arithmetic Operators

    For example, in the expression a++, ++ is a unary operator.
    For example, in the expression a + b = c, + is a binary operator.
    For example, in the expression a ? b : c, the use of ? and : in this manner constitutes the ternary operator.
  
    Arithmetic Operators
    1. Addition (+)
    2. Subtraction (-)
    3. Multiplication (*)
    4. Division (/)
    5. Remainder (%)
    6. Exponentiation (**) : is a part of ECMAScript2016 feature set. 2 ** 3 // evaluates to 8.
    7. Unary Negation (-): -(-5) // evaluates to 5 (not --5)
    8. Unary Plus (+): +(-4) // evaluates to -4
    9. Increment (++) 
    10. Decrement (--)
*/

/**
*   Calculate the area of a rectangle.
*
*   length: The length of the rectangle.
*   width: The width of the rectangle.
*   
*	Return a number denoting the rectangle's area.
**/
function getArea(length, width) {
    let area;
    // Write your code here
    area = Number(length) * Number(width);
    return area;
}

/**
*   Calculate the perimeter of a rectangle.
*	
*	length: The length of the rectangle.
*   width: The width of the rectangle.
*   
*	Return a number denoting the perimeter of a rectangle.
**/
function getPerimeter(length, width) {
    let perimeter;
    // Write your code here
    perimeter = 2 * (Number(length) + Number(width));
    return perimeter;
}


//=============Function=============
/*
 * Create the function factorial here
 */
function factorial(n){
    var value = 1;
    for(var i=2;i<=n;i++){
        value*=i;
    }
    return value;
}

//Recursion
function factorial(n) {
    if (n > 1) {
        return n * factorial(n - 1);
    }
    // Returns 1 if n <= 1
    return 1;
}

function fibonacci(n){
    if (n > 2) {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
    else if (n < 1) {
        return 0;
    }
    // else, return 1
    return 1;
}

//===============Variable Declaration Keywords===================
/*
    1/ var: For variables declared within a function, this means they are only available within the function itself.
        For variables declared outside any function, this means they are globally available throughout the program

        Example: 
            function main(input) {
                var a = input;

                // If 'a' is odd:
                if (a % 2 == 1) {
                    var a = input + 1;
                    console.log("if(a): " + a);
                }

                console.log("main(a): " + a);
            }
            input: 11
            => output: 
                if(a): 12
                main(a): 12

    2/ let: - limited in scope to the block, statement, or expression in which they are used
            - cannot redeclare a variable declared using the let keyword within the same scope as the original variable
        Example:
            function main(input) {
                let a = input;

                // If 'a' is odd:
                if (a % 2 == 1) {
                    // Increment 'a' by 1
                    let a = input + 1;
                    console.log("if(a): " + a);
                }

                console.log("main(a): " + a);
            }
            input: 11
            => output: 
                if(a): 12
                main(a): 11

    3/ const: create a read-only reference to a value, cannot be reassigned, requires that constant variables always be initialized.
*/