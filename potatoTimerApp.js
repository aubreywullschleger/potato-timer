(function() {
  var pomodoroTime = document.getElementById('pomTime');
  pomodoroTime.value = (1 * 60);
  pomodoroTime.innerHTML = (pomodoroTime.value / 60);
  
  var potatoes = document.getElementById('potatoes');
  
  var breakTime = document.getElementById('breakTime');
  breakTime.value = (1 * 60);
  breakTime.innerHTML = (breakTime.value / 60);
  
  var min = document.getElementById('min');
  var sec = document.getElementById('sec');
  
  var addPomodoroTime = document.getElementById('pAddTime');
  var subtractPomodoroTime = document.getElementById('pSubtractTime');
  var pomodoroTotalClicks = 1;
  
  var addBreakTime = document.getElementById('bAddTime');
  var subtractBreakTime = document.getElementById('bSubtractTime');
  var breakTotalClicks = 1;
    
  addPomodoroTime.addEventListener('click', function() {
    if(startClicks === 0){
      pomodoroTotalClicks += 1;
      pomodoroTime.innerHTML = pomodoroTotalClicks;
      pomodoroTime.value = (pomodoroTotalClicks * 60);
      if((pomodoroTime.value/60) < 10) {
        min.innerHTML = '0' + (pomodoroTime.value/60);
      } else {
        min.innerHTML = (pomodoroTime.value/60);
      }
      sec.innerHTML = '00';
    }
  });
  
  subtractPomodoroTime.addEventListener('click', function() {
    if(startClicks === 0) {
      if(pomodoroTotalClicks > 1){  
      pomodoroTotalClicks -= 1;
      pomodoroTime.innerHTML = pomodoroTotalClicks;
      pomodoroTime.value = (pomodoroTotalClicks * 60);
      if((pomodoroTime.value/60) < 10) {
        min.innerHTML = '0' + (pomodoroTime.value/60);
      } else {
        min.innerHTML = (pomodoroTime.value/60);
      }
      sec.innerHTML = '00';
    }
    }
  });
  
  addBreakTime.addEventListener('click', function() {
    breakTotalClicks += 1;
    breakTime.innerHTML = breakTotalClicks;
    breakTime.value = (breakTotalClicks * 60);
  });
  
  subtractBreakTime.addEventListener('click', function() {
    if(breakTotalClicks > 0) {
      breakTotalClicks -= 1;
      breakTime.innerHTML = breakTotalClicks;
      breakTime.value = (breakTotalClicks * 60);
    }
  });
  
  var start = document.getElementById('start');
  var startClicks = 0;
  var pomodoroInterval;
  var breakInterval; 
  
  // var min = document.getElementById('min');
  // var sec = document.getElementById('sec');
  
  if((pomodoroTime.value/60) < 10) {
    min.innerHTML = '0' + (pomodoroTime.value/60);
  } else {
    min.innerHTML = (pomodoroTime.value/60);
  }
  sec.innerHTML = '00';
  
  start.addEventListener('click', function() {
    if (startClicks === 0){
      startClicks = 1;
      var pomodoro = pomodoroTime.value;
      pomodoroInterval = setInterval(function() {
        var minutes = Math.floor(parseInt(pomodoro / 60));
        var seconds = Math.floor(parseInt(pomodoro % 60));
        
        if(minutes < 10) {
          min.innerHTML = '0' + minutes;
        } else {
          min.innerHTML = minutes;
        }
        
        if(seconds < 10) {
          sec.innerHTML = '0' + seconds;
        } else {
          sec.innerHTML = seconds;
        }
        
        if (--pomodoro < 0) {
          clearInterval(pomodoroInterval);
          startBreakTimer();
          return;
        }
      }, 1000);
    }
  });
  
  function startBreakTimer () {
    var breakSession = breakTime.value;
    
    breakInterval = setInterval(function() {
      var minutes = Math.floor(parseInt(breakSession / 60));
      var seconds = Math.floor(parseInt(breakSession % 60));
      
      if(minutes < 10) {
        min.innerHTML = '0' + minutes;
      } else {
        min.innerHTML = minutes;
      }
      
      if(seconds < 10) {
        sec.innerHTML = '0' + seconds;
      } else {
        sec.innerHTML = seconds;
      }
      
      if(--breakSession < 0) {
        startClicks = 0;
        if((pomodoroTime.value/60) < 10){
          min.innerHTML = '0' + (pomodoroTime.value/60);
        } else{
          min.innerHTML = (pomodoroTime.value / 60);
        }
        clearInterval(breakInterval);
        var potatoEarned = randomPotato();
        potatoes.innerHTML = potatoes.innerHTML +
          '<img src=' + potatoEarned.src +
          ' class="potatoEarned" height=' +
          potatoEarned.height + ' width="50px">';
        return;
      }
    }, 1000);
  }
  
  var reset = document.getElementById('reset');
  
  reset.addEventListener('click', function() {
    startClicks = 0;
    clearInterval(pomodoroInterval);
    clearInterval(breakInterval);
    if((pomodoroTime.value / 60)){
      min.innerHTML = '0' + (pomodoroTime.value / 60);
    } else {
      min.innerHTML = (pomodoroTime.value / 60);  
    }
    sec.innerHTML = '00';
  });
  
}());