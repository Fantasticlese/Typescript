// function printAddress(street: string, streetTwo?: string, state = 'UT') {
// 	console.log(street);
// 	if (streetTwo) {
// 		console.log(streetTwo);
// 	}
// 	console.log(state);
// }
// printAddress('1 Wild Pl');
// printAddress('1 Wild Pl', 'Suite 800');
// printAddress('1 Wild Pl', 'Suite 800', 'CA');
function startingLineup(team) {
    var players = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        players[_i - 1] = arguments[_i];
    }
    console.log('Team: ' + team);
    for (var _a = 0, players_1 = players; _a < players_1.length; _a++) {
        var player = players_1[_a];
        console.log(player);
    }
}
startingLineup('Jazz', 'Mitchell', 'Gobert', 'Ingles', 'Rubio', 'Favors');
//# sourceMappingURL=016_function_args.js.map