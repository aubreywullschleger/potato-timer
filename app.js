(function () {
  var timeInputs = document.getElementById('inputs');
  var pTime = document.getElementById('pomTime');
  var pMinus = document.getElementById('pSubtractTime');
  var pAdd = document.getElementById('pAddTime');
  var bTime = document.getElementById('breakTime');
  var bMinus = document.getElementById('bSubtractTime');
  var bAdd = document.getElementById('bAddTime');
  pTime.innerHTML = '0';
  bTime.innerHTML = '0';
  
  var pomTotalTime;
  var breakTotalTime;

  var submit = document.getElementById('submit');

  var min = document.getElementById('min');
  var sec = document.getElementById('sec');
  min.innerHTML = '00';
  sec.innerHTML = '00';

  var start = document.getElementById('start');
  var pause = document.getElementById('pause');
  var changeInterval = document.getElementById('changeInterval');
  var reset = document.getElementById('reset');

  var potatoes = document.getElementById('potatoes');
  var pomodoroInterval;
  var breakInterval;
  var pomodoroCounter;

  var pClicks = 0;
  pAdd.addEventListener('click', function () {
    pClicks = pClicks + 1;
    if(pClicks <= 0 || isNaN(pClicks)){
     pTime.innerHTML = '0';
     pTime.value = 0;
   } else{
     pTime.innerHTML = pClicks;
     pTime.value = pClicks; 
   }
  });

  pMinus.addEventListener('click', function () {
    pClicks -= 1;
    if(pClicks <= 0 || isNaN(pClicks)){
      pTime.innerHTML = '0';
      pTime.value = 0;
    } else {
      pTime.innerHTML = pClicks;
      pTime.value = pClicks;  
    }
  });

  var bClicks = 0;
  bAdd.addEventListener('click', function () {
    bClicks += 1;
    if(bClicks <= 0 || isNaN(bClicks)){
      bTime.innerHTML = '0';
      bTime.value = 0;
    } else {
      bTime.innerHTML = bClicks;
      bTime.value = bClicks;  
    }
  });

  bMinus.addEventListener('click', function () {
    bClicks -= 1;
    if(bClicks < 0 || isNaN(bClicks)){
      bTime.innerHTML = '0';
      bTime.value = 0;
    } else {
      bTime.innerHTML = bClicks;
      bTime.value = bClicks; 
    }
  });

  var startClicks = 0;
  start.addEventListener('click', function () {
    startClicks += 1;
    if(startClicks === 1) {
      startPomodoro(pTime, bTime);  
    }
  });
  
  pause.addEventListener('click', function () {
    var pauseMin = min.innerHTML;
    var pauseSec = sec.innerHTML;
    clearInterval(pomodoroInterval);
    clearInterval(breakInterval);
    startClicks = 0;
    min.innerHTML = pauseMin;
    sec.innerHTML = pauseSec;
    pTime = parseInt(pauseMin * 60) + parseInt(pauseSec);
  });

  reset.addEventListener('click', function () {
    clearInterval(pomodoroInterval);
    clearInterval(breakInterval);
    if(pClicks < 10) {
      min.innerHTML = '0' + pClicks;
    } else{
      min.innerHTML = pClicks;
    }
    sec.innerHTML = '00';
  });

  function startPomodoro(duration, breakDuration) {
    var pomodoro = duration;
    var breakTime = breakDuration;

    pomodoroInterval = setInterval(function () {
      var minutes = Math.floor(parseInt(pomodoro / 60));
      var seconds = Math.floor(parseInt(pomodoro % 60));

      if (minutes < 10) {
        min.innerHTML = '0' + minutes;
      } else {
        min.innerHTML = minutes;
      }
      if (seconds < 10) {
        sec.innerHTML = '0' + seconds;
      } else {
        sec.innerHTML = seconds;
      }

      if (--pomodoro < 0) {
        clearInterval(pomodoroInterval);
        startBreak(breakTime, duration);
        return;
      }
    }, 1000);
    return;
  }

  function startBreak(breakDuration, pomodoroDuration) {
    var breakTimer = breakDuration;
    var pomodoroTime = pomodoroDuration;

    breakInterval = setInterval(function () {
      var minutes = Math.floor(parseInt(breakTimer / 60));
      var seconds = Math.floor(parseInt(breakTimer % 60));

      if (minutes < 10) {
        min.innerHTML = '0' + minutes;
      } else {
        min.innerHTML = minutes;
      }
      if (seconds < 10) {
        sec.innerHTML = '0' + seconds;
      } else {
        sec.innerHTML = seconds;
      }

      if (--breakTimer < 0) {
        pomodoroCounter++;
        var potatoEarned = randomPotato();
        potatoes.innerHTML = potatoes.innerHTML +
          '<img src=' + potatoEarned.src +
          ' class="potatoEarned" height=' +
          potatoEarned.height + ' width="50px">';
        clearInterval(breakInterval);
        clearInterval(pomodoroInterval);
        if ((pomodoroTime/60) < 10) {
          min.innerHTML = '0' + pomodoroTime / 60;
        } else {
          min.innerHTML = pomodoroTime / 60;
        }
        return;
      }
    }, 1000);
    return;
  }

  function startTimers() {
    submit.addEventListener('click', function () {
      pTime = pTime.value * 60 || (25 * 60);
      bTime = bTime.value * 60 || (5 * 60);
      timeInputs.innerHTML = '';
      if ((pTime/60) < 10) {
        min.innerHTML = '0' + pTime / 60;
      } else {
        min.innerHTML = pTime / 60;
      }
      sec.innerHTML = '00';
    });
  }
  startTimers();
}());