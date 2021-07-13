function cal() {
	var n = +document.getElementById("nNum").value;
	var x = +document.getElementById("xNum").value;
	var resultEL = document.getElementById("showResult");
	var total = 0;
	var pow = 1;
	for (var i = 1; i <= n; i += 1) {
		pow *= x;
		total += pow;
	}
	function showResult() {
		resultEL.style.display = "block";
		resultEL.innerHTML = " " + total
	}
	showResult();
}