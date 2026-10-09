async function ComedyFims() {
  let comedyS = "";
  let data = await fetch("https://javadshojaee.github.io/FilimoProject/db.json");
  let res = await data.json();
  comedyS = res.ComedyFImss?.map((co) => {
    return `<div class="swiper-sli" data-title="${co.dataTitle}">
            <img src=${co.srcImages} />
            <span>${co.spanText}</span>
          </div>`;
  });
  document
    .querySelector("#ComedySwiper")
    .insertAdjacentHTML("beforeend", comedyS.join(" "));
}

export default ComedyFims