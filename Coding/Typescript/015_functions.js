var fullName = function (first, last) {
    return first + " " + last;
};
console.log(fullName('Marty', 'McFly'));
// Marty McFly
var gradeGenerator = function (grade) {
    if (grade < 60) {
        return 'F';
    }
    else if (grade >= 60 && grade < 70) {
        return 'D';
    }
    else if (grade >= 70 && grade < 80) {
        return 'C';
    }
    else if (grade >= 80 && grade < 90) {
        return 'B';
    }
    else {
        return 'A';
    }
};
console.log(gradeGenerator(45));
console.log(gradeGenerator(100));
console.log(gradeGenerator(81));
console.log(gradeGenerator(90));
// F
// A
// B
// A 
//# sourceMappingURL=015_functions.js.map