const btns = document.querySelectorAll("button[class^=accordion__question]");

btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    let tr = e.target;

    let sible =
      tr.parentElement.nextElementSibling.childNodes[0].nextElementSibling;

    sible.classList.toggle("hide");
    sible.classList.toggle("show");

    if (sible.matches(".show")) {
      sible.style.animation = "slowMotionOpen 2s 1";
      tr.childNodes[1].style.transform = "rotate(180deg)";
      tr.style.fontWeight = "700";
    } else if (sible.matches(".hide")) {
      sible.style.animation = "slowMotionClose 5s 1";
      tr.childNodes[1].style.transform = "rotate(0deg)";
      tr.style.fontWeight = "500";
    }

   
  });
});
