// javascript for hidden navigation

window.onscroll = function() {
  scrollFunction()
};

function scrollFunction() {
  if (document.body.scrollTop > 550 || document.documentElement.scrollTop > 550) {
    document.getElementById("hidden-navbar").style.top = "0";
  } else {
    document.getElementById("hidden-navbar").style.top = "-80px";
  }
}
