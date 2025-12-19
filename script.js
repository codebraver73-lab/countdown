let number = 10;
let number1 = number;
let interval;

document.getElementById("startbtn").addEventListener("click", start);
document.getElementById("stopbtn").addEventListener("click", stop);
document.getElementById("resetbtn").addEventListener("click", reset);

function start() {
    if (interval) return; 

    interval = setInterval(() => {
        number1--;
        document.getElementById("p1").innerHTML = number1;

        if (number1 === 0) {
            clearInterval(interval);
            interval = null;
        }
    }, 1000);
}

function stop() {
    clearInterval(interval);
    interval = null;
}

function reset() {
    clearInterval(interval);
    interval = null;
    number1 = number;
    document.getElementById("p1").innerHTML = number1;
}
