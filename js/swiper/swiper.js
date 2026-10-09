const DB_URL = "https://javadshojaee.github.io/FilimoProject/db.json";

async function getSlides() {
  const response = await fetch(DB_URL);

  if (!response.ok) {
    throw new Error(`خطا در دریافت اطلاعات: ${response.status}`);
  }

  const res = await response.json();
  return res.sliders ?? [];
}

async function swiper() {
  const wrapper = document.querySelector(".mySwiper #wrpper");

  if (!wrapper) {
    console.error("Wrapper اسلایدر پیدا نشد.");
    return;
  }

  try {
    const slides = await getSlides();

    wrapper.innerHTML = slides
      .map(
        (slide) => `
      <div class="swiper-slide">
        <img src="${slide.src}" alt="image">
      </div>
    `,
      )
      .join("");

    if (window.swiper) {
      window.swiper.update();
    }
  } catch (error) {
    console.error("خطا در بارگذاری اسلایدر:", error);
  }
}

async function post() {
  const wrapper = document.querySelector(".mySwiper #wrpper");

  if (!wrapper) return;

  try {
    const slides = await getSlides();

    wrapper.innerHTML = slides
      .map(
        (slide) => `
      <div class="swiper-slide">
        <img src="${slide.src}" alt="swiper">

        <div class="left">
          <img src="${slide.srcImage}" alt="">
          <h2>${slide.title ?? ""}</h2>
          <button class="More" type="button">
            ${slide.description ?? ""}
          </button>
        </div>
      </div>
    `,
      )
      .join("");

    if (window.swiper) {
      window.swiper.update();
    }
  } catch (error) {
    console.error("خطا در بارگذاری پوسترها:", error);
  }
}

export { swiper, post };
