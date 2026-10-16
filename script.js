const inputs = document.querySelectorAll(".otp-input");
const container = document.querySelector(".otp-container");
const resendBtn = document.querySelector("#resendBtn");
const continueBtn = document.querySelector("#continueBtn");
const feedback = document.querySelector("#feedbackUI");

inputs.forEach((input, i) => {
  input.addEventListener("input", (e) => {
    if (!/^\d/.test(e.target.value)) {
      // not a digit
      e.target.value = "";
      return;
    }

    // focus on the next input when user types a number (ignores the last input)
    if (e.target.value && i < inputs.length - 1) inputs[i + 1].focus();

    if ([...inputs].every((inp) => inp.value)) {
      setTimeout(() => {
        container.style.display = "none";
        resendBtn.classList.add("hidden");
        feedback.classList.remove("hidden");
      }, 400);
    }
  });

  input.addEventListener("keydown", (e) => {
    if (e.key === "Backspace" && i > 0) {
      inputs[i - 1].focus();
    }
  });
});

continueBtn.addEventListener("click", () => {
  // reset the UI
  feedback.classList.add("hidden");
  container.style.display = "flex";
  resendBtn.classList.remove("hidden");
  inputs.forEach((inp) => (inp.value = ""));
  inputs[0].focus();
});

inputs[0].focus();
