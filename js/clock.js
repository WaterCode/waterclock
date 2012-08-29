function num_abbrev_str(num) {
					if (typeof num == 'number') {
						num = num.toString()
					}
					var len = num.length, last_char = num.charAt(len - 1), abbrev
					if (len == 2 && num.charAt(0) == '1') {
						abbrev = '<sup>th</sup>'
					} else {
						if (last_char == '1') {
							abbrev = '<sup>st</sup>'
						} else if (last_char == '2') {
							abbrev = '<sup>nd</sup>'
						} else if (last_char == '3') {
							abbrev = '<sup>rd</sup>'
						} else {
							abbrev = '<sup>th</sup>'
						}
					}
					return num + abbrev
				}
function clock(){
var offset = $.cookie('utcOffset');
 // create Date object for current location
    od = new Date();
    
    // convert to msec
    // add local time zone offset 
    // get UTC time in msec
    utc = od.getTime() + (od.getTimezoneOffset() * 60000);
    
    // create new Date object for different city
    // using supplied offset
    d = new Date(utc + (3600000*offset));
var hour = d.getHours();
var e = $.cookie('dsaving');
if(e=='1'){
hour=hour+1;
}
$('#hour').html(( hour < 10 ? "0" : "" ) + hour);
$('.colon').show();
$('#year').html(d.getFullYear());
var mins = d.getMinutes();
$('#mins').html(( mins < 10 ? "0" : "" ) + mins);
var month =new Array();
month[0]="January";
month[1]="February";
month[2]="March";
month[3]="April";
month[4]="May";
month[5]="June";
month[6]="July";
month[7]="August";
month[8]="September";
month[9]="October";
month[10]="November";
month[11]="December";
var n = month[d.getMonth()];
$('#month').html(n);
var weekday=new Array(7);
weekday[0]="Sunday";
weekday[1]="Monday";
weekday[2]="Tuesday";
weekday[3]="Wednesday";
weekday[4]="Thursday";
weekday[5]="Friday";
weekday[6]="Saturday";
var na = weekday[d.getDay()];
$('#day').html(na);
var nc = d.getDate();
$('#daynum').html(num_abbrev_str(nc));
};