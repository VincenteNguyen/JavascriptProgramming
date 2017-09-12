/*
    Classes in JavaScript
        1/ Using Functions
            function Fruit (type) {
                this.type = type;
                this.color = 'unknown';
                this.getInformation = function() {
                    return 'This ' + this.type + ' is ' + this.color + '.';
                }
            }

        2/ The Prototype Property
            function Fruit (type) {
                this.type = type;
                this.color = 'unknown';
            }

            Fruit.prototype.getInformation = function() {
                return 'This ' + this.type + ' is ' + this.color + '.';
            }
            
        3/ Using Object Literals
            let lime = {
                type: 'Mexican lime',
                color: 'green',
                getInformation: function() {
                    return 'This ' + this.type + ' is ' + this.color + '.';
                }
            }

        4/ Singleton Class Using a Function
            let lime = new function() {
                this.type = 'Mexican lime';
                this.color = 'green';
                this.getInformation = function() {
                    return 'This ' + this.type + ' is ' + this.color + '.';
                };
            }

        5/ Class Declarations
            class Polygon {
                constructor(height, width) {
                    this.height = height;
                    this.width = width;
                }
            }
        6/ Class Expressions
            let Polygon = class {
                constructor(height, width) {
                    this.height = height;
                    this.width = width;
                }
            };

            let Polygon = class Polygon {
                constructor(height, width) {
                    this.height = height;
                    this.width = width;
                }
            };

        
*/

/*
 *  Write code that adds an 'area' method to the Rectangle class' prototype
 */
Rectangle.prototype.area = function(){
    return this.w * this.h;
}

/*
 * Create a Square class that inherits from Rectangle and implement its class constructor
 */
class Square extends Rectangle {
    constructor(w){
        super(w,w);
    }
}

//Template Literal
/*
 * Determine the original side lengths and return an array:
 * - The first element is the length of the shorter side
 * - The second element is the length of the longer side
 * 
 * Parameter(s):
 * literals: The tagged template literal's array of strings.
 * expressions: The tagged template literal's array of expression values (i.e., [area, perimeter]).
 */
function sides(literals, ...expressions) {
    let a = expressions[0];
    let p = expressions[1];
    const s1 = (p + Math.sqrt(p*p-16*a))/4;
    const s2 = (p - Math.sqrt(p*p-16*a))/4;
    return [s1, s2].sort();
}

//Arrow Function
/*
 * Modify and return the array so that all even elements are doubled and all odd elements are tripled.
 * 
 * Parameter(s):
 * nums: An array of numbers.
 */
function modifyArray(nums) {
    return nums.map(x=> x%2==0 ? x*2 : x*3);
    
    /*
    return nums.map(function(x){
        return x%2==0 ? x*2 : x*3;
    })
    */
    //return nums.map((x) => {return x%2==0 ? x*2 : x*3;});
    //return nums.map((x) => x%2==0 ? x*2 : x*3);
    
}