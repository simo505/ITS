var navToggle = document.querySelector('.nav-toggle');
var nav = document.querySelector('.nav');

function doToggle(event){
  event.preventDefault();
  nav.classList.toggle('expanded');
}

navToggle.addEventListener('click', function(event) {
  doToggle(event);
})