/* Arrays 
        - Create an Array
            var a = ['first', 'second'];

        - Access (Index Into) an Array Item
            // first = 'first'
            let first = a[0];
            // last = 'second'
            let last = a[a.length - 1]; 

        - Loop Over an Array
            a.forEach(function(e, i, array  ) {
                // 'i' is the index
                // 'e' is the element
                console.log(i + ' ' + e);
            });

        - Append to the End of an Array    
            a.push('third');
        
        - Remove From the end of an Array
            let removed = a.pop();

        - Remove From the Front of an Array
            let removed = a.shift();

        - Add to the Front of an Array
            a.unshift('fourth');    

        - Find the Index of an Item in the Array
            let position = a.indexOf('second');

        - Remove an Item by Index Position
            a.splice(position, elementsToRemove);

        - Copy an Array
            let b = a.slice();

        - Sort an Array
            a.sort();
            // Sort in descending lexicographical order using a compare function
            a.sort(function(x, y) { return x < y; } );

        - Iterate Over an Array
            for (let e of a) {
                console.log('e:', e);
            }
*/

/**
*   Return the second largest number in the array.
*   @param {Number[]} nums - An array of numbers.
*   @return {Number} The second largest number in the array.
**/
function getSecondLargest(nums) {
    var sorted = nums.sort((x,y) => x < y);
    var max = sorted[0];
    var second = max;
    for(var i = 0; i < sorted.length; i++){
        if(sorted[i] < max){
            second = sorted[i];
            break;
        }
    }
    return second;
}

/* Try, Catch, and Finally

*/
/*
 * Complete the reverseString function
 * Use console.log() to print to stdout.
 */
function reverseString(s) {
    try{
        var r = s.split("").reverse().join("");
        console.log(r);
    } catch(e){
        console.log("s.split is not a function");
        console.log(s);
    }
}

/*
 * Complete the isPositive function.
 * If 'a' is positive, return "YES".
 * If 'a' is 0, throw an Error with the message "Zero Error"
 * If 'a' is negative, throw an Error with the message "Negative Error"
 */
function isPositive(a) {
    if(a===0){
        throw new Error("Zero Error");
    }
    if(a<0){
        throw new Error("Negative Error");
    }
    return "YES";
}

