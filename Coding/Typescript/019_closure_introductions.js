// functions have access to any public variables in the outer scope
// function nameFunction(name : string) : void {
// 	var n : string = name;
// 	function printName() {
// 		console.log(n);
// 	}
// 	printName();
// }
// nameFunction('Toby')
// * * * * 
// The inner function maintain access to the out scope even AFTER the values are returned!
// function nameFunction(name : string) {
// 	var n : string = name;
// 	return function() {
// 		console.log(n);
// 	}
// }
// var nameAgain = nameFunction('Drogon');
// nameAgain();
// * * * * 
function startingLineup() {
    var nowStarting = 1;
    return {
        nextPlayer: function () { nowStarting++; },
        currentPlayer: function () { return nowStarting; }
    };
}
var players = startingLineup();
console.log(players.currentPlayer());
players.nextPlayer();
console.log(players.currentPlayer());
players.nextPlayer();
console.log(players.currentPlayer());
var pitchers = startingLineup();
console.log(pitchers.currentPlayer());
//# sourceMappingURL=019_closure_introductions.js.map