console.clear();
let a;
a = fetch("https://dummy-apis.netlify.app/api/color");

let state;
const body = document.querySelector("#body");
console.log(body.style.backgroundColor);

const randomColorBtn = document.querySelector("#btn");
let r = document.querySelector("#r");
let g = document.querySelector("#g");
let b = document.querySelector("#b");

randomColorBtn.addEventListener("click", clickButton);

function clickButton() {
  a = fetch("https://dummy-apis.netlify.app/api/color");

  a.then((response) => {
    return response.json();
  }).then((data) => {
    state = data;

    r.value = state.rgb.r;
    g.value = state.rgb.g;
    b.value = state.rgb.b;

    const back = document.querySelector("#body");
    body.style.backgroundColor =
      "rgb(" + r.value + "," + g.value + "," + b.value + ")";
  });
}
