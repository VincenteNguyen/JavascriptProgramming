
// The days of the week are: "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
function getDayName(dateString) {
    let dayName;
    // Write your code here
    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    dayName = days[new Date(dateString).getDay()];
    return dayName;
}
function getDayName(dateString) {
    let dayName;
    // Write your code here
    switch(new Date(dateString).getDay()){
        case 0 : dayName = "Sunday"; break;
        case 1 : dayName = "Monday"; break;
        case 2 : dayName = "Tuesday"; break;
        case 3 : dayName = "Wednesday"; break;
        case 4 : dayName = "Thursday"; break;
        case 5 : dayName = "Friday"; break;
            case 6 : dayName = "Saturday"; break;
    }
    return dayName;
}

/*
date: Tue Feb 03 1987 12:34:56 GMT+0000 (UTC)
date.getDate(): 3
date.getDay(): 2
date.getFullYear(): 1987
date.getHours(): 12
date.getMilliseconds(): 789
date.getMinutes(): 34
date.getMonth(): 1
date.getSeconds(): 56
date.getTime(): 539354096789
date.getYear(): 87
date.toDateString(): Tue Feb 03 1987
*/