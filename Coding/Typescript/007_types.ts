// Boolean
let paidAccount : boolean = true;

// Number
let age : number = 22;
var taxRate : number = 7.5;

// String
var fullName : string = "Schad McGriffons";

// Array
var ages : number[] = [23, 77, 9];

// Tuple
let player : [number, string, number];
player = [23, 'James', 56];

// Enum
enum StageStatus {Approved, Pending, Denied};
let job : StageStatus = StageStatus.Pending;

// Any
var apiData : any[] = [454, 'Joshy', false];

// Void
function printOut(msg: string) : void {
	console.log(msg);
}