const submitBtn = document.querySelector("#submit-button");
const ratingPage = document.querySelector(".first-page");
const thanksPage = document.querySelector(".thank-you");
const ratingElement = document.querySelectorAll(".rating");
const yourSelection = document.querySelector(".your-selection");

ratingElement.forEach((rate) => {
  rate.addEventListener("click", () => {
    ratingElement.forEach((r) => r.classList.remove("active"));
    rate.classList.add("active");

    const selectedRating = rate.textContent;

    yourSelection.textContent = `You selected ${selectedRating} out of 5`;
  });
});

submitBtn.addEventListener("click", () => {
  ratingPage.style.display = "none";
  thanksPage.style.display = "flex";
});
