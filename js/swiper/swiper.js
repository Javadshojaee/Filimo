async function swiper() {
  let sliders = "";

  let data = await fetch(
    "https://javadshojaee.github.io/FilimoProject/db.json"
  );

  let res = await data.json();

  sliders = res.sliders?.map((slide) => {
    return `<div class="swiper-slide">
      <img src="${slide.src}" alt="image">
    </div>`;
  });

  document
    .querySelector(".swiper>#wrpper")
    .insertAdjacentHTML("beforeend", sliders.join(" "));
}

async function post() {
  let poster = "";

  let data = await fetch(
    "https://javadshojaee.github.io/FilimoProject/db.json"
  );

  let res = await data.json();

  poster = res.sliders?.map((slide) => {
    return `<div class="swiper-slide">
      <img src="${slide.src}" alt="swiper">

      <div class="left">
        <img src="${slide.srcImage}" alt="swiper">
        <h2>${slide.title}</h2>

        <button class="More" type="button">
          ${slide.desctiption ?? "اطلاعات بیشتر"}
        </button>
      </div>
    </div>`;
  });

  document
    .querySelector(".swiper>#wrpper")
    .innerHTML = poster.join(" ");
}

export { swiper, post };
