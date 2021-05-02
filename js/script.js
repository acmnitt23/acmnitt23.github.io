// var day;
// var sec;
// var ticker;

// function getSeconds() {
// 	let now = new Date();
// 	let days = 3;
// 	let next = new Date(
// 		now.getFullYear(),
// 		now.getMonth(),
// 		now.getDate(),
// 		12,
// 		0,
// 		0
// 	);

// 	let current = now.getTime();
// 	let nextTime = next.getTime();
// 	let diff = parseInt((nextTime - current) / 1000);

// 	if (diff > 0) {
// 		day = days - now.getDay();
// 	} else {
// 		day = days - now.getDay() - 1;
// 	}

// 	if (day < 0) {
// 		day += 7;
// 	}

// 	if (diff <= 0) {
// 		diff += 86400 * 7;
// 	}

// 	startTimer(diff);
// }

// function startTimer(secs) {
// 	sec = parseInt(secs);
// 	ticker = setInterval("tick()", 1000);
// 	tick();
// }

// function tick() {
// 	let secs = sec;

// 	if (secs > 0) {
// 		sec--;
// 	} else {
// 		clearInterval(ticker);
// 		getSeconds();
// 	}

// 	let days = Math.floor(secs / 86400);
// 	secs %= 86400;
// 	let hours = Math.floor(secs / 3600);
// 	secs %= 3600;
// 	let mins = Math.floor(secs / 60);
// 	secs %= 60;

// 	$("#days").text(day);
// 	$("#hours").text((hours < 10 ? "0" : "") + hours);
// 	$("#minutes").text((mins < 10 ? "0" : "") + mins);
// 	$("#seconds").text((secs < 10 ? "0" : "") + secs);
// }

// $(document).ready(function () {
// 	getSeconds();
// });





function makeTimer() {
	var endTime = new Date("May 15, 2021 10:00:00 PDT");
	var endTime = (Date.parse(endTime)) / 1000;
	var now = new Date();
	var now = (Date.parse(now) / 1000);
	var timeLeft = endTime - now;
	var days = Math.floor(timeLeft / 86400); 
	var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
	var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600 )) / 60);
	var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));
	if (hours < "10") { hours = "0" + hours; }
	if (minutes < "10") { minutes = "0" + minutes; }
	if (seconds < "10") { seconds = "0" + seconds; }
	$("#days").html(days + "<span>Days</span>");
	$("#hours").html(hours + "<span>Hours</span>");
	$("#minutes").html(minutes + "<span>Minutes</span>");
	$("#seconds").html(seconds + "<span>Seconds</span>");
 }
 setInterval(function() { makeTimer(); }, 0);