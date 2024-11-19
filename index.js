document.addEventListener("DOMContentLoaded", function () {
  const heading = document.getElementById("welcome-heading");
  const text = heading.textContent;
  heading.innerHTML = text
    .split("")
    .map((letter) => `<span>${letter}</span>`)
    .join("");

  gsap.from("#welcome-heading span", {
    duration: 1,
    opacity: 0,
    y: 50,
    stagger: 0.1,
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const loader = document.querySelector(".loader");

  setTimeout(() => {
    loader.classList.add("hidden");
    loader.addEventListener(
      "transitionend",
      () => {
        loader.style.display = "none";
      },
      { once: true }
    );
  }, 3000); 
});
