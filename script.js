const box = document.getElementById("fact-box");
const btn = document.getElementById("button");

btn.addEventListener("click", function () {
    let randomNumber = Math.floor(Math.random() * 5) + 1;
    switch (randomNumber) {
        case 1:
            box.textContent = "Miku LOOVEEE leek!!!";
            break;
        case 2:
            box.textContent = "Miku is MEXICAN!!";
            break;
        case 3:
            box.textContent = "I love femboys";
            break;
        case 4:
            box.textContent = "Bush did 9/11";
            break;
        case 5:
            box.textContent = "Eat more leek!";
            break;
        default:
            box.textContent = "smth wrong twin";
            break;
    }
});