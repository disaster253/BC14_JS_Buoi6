function divCreate() {
	for (var i = 1; i <= 10; i += 1) {
		var div = $('<div id="' + i + '"></div>').appendTo("#divContent");
		if (i % 2 == 0) {
			$('<p class="bg-danger p-3 m-0 text-light">Div chẵn ' + i + '</p>').appendTo(div);

		} else {
			$('<p class="bg-primary p-3 m-0 text-light">Div lẻ ' + i + '</p>').appendTo(div);

		}
	}
}
