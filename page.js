var counter = document.getElementById('counter');
var count = 0
window.setInterval(function(){
  counter.textContent = count;
  if (count >= 10) {
    count = 0;
  } else {
    count++;
  }
}, 1000);
