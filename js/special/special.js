async function sepcial() {
  let sepcialdata = "";
  let data = await fetch("https://javadshojaee.github.io/FilimoProject/db.json");
  let res = await data.json();

  sepcialdata = res.Text?.map((sep) => {
    return `
    <p class="scl">${sep.text}</p>
    <p class="seeMore">
      <a href="#">${sep.desctiptionText}</a>
    </p>
    `;
  });

  document
    .querySelector("#top")
    .insertAdjacentHTML("beforeend", sepcialdata.join(" "));
}


async function card() {
  let cards = "";
  let data = await fetch("https://javadshojaee.github.io/FilimoProject/db.json");
  let res = await data.json();

  cards = res.special?.map((car) => {
    return ` <div class="card" id="cart">
            <p>${car.title}</p>
            <img src=${car.src} alt="image" />
            <div class="dep">
              <h4>${car.text}</h4>
              <span>${car.time}</span>
              <button class="play"><|</button>
            </div>
          </div> `;
  });
  document
    .querySelector("#box")
    .insertAdjacentHTML("beforeend", cards.join(" "));
  let carts = document.querySelectorAll(".card");
  setInterval(() => {
    carts.forEach((cart) => {
      cart.classList.toggle("dd");
    });
  },2000);
}

export { sepcial, card };
