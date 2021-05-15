import "./styles.scss";

let threshold = [];
for (let tValue = 0.0; tValue <= 1.0; tValue = tValue + 0.01) {
  threshold.push(tValue);
}
let options = {
  root: null,
  rootMargin: "0px",
  threshold: threshold
};

let callback = (entries, observer) => {
  entries.forEach((entry) => {
    // document.querySelector(".pencil-text").style.transform = `scale(${
    //   12 * entry.intersectionRatio
    // })`;
    // document.querySelector(".pencil-text").style.bottom = `${100}pt`;
  });
};

let observer = new IntersectionObserver(callback, options);

let target = document.querySelector(".cover-img");
observer.observe(target);
