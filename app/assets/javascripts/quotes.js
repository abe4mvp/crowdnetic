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
		console.log(response)
			// error handling here
			// if (error condition) {
				//
				//return
			//} else {
				//$("#message").val(response[name]);
			//}

		$.each(fields, function(key, value) {
			
  				$("#" + key).text(fields[key] + ": " + response[key]);
		});
	}



	
	var fetch = function (symbol) {
		$.getJSON("http://google.com/finance/info?infotype=infoquoteall&q=" + symbol + "&callback=?"
		).done(function(response){
			success(response[0]);
		}).fail(function () {
			$("#message").text("invalid symbol");
		});
	}

	// load default

	fetch("IBM");



	$("#submit").click(function() {
		event.preventDefault();
		$("#message").val("fetching...")

		var symbol = $("#q").val();


		fetch(symbol);
		
	})

})