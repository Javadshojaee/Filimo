async function FilmSwiper() {
  let sliderz = "";
  let data = await fetch("https://javadshojaee.github.io/FilimoProject/db.json");
  let res = await data.json();
  sliderz = res.FilmSwiper?.map((slide) => {
    return `<div class="swiper-sli" data-title="${slide.dataTitle}">
            <img src=${slide.srcImages} />
            <span>${slide.spanText}</span>
          </div>`;
  });
  document
    .querySelector("#swiperContain")
    .insertAdjacentHTML("beforeend", sliderz.join(" "));
}


async function NewSwiper() {
  let newSlide = "";
  let data = await fetch("https://javadshojaee.github.io/FilimoProject/db.json");
  let res = await data.json();
  newSlide = res.NewSwiper?.map((slid) => {
    return `<div class="swiper-sli" data-title="${slid.dataTitle}">
            <img src=${slid.srcImages} />
            <span>${slid.spanText}</span>
          </div>`;
  });
  document
    .querySelector("#swipContain")
    .insertAdjacentHTML("beforeend", newSlide.join(" "));
}


async function HotSwiper() {
  let hotswip = "";
  let data = await fetch("https://javadshojaee.github.io/FilimoProject/db.json");
  let res = await data.json();
  hotswip = res.HOTFilm?.map((slid) => {
    return `<div class="swiper-sli" data-title="${slid.dataTitle}">
            <img src=${slid.srcImages} />
            <span>${slid.spanText}</span>
          </div>`;
  });
  document
    .querySelector("#HotSiper")
    .insertAdjacentHTML("beforeend", hotswip.join(" "));
}

export {FilmSwiper,NewSwiper,HotSwiper};
