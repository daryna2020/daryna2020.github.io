$(document).ready(function () {
	let arr = {
		eng: ["english", "text"],
		rus: ["русский", "текст"],
	};

	let rusBtn = $(".btn__rus");

	rusBtn.on("click", function () {
		for (let i = 0; i < arr["rus"].length; i++) {
			console.log(arr["rus"][i]);
		}
	});

	let engBtn = $(".btn__eng");

	engBtn.on("click", function () {
		for (let i = 0; i < arr["eng"].length; i++) {
			console.log(arr["eng"][i]);
		}
	});

	//tabs
	let tabsContent = $(".tab-content"); //div
	let tabsControl = $(".tab__item"); //li
	let code_color = $(".code_color");
    let colorBox = $(".color_box");

	tabsControl.each(function (index, elem) {
		$(elem).on("click", function () {
            tabsControl.each(function (index, elem) {
                $(elem).removeClass("tab__item--active");
			});
			$(elem).addClass("tab__item--active");
            showTabContent($(elem).data("tabnumber"));
		});
	});

	function hideTabContent() {
		for (let i = 1; i < tabsContent.length; i++) {
			tabsContent[i].classList.add("tab--hidden");
		}
	}
	hideTabContent();

	function showTabContent(tabnumber) {
        tabsContent.each(function (index, elem) {
            $(elem).addClass("tab--hidden");
        });
        $(tabsContent[tabnumber - 1]).removeClass("tab--hidden");
	}

	//генератор цвета

	function generateColor() {
		return "#" + Math.floor(Math.random() * 16777215).toString(16);
	}

	$(document).on("keyup", function (evt) {
		if (evt.code == "Space") {
			$(colorBox).css( "color", generateColor());
			$(code_color).text(  generateColor());
		}
	});


	//borders
	let inputLt = $(".inputLt");
	let inputRt = $(".inputRt");
	let inputLb = $(".inputLb");
	let inputRb = $(".inputRb");
	let box = $(".box");
	let Lt = $(".Lt");
	let Rt = $(".Rt");
	let Lb = $(".Lb");
	let Rb = $(".Rb");
	let bgColor = $(".bg-color");

	inputLt.on("input", function () {
		$(box).css( "borderTopLeftRadius",(this).value + "px" );
		$(Lt).text( "border-radius:" + $(this).val() + "px;");
	});

	inputRt.on("input", function () {
		$(box).css( "borderTopRightRadius",(this).value + "px" );
		$(Rt).text( "border-radius:" + $(this).val() + "px;");
	});

	inputLb.on("input", function () {
		$(box).css( "borderBottomLeftRadius",(this).value + "px" );
		$(Lb).text( "border-radius:" + $(this).val() + "px;");
	});

	inputRb.on("input", function () {
		$(box).css( "borderBottomRightRadius",(this).value + "px" );
		$(Rb).text( "border-radius:" + $(this).val() + "px;");
	});

	let colorInput = $("#color");
	let hexInput = $("#hex");

	colorInput.on("input", () => {
		let color = colorInput.val();
		hexInput.value = color;
		
		$(box).css("backgroundColor", color);
		$(bgColor).text("bg-color:" + hexInput.value);
	});
});
