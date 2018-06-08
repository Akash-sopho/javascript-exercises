var sumAll = function(addend1, addend2) {
	var i;
	var sum = 0;
	for (i = addend1;i < addend2 + 1;i++) {
		sum = sum + i;
	}
	return sum;
}

module.exports = sumAll
