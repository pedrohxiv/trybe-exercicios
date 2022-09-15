document
  .getElementById("btn")
  .addEventListener(
    "click",
    () =>
      (document.querySelector("p").textContent =
        parseInt(document.querySelector("p").textContent) + 1)
  );
