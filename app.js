var d = new Date();
var pomTime;
var breakTime;
var endTime = d;
var t;
var timeInterval;

function timeRemaining(endtime) {
  var total = Date.parse(endtime) - Date.parse(new Date());
  var seconds = Math.floor((total/1000) % 60);
  var minutes = Math.floor((total/1000/60) % 60);
  var hours = Math.floor((total/(1000*60*60) % 24));
  return {
    'total': total,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds
  };
}

var submit = document.getElementById('submit');
var minutes = document.getElementById('minutes');
var seconds = document.getElementById('seconds');
var stop = document.getElementById('stop');
var start = document.getElementById('start');
var reset = document.getElementById('reset');

function  bt (){
  d.setMinutes(getMinutes() + breakTime);
  endTime = d;
  t = timeRemaining(endTime);
  if(t.minutes < 10) {
    minutes.innerHTML = '0' + t.minutes;  
  } else{
    minutes.innerHTML = t.minutes;
  }
  if(t.seconds <10){
    seconds.innerHTML = '0' + t.seconds;
  } else {
      seconds.innerHTML = t.seconds;
  } if (t.total <= 0) {
    clearInterval(bI);
  }
  d = new Date();
  d.setMinutes(d.getMinutes() + pomTime);
  endTime = d;
  updateClock();
  timeInterval = setInterval(updateClock, 1000);
}
var bI;
    
function updateClock(){
  t = timeRemaining(endTime);
  if(t.minutes < 10) {
    minutes.innerHTML = '0' + t.minutes;  
  } else{
    minutes.innerHTML = t.minutes;
  }
  if(t.seconds <10){
    seconds.innerHTML = '0' + t.seconds;
  } else {
      seconds.innerHTML = t.seconds;
  }
  if(t.total <= 0) {
    clearInterval(timeInterval);
    bt();
  } 
  // d.setMinutes(d.getMinutes() + breakTime);
  // endTime = d;
  // bI = setInterval(bt, 1000);
}
submit.addEventListener('click', function() {
  pomTime = document.getElementById('pomTime').value;
  d.setMinutes(d.getMinutes() + pomTime);
  endTime = d;
  // breakTime = document.getElementById('breakTime').value;
  updateClock();
  timeInterval = setInterval(updateClock, 1000);
});

// stop.addEventListener('click', function() {
//   clearInterval(timeInterval);
//   clearInterval(bI);
//   var timeLeft = timeRemaining(endTime);
//   var total = Date.parse(endTime) - Date.parse(new Date());
//   var newTimeRemaining = {
//     'minutes': timeLeft.minutes,
//     'seconds': timeLeft.seconds
//   };
//   d.setMinutes(newTimeRemaining.minutes);
//   d.setSeconds(newTimeRemaining.seconds);
//   endTime = d;
// });
// 
// start.addEventListener('click', function() {
//   var newDate = new Date();
//   newDate.setMinutes(newDate.getMinutes() + d.getMinutes());
//   newDate.setSeconds(newDate.getSeconds() + d.getSeconds());
//   endTime = newDate;
//   updateClock();
//   timeInterval = setInterval(updateClock, 1000);
// });
// 
// reset.addEventListener('click', function() {
//   d = new Date();
//   d.setMinutes(d.getMinutes() + 1);
//   endTime = d;
//   updateClock();
//   timeInterval = setInterval(updateClock, 1000);
// });