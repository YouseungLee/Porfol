const box = document.querySelector(".icon.box");
const clock = document.querySelector(".clock")
function getTime() {
    const date = new Date();
    const minutes = date.getMinutes();
    const hours = date.getHours();
    
    if (hours >= 12) {
        clock.innerText = "PM " + `${hours - 12}` + ":" + `${minutes}`;
    } else if (hours === 0) {
        clock.innerText = "AM " + `${hours + 12}` + ":" + `${minutes}`;
    } else {
        clock.innerText = "AM " + `${hours}` + ":" + `${minutes}`;
    }
}

setInterval(getTime, 1000);

function init() {
  getTime();
}

init();