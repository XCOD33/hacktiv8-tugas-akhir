window.onscroll = function() {scrollFunction()};
 
function scrollFunction() {
  if (document.body.scrollTop > 250 || document.documentElement.scrollTop > 250) {
    
    document.getElementById("navbar").style.background = "#fff";
  } else {
   
    document.getElementById("navbar").style.background = "none";
  }
}