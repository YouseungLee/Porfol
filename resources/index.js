const box = document.querySelector(".icon.box");
const clock = document.querySelector(".clock")
function getTime() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minute = String(date.getMinutes()).padStart(2, "0"); 
        
    if (hours >= 12) {
        clock.innerText = "PM " + `${hours - 12}` + ":" + `${minute}`;
    } else if (hours === 0) {
        clock.innerText = "AM " + `${hours + 12}` + ":" + `${minute}`;
    } else {
        clock.innerText = "AM " + `${hours}` + ":" + `${minute}`;
    }
}

setInterval(getTime, 1000);

function init() {
  getTime();
}

init();