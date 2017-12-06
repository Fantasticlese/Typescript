console.log(fullName('Doc', 'Brown'));
// console.log(otherFullName('Marty', 'McFly'));
// console.log(thirdFullName('Biff', 'Tannen'));

// Function declaration
function fullName(first : string, last : string) : string {
	return first + " " + last;
}

// Function Expression
var otherFullName : (first : string, last : string) => string;

otherFullName = function (first : string, last : string) {
	return first + " " + last;
}

var thirdFullName : (first : string, last : string) => string = function fullName(first : string, last : string) : string {
	return first + " " + last;
}