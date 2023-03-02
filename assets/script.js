$(document).ready(function() {
	$('.fade-in').addClass('active');
});
var nystories = document.querySelector("p").offsetTop;
window.onscroll = function() {
  if (window.pageYOffset > 0) {
 var opac = (window.pageYOffset / nystories);
    console.log(opac);
  document.body.style.background = "linear-gradient(rgba(255, 255, 255, 0" + opac + "), rgba(255, 255, 255, 1" + opac + ")), url(/assets/img/onions.jpg) no-repeat";
  }
}
