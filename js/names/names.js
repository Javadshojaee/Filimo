async function names() {
  let names = "";
  let data = await fetch("https://javadshojaee.github.io/FilimoProject/db.json");
  let res = await data.json();
  names = res.names?.map((nam) => {
    return `
    <span>${nam.Matn}</span>
        <span class="Mores">${nam.text}</span>`;
  });
  document
    .querySelector("#names")
    .insertAdjacentHTML("beforeend", names.join(" "));
}

async function New() {
  let New = "";
  let data = await fetch("https://javadshojaee.github.io/FilimoProject/db.json");
  let res = await data.json();
  New = res.New?.map((ne) => {
    return `
    <span>${ne.Matn}</span>
        <span class="Mores">${ne.text}</span>`;
  });
  document.querySelector("#New").insertAdjacentHTML("beforeend", New.join(" "));
}

async function Hot() {
  let Hot = "";
  let data = await fetch("https://javadshojaee.github.io/FilimoProject/db.json");
  let res = await data.json();
  Hot = res.Hot?.map((ne) => {
    return `
    <span>${ne.Matn}</span>
        <span class="Mores">${ne.text}</span>`;
  });
  document.querySelector("#Hot").insertAdjacentHTML("beforeend", Hot.join(" "));
}

async function tVSer() {
  let tVSer = "";
  let data = await fetch("https://javadshojaee.github.io/FilimoProject/db.json");
  let res = await data.json();
  tVSer = res.Tvserios?.map((tv) => {
    return `
    <span>${tv.Matn}</span>
        <span class="Mores">${tv.text}</span>`;
  });
  document
    .querySelector("#TVseries")
    .insertAdjacentHTML("beforeend", tVSer.join(" "));
}

async function online() {
  let onlineFilm = "";
  let data = await fetch("https://javadshojaee.github.io/FilimoProject/db.json");
  let res = await data.json();
  onlineFilm = res.onlineFilmText?.map((on) => {
    return `
    <span>${on.Matn}</span>
        <span class="Mores">${on.text}</span>`;
  });
  document
    .querySelector("#online")
    .insertAdjacentHTML("beforeend", onlineFilm.join(" "));
}


async function comedy() {
  let ComedyFilm = "";
  let data = await fetch("https://javadshojaee.github.io/FilimoProject/db.json");
  let res = await data.json();
  ComedyFilm = res.ComedyText?.map((com) => {
    return `
    <span>${com.Matn}</span>
        <span class="Mores">${com.text}</span>`;
  });
  document
    .querySelector("#Comedy")
    .insertAdjacentHTML("beforeend", ComedyFilm.join(" "));
}

export { names, New, Hot, tVSer , online , comedy};
