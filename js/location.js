function getlocation(){
					var e = $('.locationbox').val();
					var query2 = "select * from geo.placefinder where text='" + e + "'";
					var cacheBuster2 = Math.floor((new Date().getTime()) / 1200 / 1000);
					var url2 = 'http://query.yahooapis.com/v1/public/yql?q=' + encodeURIComponent(query2) + '&format=json&_nocache=' + cacheBuster2;

					window['wxCallback2'] = function(data2) {
						if(data2.query.count == 0){
							alert('Location not found');
						}
						if(data2.query.count == 1){
							var woeid = data2.query.results.Result.woeid;
							$('.locationbox').val(woeid);
							$.removeCookie('woeid');
							$.cookie('woeid', woeid, { expires: 365 * 10 });
							updateCookies();
							gettimediff();
							refreshWeather();
						}
						if(data2.query.count > 1){
							alert('More than one location found, try to narrow your search');
						}
						
					};

					$.ajax({
						url: url2,
						dataType: 'jsonp',
						cache: true,
						jsonpCallback: 'wxCallback2'
					});
};
function gettimediff(){
					var e = $.cookie('woeid');
					var query4 = "select * from geo.placefinder where woeid='" + e + "'";
					var cacheBuster4 = Math.floor((new Date().getTime()) / 1200 / 1000);
					var url4 = 'http://query.yahooapis.com/v1/public/yql?q=' + encodeURIComponent(query4) + '&format=json&_nocache=' + cacheBuster4;

					window['wxCallback4'] = function(data4) {
						var lat = data4.query.results.Result.latitude;
						var lng = data4.query.results.Result.longitude;
						gettimediff2(lat,lng);
					};

					$.ajax({
						url: url4,
						dataType: 'jsonp',
						cache: true,
						jsonpCallback: 'wxCallback4'
					});
};
function gettimediff2(lat,lng){
					var query3 = "select * from xml where url='http://ws.geonames.org/timezone?lat=" + lat +"&lng=" + lng + "'";
					var cacheBuster3 = Math.floor((new Date().getTime()) / 1200 / 1000);
					var url3 = 'http://query.yahooapis.com/v1/public/yql?q=' + encodeURIComponent(query3) + '&format=json&_nocache=' + cacheBuster3;

					window['wxCallback3'] = function(data3) {
							var off = data3.query.results.geonames.timezone.rawOffset;
							$.removeCookie('utcOffset');
							$.cookie('utcOffset', off, { expires: 365 * 10 });
					};

					$.ajax({
						url: url3,
						dataType: 'jsonp',
						cache: true,
						jsonpCallback: 'wxCallback3'
					});
};