async function AtA() {
  let ata = "";
  let data = await fetch("https://javadshojaee.github.io/FilimoProject/db.json");
  let res = await data.json();
  ata = res.AtA?.map((at) => {
    return `<div class="RightAtA">
          <img src=${at.ImageSrec} alt="filmoImages" />
        </div>
        <div class="betwin">
          <h1>${at.H1s}</h1>
          <p>${at.ps}</p>
          <ul>
            <li>${at.OneLi}</li>
            <li>${at.TwoLi}</li>
            <li>${at.threeLi}</li>
          </ul>
        </div>
        <div class="LeftAtA">
          <butotn class="buyAndwatch">${at.btnWatch}</butotn>
        </div>`;
  });
  document.querySelector("#AtA").insertAdjacentHTML("beforeend",ata.join(" "))
}

export default AtA