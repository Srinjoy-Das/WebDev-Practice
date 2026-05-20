const myBox = document.getElementById("myBox");
const movement = 10;
let x = 0;
let y = 0;

document.addEventListener("keydown", event => {
    myBox.textContent = "😲";
    myBox.style.backgroundColor = "tomato";
})
document.addEventListener("keyup", event => {
    myBox.textContent = "😎";
    myBox.style.backgroundColor = "lightblue";
})

document.addEventListener("keydown", event => {

    event.preventDefault();

    if(event.key.startsWith("Arrow")){
        switch (event.key) {
            case "ArrowUp":
                y -= movement;
                break;
            case "ArrowDown":
                y += movement;
                break;
            case "ArrowLeft":
                x -= movement;
                break;
            case "ArrowRight":
                x += movement;
                break;
        }

        myBox.style.top = `${y}px`;
        myBox.style.left = `${x}px`;

    }
});