document.addEventListener("DOMContentLoaded", function() {
    //borders
    let inputLt = document.querySelector(".inputLt");
    let inputRt = document.querySelector(".inputRt");
    let inputLb = document.querySelector(".inputLb");
    let inputRb = document.querySelector(".inputRb");
    let box = document.querySelector(".box");
    let Lt = document.querySelector(".Lt");
    let Rt = document.querySelector(".Rt");
    let Lb = document.querySelector(".Lb");
    let Rb = document.querySelector(".Rb");
    let bgColor = document.querySelector(".bg-color");

    inputLt.addEventListener("input", function() {
        box.style.borderTopLeftRadius = this.value + "px";
        Lt.textContent = "border-radius:" + this.value + "px;";
    });

    inputRt.addEventListener("input", function() {
        box.style.borderTopRightRadius = this.value + "px";
        Rt.textContent = "border-radius:" + this.value + "px;";
    });

    inputLb.addEventListener("input", function() {
        box.style.borderBottomLeftRadius = this.value + "px";
        Lb.textContent = "border-radius:" + this.value + "px;";
    });

    inputRb.addEventListener("input", function() {
        box.style.borderBottomRightRadius = this.value + "px";
        Rb.textContent = "border-radius:" + this.value + "px;";
    });

    let colorInput = document.querySelector("#color");
    let hexInput = document.querySelector("#hex");

    colorInput.addEventListener("input", () => {
        let color = colorInput.value;
        hexInput.value = color;

        box.style.backgroundColor = color;
        bgColor.textContent = "bg-color:" + hexInput.value
    });
    let TextToCopy = document.querySelector(".li");
    let copyBtn = document.querySelector(".copy__btn");
});