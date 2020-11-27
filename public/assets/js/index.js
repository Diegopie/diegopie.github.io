$(".proj-img").click((event) => {
  const target = event.target
  const state = target.getAttribute("data-state");
  if (state === "still") {
    target.setAttribute("data-state", "animate")
    target.setAttribute("src", target.getAttribute("data-animate"));
  } else if (state === "animate") {
    target.setAttribute("data-state", "still")
    target.setAttribute("src", target.getAttribute("data-still"));
  }
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
// $(".navbar-nav")[0].children