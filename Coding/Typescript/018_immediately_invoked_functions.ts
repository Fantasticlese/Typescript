var names : string[] = ['Starlord', 'Pennywise', 'Chewbacca'];
var counter : number = 0;

(function() {
	for (let name in names) {
		counter++;
	}
})();

console.log(counter);