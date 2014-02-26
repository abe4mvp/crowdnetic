$(document).ready(function(){
	var fields = {
		t: "Ticker",
		e: "Exchange",
		l: "Last Price",
		ltt: "Last Trade Time",
		c: "Change",
		cp: "Change Percent",
		hi: "High",
		lo: "Low"
	}


	var success = function(response) {

		$.each(fields, function(key, value) {
			
  				$("#" + key).text(fields[key] + ": " + response[key]);
		});
	}



	
	var fetch = function (symbol) {
		$.getJSON("http://google.com/finance/info?infotype=infoquoteall&q=" + symbol + "&callback=?"
		).done(function(response){
			success(response[0]);
			$("#message").text(symbol);
		})
		
		if ($("#message").text() === "fetching..."){
			$("#message").text("invalid symbol");
		} 
			
	}

	// load default

	fetch("IBM");



	$("#submit").click(function() {
		event.preventDefault();
		$("#message").text("fetching...")

		var symbol = $("#q").val();


		fetch(symbol);
		
	})

})