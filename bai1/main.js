function cal() {
	var n = 0;
	var resultEL = document.getElementById("showResult");
	var sum = 0;
	for (var i = 0; i <= n; i += 1) {
		sum += i;
		if (sum >= 10000) {
			break;
		}
		n++;
	}
	function showResult() {
		resultEL.style.display = "block";
		resultEL.innerHTML = "Số nguyên dương nhỏ nhất là: " + i
	}
	showResult();
}