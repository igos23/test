let page = document.getElementsByTagName('body');
page[0].style.transition = "all";
page[0].style.transitionDuration = "100s";
page[0].style.transition.transitionTimingFunction = "linear";
bap = 1;
page[0].style.transform = "rotate(-1deg)";
setInterval(function(){
  if(bap)
  {
    page[0].style.transform = "rotate(1deg)"
    bap = 0;
  }
  else
  {
    page[0].style.transform = "rotate(-1deg)";
    bap = 1;
  }
}, 100000);
