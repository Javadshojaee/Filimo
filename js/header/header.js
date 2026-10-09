async function header() {
  let MenuItems = "";
  let data = await fetch("https://javadshojaee.github.io/FilimoProject/db.json");
  let res = await data.json();

  MenuItems = res.menu?.map((item) => {
    return `<li class='image'>
              <a href=${item.href} >
              ${item.src ? `<img src= ${item.src} alt='icon'>` : item.title}
              </a>
            </li>`;
  });
  document
    .querySelector("#header>nav>ul")
    .insertAdjacentHTML("beforeend", MenuItems.join(" "));
}

async function loginBtn() {
  let loginItem = "";
  let data = await fetch("https://javadshojaee.github.io/FilimoProject/db.json");
  let res = await data.json();

  loginItem = res.login?.map((item) => {
    return `    
    <button class="loginbtn" id="loginbtn">
    <a href=${item.href}>${item.title}</a>
    </button>
              `;
              
  });
  document
    .querySelector("#login")
    .insertAdjacentHTML("beforeend", loginItem.join(" "));
}

async function BuyBtn() {
  let BuyBtn = "";
  let data = await fetch("https://javadshojaee.github.io/FilimoProject/db.json");
  let res = await data.json();

  BuyBtn = res.Buy?.map((item) => {
    return `    
    <button class="buyBtn" id="buyBtn">${item.title}</button>
              `;
              
  });
  document
    .querySelector("#login")
    .insertAdjacentHTML("beforeend", BuyBtn.join(" "));
}

export  { header, BuyBtn, loginBtn };
