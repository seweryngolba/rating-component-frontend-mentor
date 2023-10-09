const submitBtn = document.querySelector("#submit-button");
const ratingPage = document.querySelector(".first-page");
const thanksPage = document.querySelector(".thank-you");

submitBtn.addEventListener("click", () => {
  ratingPage.style.display = "none";
  thanksPage.style.display = "flex";
});
