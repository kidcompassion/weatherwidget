// Docs at http://simpleweatherjs.com
$(function() {
  $.simpleWeather({
    location: 'Edmonton, Alberta',
    unit: 'c',
    success: function(weather) {
      html = '<p class="weather-title">'+weather.title+'</p>';
	  html += '<i class="fa fa-sun-o"></i>';
      html += '<p class="temperature">'+weather.temp+' &deg;C &amp; ' +weather.currently;

      $("#weather").html(html);
    },
    error: function(error) {
      $("#weather").html('<p>'+error.message+'</p>');
    }
  });
});
