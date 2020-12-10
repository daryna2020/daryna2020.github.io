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
            minLength: "Введите минимум два символа "
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