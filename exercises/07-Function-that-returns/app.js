let dollarToEuro = function(dollarValue){
	return dollarValue * 0.89;
}
let euroToYen = function(euroValue){
	return euroValue * 124.15;
}
//***** YOUR CODE BELOW ↓ ******///

let dolarAEuro = dollarToEuro(137);
let euroAYen = euroToYen(dolarAEuro);

console.log(euroAYen);