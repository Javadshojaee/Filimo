async function swiper() {
  let sliders = "";
  let data = await fetch(
    "https://javadshojaee.github.io/FilimoProject/db.json",
  );
  let res = await data.json();
  sliders = res.sliders?.map((slide) => {
    return `<div class="swiper-slide">
           <img src=${slide.src} alt="image">
          </div>`;
  });
  document
    .querySelector(".swiper>#wrpper")
    .insertAdjacentHTML("afterend", sliders.join(" "));
  var swiper = new Swiper(".mySwiper", {
    effect: "fade",
    observer: true,
    observeParents: true,
    observeSlideChildren: true,
    updateOnImagesReady: true,
    fadeEffect: { crossFade: true },
    speed: 700,
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    loop: false,
    resistance: true,
    resistanceRatio: 0,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
}

async function post() {
  let poster = "";
  let data = await fetch(
    "https://javadshojaee.github.io/FilimoProject/db.json",
  );
  let res = await data.json();
  poster = res.sliders?.map((slide) => {
    return ` <div class="swiper-slide">
           <img src=${slide.src} alt="swiper">
           <div class="left">
            <img src=${slide.srcImage} alt="swiper">
            <h2>${slide.title}</h2>
            <button class="More">
             < ${slide.desctiption}
          </button>
           </div>
          </div>
          `;
  });
  document
    .querySelector(".swiper>#wrpper")
    .insertAdjacentHTML("beforeend", poster.join(" "));
}

export { swiper, post };
