let previousClick;


$(".proj-img").click((event) => {
  // ** Check For and Disable Currently Animated Gif
  const gifContain = $('.proj-img');
  for (let i = 0; i < gifContain.length; i++) {
    // *** Set src Value to data-still Value
    gifContain[i].setAttribute('data-state', 'still')
    gifContain[i].setAttribute('src', gifContain[i].getAttribute('data-still'));
  }
  // ** Check if User Clicked the Same Container To Prevent Animation
  const target = event.target;
  if (previousClick === target) {
    previousClick = undefined;
    return;
  }
  // ** Set Values Equal To Each Other For The Above Conditional to Trigger If the Next event.target Is the Same
  previousClick = target;
  // ** Switch src Value to data-animate Value
  target.setAttribute('data-state', 'animate')
  target.setAttribute('src', target.getAttribute('data-animate'));  
});

$(".button").click((event) => {
  console.log("hit");
  $("#alertModal").modal();
})

function checkActive() {
  const active = window.location.pathname
  const index = $(".navbar-nav")[0].children[0]
  const portfolio = $(".navbar-nav")[0].children[1]
  const contact = $(".navbar-nav")[0].children[2]
  if (active === "/") {
    // console.log("index page");
    $(index).addClass("active");
  } else if (active === "/portfolio") {
    // console.log("portfolio");
    $(portfolio).addClass("active");
  } else if (active === "/contact") {
    // console.log("contact");
    $(contact).addClass("active");
  }
};
checkActive()


// console.log($('.proj-img'));