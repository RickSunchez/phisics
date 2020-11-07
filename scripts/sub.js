function ExpToDec(num) {
	var data = (num+"").split(/[Ee]/),
		num  = data[0],
		exp  = "";

	if (data.length > 1) {
		num = Math.round(parseFloat(data[0])*1000)/1000;
		num += "x10";
		exp += data[1];
	}

	return [num, exp];
}
function q(Volts, Capacity) {
	return Volts * Capacity
}
function C(Eps, Sq, Dist) {
	var Eps0 = 8.85 * Math.pow(10, -12);
	return (Eps0 * Eps * Sq) / Dist
}