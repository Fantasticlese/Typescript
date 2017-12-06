console.log(fullName('Doc', 'Brown'));
console.log(otherFullName('Marty', 'McFly'));
console.log(thirdFullName('Biff', 'Tannen'));
// Function declaration
function fullName(first, last) {
    return first + " " + last;
}
// Function Expression
var otherFullName;
otherFullName = function (first, last) {
    return first + " " + last;
};
var thirdFullName = function fullName(first, last) {
    return first + " " + last;
};
//# sourceMappingURL=017_function_declarations_vs_expressions.js.map