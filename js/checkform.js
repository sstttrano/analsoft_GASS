function formCheck () {
	let text = document.querySelector(".error__text");
	let name = document.getElementById("name");
	let id = document.getElementById("id");
	let password = document.getElementById("password");
	if (name.value == "") {
		text.innerHTML = "Введите имя";
		document.querySelector(".error").classList.remove("hidden");
	}else if (id.value == "") {
		text.innerHTML = "Введите id";
		document.querySelector(".error").classList.remove("hidden");
	}else if (password.value == "") {
		text.innerHTML = "Неверный пароль";
		document.querySelector(".error").classList.remove("hidden");
	};
}