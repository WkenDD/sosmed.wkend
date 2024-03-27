window.onload = function() {
  var delay = 200; // delay in milliseconds
  var links = document.querySelectorAll('.link');
  for (var i = 0; i < links.length; i++) {
    links[i].style.animationDelay = (i * delay) + 'ms';
  }
};