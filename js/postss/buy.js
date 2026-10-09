async function buy() {
    let posts = ''
  let data = await fetch("https://javadshojaee.github.io/FilimoProject/db.json");
  let res = await data.json();
   posts = res.post?.map((pos) => {
    return `<div class="rightPost">
          <img src=${pos.srcImagess} alt="image" />
          <div class="postText">
            <h1>${pos.Texts}</h1>
            <span>${pos.sapn}</span>
          </div>
          <button class="BuyEshtrak">${pos.TextBtn}</button>
        </div>
        <div class="leftPost">
          <img src=${pos.ImgaeLeft} alt="post" />
        </div>`;
  });
  document.querySelector("#post").insertAdjacentHTML("beforeend",posts.join(" "))
}
export default buy
