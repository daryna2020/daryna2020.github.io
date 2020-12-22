let arr = {
    "eng": ["english", "text"],
    "rus": ["русский", "текст"]
}

let rusBtn = document.querySelector(".btn__rus");

  rusBtn.addEventListener("click" , function() {
      for (let i = 0; i < arr["rus"].length; i++) {
          console.log(arr["rus"][i]);
      }
  });

let engBtn = document.querySelector(".btn__eng");

  engBtn.addEventListener("click" , function() {
    for (let i = 0; i < arr["eng"].length; i++) {
        console.log(arr["eng"][i]);
    }
  });