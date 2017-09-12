//Closure

//          _______________________Immediately invoked______________________
//         |                                                                |
//         |        Scope retained for use      ___Returned as the____      |
//         |       only by returned function   |    value of func     |     |
//         |             |            |        |                      |     |
//         v             v            v        v                      v     v
var func = (function() { var a = 'val'; return function() { alert(a); }; })();

var func = function() { var count = 0; return function() { count++; console.log(count); if(count===3){ alert(count); count=0;};}; };
