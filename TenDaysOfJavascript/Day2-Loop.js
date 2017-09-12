/* Conditional Statements: If-Else 
        Equality (==)
            console.log(1 == 1); true
            console.log(1 == "1"); true
            console.log('1' == 1); true
            console.log(0 == false); true
            console.log(0 == null); false
            console.log(0 == undefined); false
            console.log(null == undefined); true
        
        Inequality (!=)
            console.log(1 != 1); false
            console.log(1 != "1"); false
            console.log('1' != 1); false
            console.log(0 != false); false 
            console.log(0 != null); true
            console.log(0 != undefined); true
            console.log(null != undefined); false

        Identity or Strict Equality (===)
            console.log(1 === 1); true
            console.log(1 === "1"); false
            console.log('1' === 1); false
            console.log(0 === false); false
            console.log(0 === null); false
            console.log(0 === undefined); false
            console.log(null === undefined); false

        Non-Identity or Strict Inequality (!==)
            console.log(1 !== 1); false
            console.log(1 !== "1"); true
            console.log('1' !== 1); true
            console.log(0 !== false); true
            console.log(0 !== null); true
            console.log(0 !== undefined); true
            console.log(null !== undefined); true


        Falsy Values
            false
            undefined
            null
            0
            NaN
            "" (i.e., the empty string)
*/

function getGrade(score) {
    let grade;
    // Write your code here
    if(score>25 && score<=30){
        grade = "A";
    }
    else if(score>20 && score<=25){
        grade = "B";
    }
    else if(score>15 && score<=20){
        grade = "C";
    }
    else if(score>10 && score <=15){
        grade = "D";
    }
    else if(score>5 && score <=10){
        grade = "E";
    }
    else if(score>=0 && score<=5){
        grade = "F";
    }
        
    return grade;
}

/* Switch Conditional Statements
*/
function getLetter(s) {
    var letter;
    // Write your code here
    //aeiou A
    //bcdfg B
    //hjklm C
    //npqrstvwxyz D
    var arrayA = ['a','e','i','o','u'];
    var arrayB = ['b','c','d','f','g'];
    var arrayC = ['h','j','k','l','m'];
    var arrayD = ['n','p','q','r','s','t','v','w','x','y','z'];
    const firstCharacter = s[0];
    switch(true){
        case (arrayA.indexOf(firstCharacter) !== -1):
            return 'A';
        case (arrayB.indexOf(firstCharacter) !== -1):
            return 'B';
        case (arrayC.indexOf(firstCharacter) !== -1):
            return 'C';
        case (arrayD.indexOf(firstCharacter) !== -1):
            return 'D';
    }
    return letter;
}

/* Loop
        1/ for
        2/ while
        3/ do-while
        4/ for-in
            Example
                var actress = {
                    firstName: "Julia",
                    lastName: "Roberts",
                    dateOfBirth: "October 28, 1967",
                    nationality: "American",
                    firstMovie: "Satisfaction"
                };

                for (var property in actress) {
                    console.log("actress." + property + " = " + actress[property]);
                }
        5/ for-of
*/
function vowelsAndConsonants(s) {
    var vowels = 'aeiou'.trim().split('');
    
    for(var i = 0; i < s.length; i++){
        if(vowels.indexOf(s[i]) >= 0){
            console.log(s[i]);
        }
    }
    
    for(var i = 0; i < s.length; i++){
        if(vowels.indexOf(s[i]) === -1){
            console.log(s[i]);
        }
    }
}
