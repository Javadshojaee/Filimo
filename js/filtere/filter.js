function toggleMenu() {
  let selectbox = document.querySelector("#selectBox");
  let myOptions = document.querySelector("#myOptions");

  selectbox.addEventListener("click", function (e) {
    e.stopPropagation();
    myOptions.classList.toggle("show");
    selectbox.classList.toggle("active");

    window.addEventListener("click", function () {
      optionsMenu.classList.remove("show");
      selectBox.classList.remove("active");
    });
  });
}
function gete() {
  let myOptionss = document.querySelector("#myOptionss");
  let selectBoxx = document.querySelector("#selectBoxx");
  selectBoxx.addEventListener("click", function (e) {
    e.stopPropagation();
    myOptionss.classList.toggle("show");
    selectBoxx.classList.toggle("active");

    window.addEventListener("click", function () {
      optionsMenu.classList.remove("show");
      selectBoxx.classList.remove("active");
    });
  });
}

function rsnge() {
  let myOptionsss = document.querySelector("#myOptionsss");
  let selectBoxxs = document.querySelector("#selectBoxxs");
  selectBoxxs.addEventListener("click", function (e) {
    e.stopPropagation();
    myOptionsss.classList.toggle("show");
    selectBoxxs.classList.toggle("active");

    window.addEventListener("click", function () {
      optionsMenu.classList.remove("show");
      selectBoxxs.classList.remove("active");
    });
  });
}

export { toggleMenu, gete, rsnge };
