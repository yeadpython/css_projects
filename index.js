const hourEl = document.getElementById("hour")
const mintueEl = document.getElementById("minutes")
const secEl = document.getElementById("seconds")
const ampmEl = document.getElementById("ampm")

function updateClock() {
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let ampm = "AM";

    if (h > 12) {
        h = h - 12;
        ampm = "PM";
    }

    hourEl.innerText = h;
    mintueEl.innerText = m;
    secEl.innerText = s;
}


updateClock()
