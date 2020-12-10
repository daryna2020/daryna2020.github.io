document.addEventListener("DOMContentLoaded", function() {
    //colors

    let code_color = document.querySelector(".code_color");

    function generateColor() {
        return '#' + Math.floor(Math.random() * 16777215).toString(16)
    }

    document.addEventListener("keyup", function(evt) {
        if (evt.code == "Space") {
            document.body.style.backgroundColor = generateColor();
            code_color.textContent = generateColor();
        };
    });
});