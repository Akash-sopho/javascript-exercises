var repeatString = function(str, num) {
	var i;
	var res = "";
	for (i = 0;i < num;i++)
		res = res + str;
	return res;
}

module.exports = repeatString
