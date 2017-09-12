/*
    const re = /ab+c/;
    const re = new RegExp('ab+c');
    new RegExp(pattern[, flags])
        g: global match.
        i: ignore case.
        m: multiline. Treats beginning (^) and end ($) characters as working over multiple lines.
        u: unicode. Treat pattern as a sequence of unicode code points.
        y: sticky. Matches only from the index indicated by the lastIndex property of this regular expression in the target string.

    1/ test 
    2/ exec 
    3/ Match
    4/ Search
    5/ Split
    6/ Replace

*/
//The function must return a RegExp object that matches any string  beginning with and ending in the same vowel.
function regexVar() {
    /*
     * Declare a RegExp object variable named 're'
     * It must match a string that starts and ends with the same vowel (i.e., {a, e, i, o, u})
     */
    var re = new RegExp('^([aeiou]).*\\1$');
    /*
     * Do not remove the return statement
     */
    return re;
}

/*
String  starts with the prefix Mr., Mrs., Ms., Dr., or Er.
The remainder of string  (i.e., the rest of the string after the prefix) consists of one or more upper and/or lowercase English alphabetic letters (i.e., [a-z] and [A-Z]).
*/
function regexVar() {
    /*
     * Declare a RegExp object variable named 're'
     * It must match a string that starts with 'Mr.', 'Mrs.', 'Ms.', 'Dr.', or 'Er.', 
     * followed by one or more letters.
     */
  
    const re = new RegExp('^(Mr|Mrs|Ms|Dr|Er)\\.[a-zA-Z]+$');
    
    /*
     * Do not remove the return statement
     */
    return re;
}