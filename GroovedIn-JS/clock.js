function updateClock() {
    const clockElement = document.getElementById("clock");
    const currentTime = moment().format("HH:mm:ss");
    clockElement.textContent = currentTime;
}
// Update the clock every second
setInterval(updateClock, 1000);
// Initial update to avoid initial delay
updateClock();