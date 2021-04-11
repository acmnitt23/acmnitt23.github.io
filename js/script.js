(function() {

    var width, height, largeHeader, canvas, ctx, points, target, animateHeader = true;

    // Main
    initHeader();
    initAnimation();
    addListeners();

    function initHeader() {
        width = window.innerWidth;
        height = window.innerHeight;
        target = {x: width/2, y: height/2};

        largeHeader = document.getElementById('large-header');
        largeHeader.style.height = height+'px';

        canvas = document.getElementById('demo-canvas');
        canvas.width = width;
        canvas.height = height;
        ctx = canvas.getContext('2d');

        // create points
        points = [];
        for(var x = 0; x < width; x = x + width/20) {
            for(var y = 0; y < height; y = y + height/20) {
                var px = x + Math.random()*width/20;
                var py = y + Math.random()*height/20;
                var p = {x: px, originX: px, y: py, originY: py };
                points.push(p);
            }
        }

        // for each point find the 5 closest points
        for(var i = 0; i < points.length; i++) {
            var closest = [];
            var p1 = points[i];
            for(var j = 0; j < points.length; j++) {
                var p2 = points[j]
                if(!(p1 == p2)) {
                    var placed = false;
                    for(var k = 0; k < 5; k++) {
                        if(!placed) {
                            if(closest[k] == undefined) {
                                closest[k] = p2;
                                placed = true;
                            }
                        }
                    }

                    for(var k = 0; k < 5; k++) {
                        if(!placed) {
                            if(getDistance(p1, p2) < getDistance(p1, closest[k])) {
                                closest[k] = p2;
                                placed = true;
                            }
                        }
                    }
                }
            }
            p1.closest = closest;
        }

        // assign a circle to each point
        for(var i in points) {
            var c = new Circle(points[i], 2+Math.random()*2, 'rgba(255,255,255,0.3)');
            points[i].circle = c;
        }
    }

    // Event handling
    function addListeners() {
        if(!('ontouchstart' in window)) {
            window.addEventListener('mousemove', mouseMove);
        }
        window.addEventListener('scroll', scrollCheck);
        window.addEventListener('resize', resize);
    }

    function mouseMove(e) {
        var posx = posy = 0;
        if (e.pageX || e.pageY) {
            posx = e.pageX;
            posy = e.pageY;
        }
        else if (e.clientX || e.clientY)    {
            posx = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
            posy = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
        }
        target.x = posx;
        target.y = posy;
    }

    function scrollCheck() {
        if(document.body.scrollTop > height) animateHeader = false;
        else animateHeader = true;
    }

    function resize() {
        width = window.innerWidth;
        height = window.innerHeight;
        largeHeader.style.height = height+'px';
        canvas.width = width;
        canvas.height = height;
    }

    // animation
    function initAnimation() {
        animate();
        for(var i in points) {
            shiftPoint(points[i]);
        }
    }

    function animate() {
        if(animateHeader) {
            ctx.clearRect(0,0,width,height);
            for(var i in points) {
                // detect points in range
                if(Math.abs(getDistance(target, points[i])) < 4000) {
                    points[i].active = 0.3;
                    points[i].circle.active = 0.6;
                } else if(Math.abs(getDistance(target, points[i])) < 20000) {
                    points[i].active = 0.1;
                    points[i].circle.active = 0.3;
                } else if(Math.abs(getDistance(target, points[i])) < 40000) {
                    points[i].active = 0.02;
                    points[i].circle.active = 0.1;
                } else {
                    points[i].active = 0;
                    points[i].circle.active = 0;
                }

                drawLines(points[i]);
                points[i].circle.draw();
            }
        }
        requestAnimationFrame(animate);
    }

    function shiftPoint(p) {
        TweenLite.to(p, 1+1*Math.random(), {x:p.originX-50+Math.random()*100,
            y: p.originY-50+Math.random()*100, ease:Circ.easeInOut,
            onComplete: function() {
                shiftPoint(p);
            }});
    }

    // Canvas manipulation
    function drawLines(p) {
        if(!p.active) return;
        for(var i in p.closest) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p.closest[i].x, p.closest[i].y);
            ctx.strokeStyle = 'rgba(156,217,249,'+ p.active+')';
            ctx.stroke();
        }
    }

    function Circle(pos,rad,color) {
        var _this = this;

        // constructor
        (function() {
            _this.pos = pos || null;
            _this.radius = rad || null;
            _this.color = color || null;
        })();

        this.draw = function() {
            if(!_this.active) return;
            ctx.beginPath();
            ctx.arc(_this.pos.x, _this.pos.y, _this.radius, 0, 2 * Math.PI, false);
            ctx.fillStyle = 'rgba(156,217,249,'+ _this.active+')';
            ctx.fill();
        };
    }

    // Util
    function getDistance(p1, p2) {
        return Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2);
    }
    
})();

(function () {
    function FlipClock(el, config) {
      var _this = this;
      var updateTimeout;
      _this.el = el;
      _this.config = Object.assign({
        endDate: new Date((new Date().getFullYear() + 1),0,0),
        labels: {
          days: 'Days',
          hours: 'Hours',
          minutes: 'Minutes',
          seconds: 'Seconds'
        }
      }, config);
  
      _this.current = {
        d: "000",
        h: "00",
        m: "00",
        s: "00"
      };
  
      createView();
      updateView();
      addObserver();
   
      function start() {
        _this.current = getTimeUntil(config.endDate.getTime(), new Date().getTime());
        updateView();
        clearTimeout(updateTimeout);
        updateTimeout = setTimeout(start, 500);
      }
  
      function stop() {
        clearTimeout(updateTimeout);
      }
  
      function destroy() {
        stop();
        _this.observer.disconnect();
        _this.el.innerHTML = "";
      }
  
      function getTimeUntil(dateFuture, dateNow) {
        var delta = Math.abs(dateFuture - dateNow) / 1000;
        var d = Math.floor(delta / 86400);
        delta -= d * 86400;
        var h = Math.floor(delta / 3600) % 24;
        delta -= h * 3600;
        var m = Math.floor(delta / 60) % 60;
        delta -= m * 60;
        var s = Math.floor(delta % 60);
   
        d = pad3(d);
        h = pad2(h);
        m = pad2(m);
        s = pad2(s);
  
        return {
          d: d + "",
          h: h + "",
          m: m + "",
          s: s + ""
        };
      }
  
      // Assumes a non-negative number.
      function pad2(number) {
        if (number < 10) return "0" + number;
        else return "" + number;
      }
  
      function pad3(number) {
        if (number < 10) return "00" + number;
        else if (number < 100) return "0" + number;
        else return "" + number;
      }
  
      function createView() {
        _this.daysLeaf = createLeaf(_this.config.labels.days, 3);
        _this.hoursLeaf = createLeaf(_this.config.labels.hours);
        _this.minutesLeaf = createLeaf(_this.config.labels.minutes);
        _this.secondsLeaf = createLeaf(_this.config.labels.seconds);
      }
  
      function createLeaf(label, digits) {
        var leaf = document.createElement("div");
        leaf.className = "leaf _" + (digits ? digits : "2") + "-digits";
        leaf.setAttribute("data-label", label);
        var top = document.createElement("div");
        var topLabel = document.createElement("span");
        top.className = "top";
        top.appendChild(topLabel);
        var frontLeaf = document.createElement("div");
        var frontLabel = document.createElement("span");
        frontLeaf.className = "leaf-front";
        frontLeaf.appendChild(frontLabel);
        var backLeaf = document.createElement("div");
        var backLabel = document.createElement("span");
        backLeaf.className = "leaf-back";
        backLeaf.appendChild(backLabel);
        var bottom = document.createElement("div");
        var bottomLabel = document.createElement("span");
        bottom.className = "bottom";
        bottom.appendChild(bottomLabel);
  
        leaf.appendChild(top);
        leaf.appendChild(frontLeaf);
        leaf.appendChild(backLeaf);
        leaf.appendChild(bottom);
  
        _this.el.appendChild(leaf);
  
        return {
          el: leaf,
          topLabel: topLabel,
          frontLabel: frontLabel,
          backLabel: backLabel,
          bottomLabel: bottomLabel
        };
      }
  
      function updateView() {
        updateLeaf(_this.daysLeaf, _this.current.d);
        updateLeaf(_this.hoursLeaf, _this.current.h);
        updateLeaf(_this.minutesLeaf, _this.current.m);
        updateLeaf(_this.secondsLeaf, _this.current.s);
      }
  
      function updateLeaf(leaf, value) {
        if (leaf.isFlipping) return;
  
        var currentValue = leaf.topLabel.innerText;
        if (value !== currentValue) {
          leaf.isFlipping = true;
          leaf.topLabel.innerText = value;
          leaf.backLabel.innerText = value;
          leaf.el.classList.add("flip");
  
          clearTimeout(leaf.timeout);
          leaf.timeout = setTimeout(function () {
            leaf.frontLabel.innerText = value;
            leaf.bottomLabel.innerText = value;
            leaf.el.classList.remove("flip");
          }, 600);
  
          clearTimeout(leaf.timeout2);
          leaf.timeout2 = setTimeout(function () {
            leaf.isFlipping = false;
          }, 1000);
        }
      }
  
      function addObserver() {
        _this.observer = new IntersectionObserver(function (entries, observer) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              start();
            } else {
              stop();
            }
          });
        });
  
        _this.observer.observe(_this.el);
      }
  
      return {
        start: start,
        stop: stop,
        destroy: destroy,
        getCurrent: function () {
          return _this.current;
        }
      };
    }
    
    
    //================================================
    // Initialise the examples
    var currentYear = new Date().getFullYear();
  
    // FlipClock 1 Example: My Birthday
    new FlipClock(document.getElementById('flipclock-1'), {
      endDate: new Date(currentYear, 06, 16),
      labels: {
          days: 'Days',
          hours: 'Hours',
          minutes: 'Minutes',
          seconds: 'Seconds'
      }
    });  
    
    // FlipClock 2 Example: Christmas
    new FlipClock(document.getElementById('flipclock-2'), {
      endDate: new Date(currentYear, 11, 24),
      labels: {
          days: 'Tage',
          hours: 'Stunden',
          minutes: 'Minuten',
          seconds: 'Sekunden'
      }
    });
    
    // FlipClock 3 Example: New Years' Eve
    new FlipClock(document.getElementById('flipclock-3'), {
      endDate: new Date(currentYear, 11, 31),
      labels: {
          days: 'Journées',
          hours: 'heures',
          minutes: 'Minutes',
          seconds: 'Secondes'
      }
    });
  })();
  