const line = document.querySelector('.line');
const titleContent = document.querySelector('.title-container');
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

