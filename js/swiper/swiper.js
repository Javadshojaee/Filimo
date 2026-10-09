const DB_URL =
  "https://javadshojaee.github.io/FilimoProject/db.json";

let mainSwiper = null;

async function swiper() {
  await post();
}

async function post() {
  const wrapper = document.querySelector(".mySwiper #wrpper");

  if (!wrapper) {
    console.error("اسلایدر یا #wrpper پیدا نشد!");
    return;
  }

  try {
    const response = await fetch(DB_URL);

    if (!response.ok) {
      throw new Error("خطا در دریافت db.json: " + response.status);
    }

    const res = await response.json();
    const slides = res.sliders || [];

    if (slides.length === 0) {
      console.error("هیچ اسلایدی در res.sliders وجود ندارد.");
      return;
    }

    wrapper.innerHTML = slides.map((slide) => `
      <div class="swiper-slide">
        <img
          src="${slide.src}"
          alt="${slide.title || "فیلم"}"
        >

        <div class="left">
          ${slide.srcImage ? `
            <img
              src="${slide.srcImage}"
              alt=""
            >
          ` : ""}

          <h2>${slide.title || ""}</h2>

          <button class="More" type="button">
            ${slide.desctiption || "اطلاعات بیشتر"}
          </button>
        </div>
      </div>
    `).join("");

   
    if (mainSwiper) {
      mainSwiper.destroy(true, true);
      mainSwiper = null;
    }

    mainSwiper = new Swiper(".mySwiper", {
      effect: "fade",

      fadeEffect: {
        crossFade: true
      },

      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 0,
      speed: 700,
      initialSlide: 0,
      loop: slides.length > 1,

      autoplay: slides.length > 1 ? {
        delay: 3500,
        disableOnInteraction: false,
        pauseOnMouseEnter: true
      } : false,

      observer: true,
      observeParents: true,

      navigation: {
        nextEl: ".mySwiper .swiper-button-next",
        prevEl: ".mySwiper .swiper-button-prev"
      }
    });

    console.log("تعداد اسلایدها:", slides.length);

  } catch (error) {
    console.error("خطای اسلایدر:", error);
  }
}

export { swiper, post };
