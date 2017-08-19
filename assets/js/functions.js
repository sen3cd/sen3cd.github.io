$(window).on('load', function(event) {
	$("pre.sniJs").snippet("javascript",{style:"whitengrey",menu:true,startText:true});
	$("pre.sniHtml").snippet("HTML",{style:"whitengrey",menu:true,startText:true});
	$('#countDown').revolver({
		year : "2014",
		month : "10",
		day : "23",
	});
});