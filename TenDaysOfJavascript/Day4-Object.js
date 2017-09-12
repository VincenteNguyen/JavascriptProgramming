/* Objects 

*/

/*
 * Complete the Rectangle function
 */
function Rectangle(a, b) {
    var rectangle = {
        length: a,
        width: b,
        perimeter: 2 * (a+b),
        area: a * b
        };

    
    return rectangle;
}


//Count Objects
/*
 * Return a count of the total number of objects 'o' satisfying o.x == o.y.
 * 
 * Parameter(s):
 * objects: an array of objects with integer properties 'x' and 'y'
 */
function getCount(objects) {
    let count = 0;
    
    /*for(let i = 0; i< objects.length; i++){
        const obj = objects[i];
        if(obj.x == obj.y)
            count++;
    }
    */
    /*
    for(let i in objects){
        const o = objects[i];
        if(o.x == o.y)
            count++;
    }
    */
    //value, index, array
    /*
    objects.forEach((value, index, array) => {
       if(value.x == value.y)
           count++;
    });
    */
    /*
    objects.forEach((value, index, array) => {
        const o = array[index];
        if(o.x == o.y)
            count++;
    });
    */
    objects.forEach((value) =>{
        if(value.x == value.y)
            count++;
    })
    return count;
}

/*
 * Implement a Polygon class with the following properties:
 * 1. A constructor that takes an array of integer side lengths.
 * 2. A 'perimeter' method that returns the sum of the Polygon's side lengths.
 */
/*
function Polygon (sideLengths) {
    this.perimeter = function() {
        let result = 0;
        sideLengths.forEach((value) => {
            result += value;
        });
        return result;
    };
}
*/
/*
let Polygon = function(sideLengths){
    this.perimeter = function() {
        let result = 0;
        sideLengths.forEach((value) => {
            result += value;
        });
        return result;
    };
}
*/

/*
function Polygon(sideLengths){
    this.sideLengths = sideLengths;
}
Polygon.prototype.perimeter = function() {
        let result = 0;
        this.sideLengths.forEach((value) => {
            result += value;
        });
        return result;
    };
*/

/*
class Polygon{
    constructor(sideLengths){
        this.sideLengths = sideLengths;
    }
    perimeter(){
        let result = 0;
        this.sideLengths.forEach((value) => {
            result += value;
        });
        return result;
    }
}
*/

/*
let Polygon = class{
    constructor(sideLengths){
        this.sideLengths = sideLengths;
    }
    perimeter(){
        let result = 0;
        this.sideLengths.forEach((value) => {
            result += value;
        });
        return result;
    }
}
*/

let Polygon = class Polygon{
    constructor(sideLengths){
        this.sideLengths = sideLengths;
    }
    perimeter(){
        let result = 0;
        this.sideLengths.forEach((value) => {
            result += value;
        });
        return result;
    }
}