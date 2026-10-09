function login() {
  let btn = document.querySelector("#Btn");
  let BoxInput = document.querySelector("#phoneNumber");

  btn.addEventListener("click", function () {
    if (BoxInput.value === "") {
      BoxInput.classList.toggle("active");
    }
  });
}

export default login;
