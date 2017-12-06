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

function startingLineup(team: string, ...players: string[]) {
	console.log('Team: ' + team);
	for (let player of players) {
		console.log(player);
	}
}

startingLineup('Jazz', 'Mitchell', 'Gobert', 'Ingles', 'Rubio', 'Favors');