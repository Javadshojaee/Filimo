async function TvSwiper() {
  let serios = "";
  let data = await fetch("https://javadshojaee.github.io/FilimoProject/db.json");
  let res = await data.json();
  serios = res.TvSwiper?.map((Tvswip) => {
    return `<div class="swiper-sliess" data-title="${Tvswip.dataTitle}">
            <img src=${Tvswip.srcImages} />
          </div>`;
  });
  document
    .querySelector("#TVsWIPER")
    .insertAdjacentHTML("beforeend", serios.join(" "));
}

async function onlineFilms() {
  let onfi = "";
  let data = await fetch("https://javadshojaee.github.io/FilimoProject/db.json");
  let res = await data.json();
  onfi = res.OnlineFims?.map((onli) => {
    return `<div class="swiper-sliess" data-title="${onli.dataTitle}">
            <img src=${onli.srcImages} />
          </div>`;
  });
  document
    .querySelector("#OnlineF")
    .insertAdjacentHTML("beforeend", onfi.join(" "));
}

export { TvSwiper, onlineFilms };
