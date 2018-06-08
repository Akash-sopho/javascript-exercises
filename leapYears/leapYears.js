var leapYears = function(year) {
	if (year%100 == 0 ) {
		if ((year/100)%4 == 0)
			return true;
		else 
			return false;
	}
	else if (year%100 != 0 && year%4 == 0)
		return true;
	return false;
}

module.exports = leapYears
