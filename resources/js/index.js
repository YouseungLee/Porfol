const line = document.querySelector('.line');
const title = document.querySelector('.title');
const titleContent = document.querySelector('.title-container');
const contentContainer = document.querySelector('.content-container');
let shown = true;

blinkLine = () => {
    if (shown == true) {
        line.style.display = "none";
        shown = false;
    } else {
        line.style.display = "block";
        shown = true;
    }
}
setInterval(blinkLine, 500);

title.addEventListener("click", () => {
    titleContent.classList.add("hidden");
    contentContainer.classList.remove("hidden");
})