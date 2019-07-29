function multiply(x,y) {
	return x*y;
}
multiply.version = "v.1.0.0";
console.log(multiply.version);

function makeMultiplier(multiplier) {
	var myFunc = function (x) {
		return multiplier * x;
	}
	return myFunc;
}

var multiplyBy3 = makeMultiplier(3);
console.log(multiplyBy3(10));