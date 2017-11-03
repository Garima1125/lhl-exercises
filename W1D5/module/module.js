function roundDown(a){
	return Math.floor(a); 
}

module.exports = {
	a: 1,

	sum: function(a, b){
		return roundDown(a + b);
	}
}