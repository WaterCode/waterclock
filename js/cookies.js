function updateCookies() {
	cookieTheme = $.cookie('cookieTheme');
	$('#dropTheme').prop('selectedIndex', parseInt(cookieTheme)-1);
	$.removeCookie('cookieTheme');
	$.cookie('cookieTheme', cookieTheme, { expires: 365 * 10 });
	if(cookieTheme == '1'){
		$('.loader').attr('src', 'img/theme1.png').load(function() {
			$('body').css('background-image', "url('img/theme1.png')");
			$('.mainpage').fadeIn('slow');
			$('.settingsPanel').fadeIn('slow');
			$('.loading').hide();
		});
		$('.mainpage').css("color", "#000000");
		$('.icon-cog').css("background-color", "#cadcea");
		$('.icon-refresh').css("background-color", "#cadcea");
	}
	if(cookieTheme == '2'){
		$('.loader').attr('src', 'img/theme2.png').load(function() {
			$('body').css('background-image', "url('img/theme2.png')");
			$('.mainpage').fadeIn('slow');
			$('.settingsPanel').fadeIn('slow');
			$('.loading').hide();
		});
		$('.mainpage').css("color", "#FFFFFF");
		$('.icon-cog').css("background-color", "#555555");
		$('.icon-refresh').css("background-color", "#555555");
	}
	if(cookieTheme == '3'){
		$('.loader').attr('src', 'img/theme3.png').load(function() {
			$('body').css('background-image', "url('img/theme3.png')");
			$('.mainpage').fadeIn('slow');
			$('.settingsPanel').fadeIn('slow');
			$('.loading').hide();
		});
		$('.mainpage').css("color", "#FFFFFF");
		$('.icon-cog').css("background-color", "#000000");
		$('.icon-refresh').css("background-color", "#000000");
	}
	var cookieTime = $.cookie('cookieTime');
	$('.autoTime').prop('selectedIndex', parseInt(cookieTime));
	$.removeCookie('cookieTime');
	$.cookie('cookieTime', cookieTime, { expires: 365 * 10 });
	var woeid = $.cookie('woeid');
	$('.locationbox').val(woeid);
	$.removeCookie('woeid');
	$.cookie('woeid', woeid, { expires: 365 * 10 });
	var utcOffset = $.cookie('utcOffset');
	$.removeCookie('utcOffset');
	$.cookie('utcOffset', utcOffset, { expires: 365 * 10 });
	var dsaving = $.cookie('dsaving');
	$('#dsavingbox').prop('selectedIndex', parseInt(dsaving));
	$.removeCookie('dsaving');
	$.cookie('dsaving', dsaving, { expires: 365 * 10 });
	var tempdeg = $.cookie('tempdeg');
	$('#tempdegbox').prop('selectedIndex', parseInt(tempdeg));
	$.removeCookie('tempdeg');
	$.cookie('tempdeg', tempdeg, { expires: 365 * 10 });
	var currentVersion = $.cookie('currentVersion');
	$.removeCookie('currentVersion');
	$.cookie('currentVersion', currentVersion, { expires: 365 * 10 });
}
function dsaving(e){
	$.removeCookie('dsaving');
	$.cookie('dsaving', e.toString(), { expires: 365 * 10 });
}
function tempdeg(e){
	$.removeCookie('tempdeg');
	$.cookie('tempdeg', e.toString(), { expires: 365 * 10 });
	refreshWeather();
}
function newtheme(e) {
	e = e+1;
	$.removeCookie('cookieTheme');
	$.cookie('cookieTheme', e.toString(), { expires: 365 * 10 });
	updateCookies();
}
function deleteAllCookies() {
	var n=confirm("Are you sure you want to delete all cookies?\nNote: when this page is refreshed, cookies are created")
if (n==true){
  $.removeCookie('cookieTheme');
  $.removeCookie('cookieTime');
}else{

}
}
function refreshWeather(){
					 // Specify the ZIP/location code and units (f or c)
					var loc = $.cookie('woeid'); // or e.g. SPXX0050
					var tempdeg = $.cookie('tempdeg');
					if(tempdeg == '0'){
					var u = 'c';
					}else{
					var u = 'f';
					};

					var query = "SELECT * FROM weather.forecast WHERE woeid='" + loc + "' AND u='" + u + "'";
					var cacheBuster = Math.floor((new Date().getTime()) / 1200 / 1000);
					var url = 'http://query.yahooapis.com/v1/public/yql?q=' + encodeURIComponent(query) + '&format=json&_nocache=' + cacheBuster;

					window['wxCallback'] = function(data) {
						var info = data.query.results.channel.item.condition;
						var location = data.query.results.channel.location;
						var code = parseInt(info.code);
						weatherCode(code);
						$('.temp').html(info.temp + '&deg;' + u.toUpperCase());
						$('#location').html(location.city + ', ' + location.country);
						$('.currentlocation').html(location.city + ', ' + location.country);
						$('.info').html(info.text);
						
					};

					$.ajax({
						url: url,
						dataType: 'jsonp',
						cache: true,
						jsonpCallback: 'wxCallback'
					});
};
function refreshWeatherfirst(){
					 // Specify the ZIP/location code and units (f or c)
					var loc = $.cookie('woeid'); // or e.g. SPXX0050
					var tempdeg = $.cookie('tempdeg');
					if(tempdeg == '0'){
					var u = 'c';
					}else{
					var u = 'f';
					};
					
					var query = "SELECT * FROM weather.forecast WHERE woeid='" + loc + "' AND u='" + u + "'";
					var cacheBuster = Math.floor((new Date().getTime()) / 1200 / 1000);
					var url = 'http://query.yahooapis.com/v1/public/yql?q=' + encodeURIComponent(query) + '&format=json&_nocache=' + cacheBuster;

					window['wxCallback'] = function(data) {
						var info = data.query.results.channel.item.condition;
						var location = data.query.results.channel.location;
						var code = parseInt(info.code);
						weatherCodefirst(code);
						$('.temp').html(info.temp + '&deg;' + u.toUpperCase());
						$('#location').html(location.city + ', ' + location.country);
						$('.currentlocation').html(location.city + ', ' + location.country);
						$('.info').html(info.text);
						
					};

					$.ajax({
						url: url,
						dataType: 'jsonp',
						cache: true,
						jsonpCallback: 'wxCallback'
					});
};
function weatherCodefirst(n){
	switch(n)
{
case 0:
$('.weather').text('(');
break;
case 1:
$('.weather').text('(');
break;
case 2:
$('.weather').text('(');
break;
case 3:
$('.weather').text('z');
break;
case 4:
$('.weather').text('z');
break;
case 5:
$('.weather').text('o');
break;
case 6:
$('.weather').text('o');
break;
case 7:
$('.weather').text('o');
break;
case 8:
$('.weather').text('3');
break;
case 9:
$('.weather').text('3');
break;
case 10:
$('.weather').text('=');
break;
case 11:
$('.weather').text('9');
break;
case 12:
$('.weather').text('9');
break;
case 13:
$('.weather').text('o');
break;
case 14:
$('.weather').text('o');
break;
case 15:
$('.weather').text('o');
break;
case 16:
$('.weather').text('o');
break;
case 17:
$('.weather').text('y');
break;
case 18:
$('.weather').text('o');
break;
case 19:
$('.weather').text('k');
break;
case 20:
$('.weather').text('g');
break;
case 21:
$('.weather').text('g');
break;
case 22:
$('.weather').text('g');
break;
case 23:
$('.weather').text('g');
break;
case 24:
$('.weather').text('g');
break;
case 25:
$('.weather').text('+');
break;
case 26:
$('.weather').text('`');
break;
case 27:
$('.weather').text('2');
break;
case 28:
$('.weather').text('`');
break;
case 29:
$('.weather').text('2');
break;
case 30:
$('.weather').text('`');
break;
case 31:
$('.weather').text('/');
break;
case 32:
$('.weather').text('v');
break;
case 33:
$('.weather').text('/');
break;
case 34:
$('.weather').text('v');
break;
case 35:
$('.weather').text('e');
break;
case 36:
$('.weather').text('E');
break;
case 37:
$('.weather').text('z');
break;
case 38:
$('.weather').text('z');
break;
case 39:
$('.weather').text('z');
break;
case 40:
$('.weather').text('3');
break;
case 41:
$('.weather').text('o');
break;
case 42:
$('.weather').text('o');
break;
case 43:
$('.weather').text('o');
break;
case 44:
$('.weather').text('`');
break;
case 45:
$('.weather').text('z');
break;
case 46:
$('.weather').text('o');
break;
case 47:
$('.weather').text('z');
break;
default:
  $('.weather').text('|');
}
updateCookies();
};
function weatherCode(n){
	switch(n)
{
case 0:
$('.weather').text('(');
break;
case 1:
$('.weather').text('(');
break;
case 2:
$('.weather').text('(');
break;
case 3:
$('.weather').text('z');
break;
case 4:
$('.weather').text('z');
break;
case 5:
$('.weather').text('o');
break;
case 6:
$('.weather').text('o');
break;
case 7:
$('.weather').text('o');
break;
case 8:
$('.weather').text('3');
break;
case 9:
$('.weather').text('3');
break;
case 10:
$('.weather').text('=');
break;
case 11:
$('.weather').text('9');
break;
case 12:
$('.weather').text('9');
break;
case 13:
$('.weather').text('o');
break;
case 14:
$('.weather').text('o');
break;
case 15:
$('.weather').text('o');
break;
case 16:
$('.weather').text('o');
break;
case 17:
$('.weather').text('y');
break;
case 18:
$('.weather').text('o');
break;
case 19:
$('.weather').text('k');
break;
case 20:
$('.weather').text('g');
break;
case 21:
$('.weather').text('g');
break;
case 22:
$('.weather').text('g');
break;
case 23:
$('.weather').text('g');
break;
case 24:
$('.weather').text('g');
break;
case 25:
$('.weather').text('+');
break;
case 26:
$('.weather').text('`');
break;
case 27:
$('.weather').text('2');
break;
case 28:
$('.weather').text('`');
break;
case 29:
$('.weather').text('2');
break;
case 30:
$('.weather').text('`');
break;
case 31:
$('.weather').text('/');
break;
case 32:
$('.weather').text('v');
break;
case 33:
$('.weather').text('/');
break;
case 34:
$('.weather').text('v');
break;
case 35:
$('.weather').text('e');
break;
case 36:
$('.weather').text('E');
break;
case 37:
$('.weather').text('z');
break;
case 38:
$('.weather').text('z');
break;
case 39:
$('.weather').text('z');
break;
case 40:
$('.weather').text('3');
break;
case 41:
$('.weather').text('o');
break;
case 42:
$('.weather').text('o');
break;
case 43:
$('.weather').text('o');
break;
case 44:
$('.weather').text('`');
break;
case 45:
$('.weather').text('z');
break;
case 46:
$('.weather').text('o');
break;
case 47:
$('.weather').text('z');
break;
default:
  $('.weather').text('|');
}
};
var weatherTimer = window.setInterval( function() {
						refreshWeather();
					},900000);
function weatherTimerUpdate(time,seltime){
$.removeCookie('cookieTime');
	$.cookie('cookieTime', seltime.toString(), { expires: 365 * 10 });
	updateCookies();
					if(time == "Off"){
						clearInterval(weatherTimer);
					}else{
					var timeInt = parseInt(time) * 60000;
					window.clearInterval(weatherTimer);
					weatherTimer = window.setInterval( function() {
						refreshWeather();
					},timeInt);
					}
				};