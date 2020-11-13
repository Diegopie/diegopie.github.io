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