document.addEventListener("DOMContentLoaded", function() {
    //tabs
    let tabsContent = document.querySelectorAll(".tab-content"); //div
    let tabsControl =document.querySelectorAll(".tab__item");  //li
    let code_color = document.querySelector(".code_color");
    let colorBox = document.querySelector(".color_box");

    tabsControl.forEach( elem => {
        elem.addEventListener("click", function() {
            showTabContent(elem.dataset.tabnumber);
            this.classList.add("tab__item--active");
            tabsControl.forEach( elem => {
                elem.classList.remove("tab__item--active");
            });
            this.classList.add("tab__item--active");
        });
    });

    function hideTabContent () {
        for (let i = 1; i < tabsContent.length; i++) {
            tabsContent[i].classList.add("tab--hidden");
        }
    };

    hideTabContent();

    function showTabContent (tabnumber) {
        for (let i = 0; i < tabsContent.length; i++) {
            tabsContent[i].classList.add("tab--hidden");
        }
        


        tabsContent[tabnumber - 1].classList.remove("tab--hidden");
    };

//генератор цвета


    function generateColor() {
        return '#' + Math.floor(Math.random() * 16777215).toString(16)
    }
    
    
    document.addEventListener("keyup", function(evt) {
        if (evt.code == "Space") {
            colorBox.style.color = generateColor();
            code_color.textContent = generateColor();
        };
    });

    document

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


    //форма
 

    let phoneFields = document.querySelectorAll(".phoneInput");
    let im = new Inputmask("+38 (099) 99-99-99");
    im.mask(phoneFields);



    new JustValidate('.js-form', {
    rules: {
        name: {
            required: true,
            minLength: 2
        },
        email: {
            required: true,
            email: true
        },
        phone: {
            required: true
        }
    },
    messages: {
        name: {
            minLength: "Введите минимум два символа ",
        },
        email: {
            email: "Это не email, по пробуйте ещё раз"
        },
        phone: {
            required: "Не верно набраный номер"
        }
    },

    submitHandler: function(form) {
        let xhr = new XMLHttpRequest();
        xhr.open("POST", "mail.php", true);

        form = new FormData(form);
        xhr.addEventListener("load", function() {
            if (xhr.readyState === 4) {
                switch (xhr.status) {
                    case 200:
                        console.log("Форма отправлена!");
                        form.reset();
                        break;
                    case 404:
                        console.log("Ничего не вышло");
                        break;
                    default:
                        console.log("Error");
                        break;
                }
            }
        });
        xhr.send(formData);
    },
 });
});
