const backtotop = document.querySelector(".back");

// window.addEventListener("scroll", () => {
//   if (window.scrollY >= 900) {
//     backtotop.style.visibility = "visible";

//   } else {
//     backtotop.style.visibility = "hidden";

//   }


// });

const observerTarget = document.querySelector("header");


const observer = new IntersectionObserver((enteries, observer) => {
  enteries.forEach(entry => {
    if (!entry.isIntersecting) {
      // backtotop.style.visibility = "visible";
      backtotop.classList.add(("shown"))
    } else {
      // backtotop.style.visibility = "hidden";
      backtotop.classList.remove(("shown"))
    }
  });
},{



});

observer.observe(observerTarget);


