function cal() {
	var n = +document.getElementById("nNum").value;
	var resultEL = document.getElementById("showResult");
	total = 1;
	for (var i = 1; i <= n; i += 1) {
		total *= i;
	}
	function showResult() {
		resultEL.style.display = "block";
		resultEL.innerHTML = " " + total
	}
	showResult();
}