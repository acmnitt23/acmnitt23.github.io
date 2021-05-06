// // var day;
// // var sec;
// // var ticker;

// // function getSeconds() {
// // 	let now = new Date();
// // 	let days = 3;
// // 	let next = new Date(
// // 		now.getFullYear(),
// // 		now.getMonth(),
// // 		now.getDate(),
// // 		12,
// // 		0,
// // 		0
// // 	);

// // 	let current = now.getTime();
// // 	let nextTime = next.getTime();
// // 	let diff = parseInt((nextTime - current) / 1000);

// // 	if (diff > 0) {
// // 		day = days - now.getDay();
// // 	} else {
// // 		day = days - now.getDay() - 1;
// // 	}

// // 	if (day < 0) {
// // 		day += 7;
// // 	}

// // 	if (diff <= 0) {
// // 		diff += 86400 * 7;
// // 	}

// // 	startTimer(diff);
// // }

// // function startTimer(secs) {
// // 	sec = parseInt(secs);
// // 	ticker = setInterval("tick()", 1000);
// // 	tick();
// // }

// // function tick() {
// // 	let secs = sec;

// // 	if (secs > 0) {
// // 		sec--;
// // 	} else {
// // 		clearInterval(ticker);
// // 		getSeconds();
// // 	}

// // 	let days = Math.floor(secs / 86400);
// // 	secs %= 86400;
// // 	let hours = Math.floor(secs / 3600);
// // 	secs %= 3600;
// // 	let mins = Math.floor(secs / 60);
// // 	secs %= 60;

// // 	$("#days").text(day);
// // 	$("#hours").text((hours < 10 ? "0" : "") + hours);
// // 	$("#minutes").text((mins < 10 ? "0" : "") + mins);
// // 	$("#seconds").text((secs < 10 ? "0" : "") + secs);
// // }

// // $(document).ready(function () {
// // 	getSeconds();
// // // });
// // particlesJS("particles-js", {
// // 	"particles": {
// // 	  "number": {
// // 		"value": 1200,
// // 		"density": {
// // 		  "enable": true,
// // 		  "value_area": 300
// // 		}
// // 	  },
// // 	  "color": {
// // 		"value": "#64fffe"
// // 	  },
// // 	  "shape": {
// // 		"type": "circle",
// // 		"stroke": {
// // 		  "width": 0,
// // 		  "color": "#0300cc"
// // 		},
// // 		"polygon": {
// // 		  "nb_sides": 5
// // 		},
// // 		"image": {
// // 		  "src": "img/github.svg",
// // 		  "width": 100,
// // 		  "height": 100
// // 		}
// // 	  },
// // 	  "opacity": {
// // 		"value": 1,
// // 		"random": true,
// // 		"anim": {
// // 		  "enable": true,
// // 		  "speed": 6,
// // 		  "opacity_min": 0.5914085914085914,
// // 		  "sync": false
// // 		}
// // 	  },
// // 	  "size": {
// // 		"value": 1.5,
// // 		"random": true,
// // 		"anim": {
// // 		  "enable": false,
// // 		  "speed": 4,
// // 		  "size_min": 0.1,
// // 		  "sync": true
// // 		}
// // 	  },
// // 	  "line_linked": {
// // 		"enable": false,
// // 		"distance": 150,
// // 		"color": "#ffffff",
// // 		"opacity": 0.4,
// // 		"width": 1
// // 	  },
// // 	  "move": {
// // 		"enable": true,
// // 		"speed": 0.1,
// // 		"direction": "top",
// // 		"random": true,
// // 		"straight": false,
// // 		"out_mode": "out",
// // 		"bounce": true,
// // 		"attract": {
// // 		  "enable": true,
// // 		  "rotateX": -200,
// // 		  "rotateY": -200
// // 		}
// // 	  }
// // 	},
// // 	"interactivity": {
// // 	  "detect_on": "canvas",
// // 	  "events": {
// // 		"onhover": {
// // 		  "enable": true,
// // 		  "mode": "bubble"
// // 		},
// // 		"onclick": {
// // 		  "enable": true,
// // 		  "mode": "repulse"
// // 		},
// // 		"resize": true
// // 	  },
// // 	  "modes": {
// // 		"grab": {
// // 		  "distance": 400,
// // 		  "line_linked": {
// // 			"opacity": 1
// // 		  }
// // 		},
// // 		"bubble": {
// // 		  "distance": 250,
// // 		  "size": 0,
// // 		  "duration": 2,
// // 		  "opacity": 0,
// // 		  "speed": 1
// // 		},
// // 		"repulse": {
// // 		  "distance": 400,
// // 		  "duration": 0.4
// // 		},
// // 		"push": {
// // 		  "particles_nb": 4
// // 		},
// // 		"remove": {
// // 		  "particles_nb": 2
// // 		}
// // 	  }
// // 	},
// // 	"retina_detect": true
// //   });
  




// // function myFunction() {
// // 	var x = document.getElementById("myTopnav");
// // 	if (x.className === "topnav") {
// // 	  x.className += " responsive";
// // 	} else {
// // 	  x.className = "topnav";
// // 	}
// //   }


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



//  particlesJS("particles-js", {
// 	"particles": {
// 	  "number": {
// 		"value": 1200,
// 		"density": {
// 		  "enable": true,
// 		  "value_area": 300
// 		}
// 	  },
// 	  "color": {
// 		"value": "#64fffe"
// 	  },
// 	  "shape": {
// 		"type": "circle",
// 		"stroke": {
// 		  "width": 0,
// 		  "color": "#0300cc"
// 		},
// 		"polygon": {
// 		  "nb_sides": 5
// 		},
// 		"image": {
// 		  "src": "img/github.svg",
// 		  "width": 100,
// 		  "height": 100
// 		}
// 	  },
// 	  "opacity": {
// 		"value": 1,
// 		"random": true,
// 		"anim": {
// 		  "enable": true,
// 		  "speed": 6,
// 		  "opacity_min": 0.5914085914085914,
// 		  "sync": false
// 		}
// 	  },
// 	  "size": {
// 		"value": 1.5,
// 		"random": true,
// 		"anim": {
// 		  "enable": false,
// 		  "speed": 4,
// 		  "size_min": 0.1,
// 		  "sync": true
// 		}
// 	  },
// 	  "line_linked": {
// 		"enable": false,
// 		"distance": 150,
// 		"color": "#ffffff",
// 		"opacity": 0.4,
// 		"width": 1
// 	  },
// 	  "move": {
// 		"enable": true,
// 		"speed": 0.1,
// 		"direction": "top",
// 		"random": true,
// 		"straight": false,
// 		"out_mode": "out",
// 		"bounce": true,
// 		"attract": {
// 		  "enable": true,
// 		  "rotateX": -200,
// 		  "rotateY": -200
// 		}
// 	  }
// 	},
// 	"interactivity": {
// 	  "detect_on": "canvas",
// 	  "events": {
// 		"onhover": {
// 		  "enable": true,
// 		  "mode": "bubble"
// 		},
// 		"onclick": {
// 		  "enable": true,
// 		  "mode": "repulse"
// 		},
// 		"resize": true
// 	  },
// 	  "modes": {
// 		"grab": {
// 		  "distance": 400,
// 		  "line_linked": {
// 			"opacity": 1
// 		  }
// 		},
// 		"bubble": {
// 		  "distance": 250,
// 		  "size": 0,
// 		  "duration": 2,
// 		  "opacity": 0,
// 		  "speed": 1
// 		},
// 		"repulse": {
// 		  "distance": 400,
// 		  "duration": 0.4
// 		},
// 		"push": {
// 		  "particles_nb": 4
// 		},
// 		"remove": {
// 		  "particles_nb": 2
// 		}
// 	  }
// 	},
// 	"retina_detect": true
//   });
  


  