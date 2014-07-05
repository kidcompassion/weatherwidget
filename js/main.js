

$(document).ready(function(){



	//icon

// <i class="wi wi-tornado"></i>
var conditionArray = new Array();
conditionArray[0] = 'tornado';
conditionArray[1] = 'hurricane';
conditionArray[2] = 'hurricane';
conditionArray[3] = 'day-thunderstorm';
conditionArray[4] = 'day-thunderstorm';
conditionArray[5] = 'rain-mix';
conditionArray[6] = 'rain-mix';
conditionArray[7] = 'snow';
conditionArray[8] = 'rain-mix';
conditionArray[9] = 'rain-mix';
conditionArray[10] = 'day-showers';
conditionArray[11] = 'day-showers';
conditionArray[12] = 'day-showers';
conditionArray[13] = 'snow';
conditionArray[14] = 'snow';
conditionArray[15] = 'snow-wind';
conditionArray[16] = 'snow';
conditionArray[17] = 'hail';
conditionArray[18] = 'snow';
conditionArray[19] = 'dust';
conditionArray[20] = 'fog';
conditionArray[21] = 'fog';
conditionArray[22] = 'smoke';
conditionArray[23] = 'strong-wind';
conditionArray[24] = 'strong-wind';
conditionArray[25] = 'snowflake-cold';
conditionArray[26] = 'cloudy';
conditionArray[27] = 'night-cloudy';
conditionArray[28] = 'day-cloudy';
conditionArray[29] = 'night-cloudy';
conditionArray[30] = 'day-cloudy';
conditionArray[31] = 'night-clear';
conditionArray[32] = 'day-sunny';
conditionArray[33] = 'night-clear';
conditionArray[34] = 'day-clear';
conditionArray[35] = 'rain-mix';
conditionArray[36] = 'hot';
conditionArray[37] = 'storm-showers';
conditionArray[38] = 'storm-showers';
conditionArray[39] = 'storm-showers';
conditionArray[40] = 'showers';
conditionArray[41] = 'snow';
conditionArray[42] = 'snow';
conditionArray[43] = 'snow';
conditionArray[44] = 'cloudy';
conditionArray[45] = 'thunderstorm';
conditionArray[46] = 'snow';
conditionArray[47] = 'thunderstorm';


console.log(conditionArray);

	
	//simpleweather
	// Docs at http://simpleweatherjs.com
	$(function() {
	  $.simpleWeather({
	    location: 'Edmonton, Alberta',
	    unit: 'c',
	    success: function(weather) {
	      html = '<p class="weather-title">'+weather.title+'</p>';
		  html += '<i class="wi wi-'+ conditionArray[weather.code]+'"></i>';
	      html += '<p class="temperature">'+weather.temp+' &deg;C &amp; ' +weather.currently;

	      $("#weather").html(html);
	    },
	    error: function(error) {
	      $("#weather").html('<p>'+error.message+'</p>');
	    }
	  });
	});
	
	







	//color transition
	
	var date = new Date();
	var hour = date.getHours();
	var minutes = date.getMinutes();
	
	var time = hour + ':' + minutes;
	

	
	//if time is less than 20 h, show light 
	
	if ( hour <= 19 ){
		$('body').css('background', '#8bd3ff');
	} else {
		$('body').css('background', '#00456d');
	}
	
	
	
});