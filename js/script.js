// javascript for hidden navigation

window.onscroll = function() {
  scrollFunction()
};

function scrollFunction() {
  if (document.body.scrollTop > 550 || document.documentElement.scrollTop > 50) {
    document.getElementById("hidden-navbar").style.top = "0";
  } else {
    document.getElementById("hidden-navbar").style.top = "-80px";
  }
}


// const musicPlayer = document.getElementById('musicPlayer')

// musicPlayer.autoplay


window.sr = ScrollReveal({
  reset: true,
  useDelay: 'always',
  delay: 200
});

sr.reveal('#drinks');
sr.reveal('#bar');
sr.reveal('#foto');
sr.reveal('#contact');
sr.reveal('#footer');