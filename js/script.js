function error_close () {
	document.querySelector(".error").classList.add("hidden")
}
function menu__openClose () {
	document.querySelector(".setting").classList.toggle("_active")
}
function useless_option_show() {
	document.querySelector(".cabinet__useless-option").classList.toggle("_active")
	document.querySelector(".cabinet__hard-option").classList.remove("_active")
	document.querySelector(".cabinet__useful-option").classList.remove("_active")
	document.querySelector(".preload").classList.remove("_active")
}
function useful_option_show() {
	document.querySelector(".cabinet__useless-option").classList.remove("_active")
	document.querySelector(".cabinet__useful-option").classList.toggle("_active")
	document.querySelector(".cabinet__hard-option").classList.remove("_active")
	document.querySelector(".preload").classList.remove("_active")
}
function hard_option_show() {
	document.querySelector(".cabinet__useless-option").classList.remove("_active")
	document.querySelector(".cabinet__useful-option").classList.remove("_active")
	document.querySelector(".cabinet__hard-option").classList.toggle("_active")
	document.querySelector(".preload").classList.remove("_active")
}
function deactive() {
	document.querySelector(".detecter_1").classList.remove("_active")
	document.querySelector(".detecter_2").classList.remove("_active")
	document.querySelector(".detecter_3").classList.remove("_active")
	document.querySelector(".detecter_4").classList.remove("_active")
	document.querySelector(".detecter_5").classList.remove("_active")
	document.querySelector(".detecter_6").classList.remove("_active")
	document.querySelector(".detecter_7").classList.remove("_active")
	document.querySelector(".detecter_8").classList.remove("_active")
	document.querySelector(".detecter_9").classList.remove("_active")
	document.getElementById("card_1").innerHTML = "Активировать"
	document.getElementById("card_2").innerHTML = "Активировать"
	document.getElementById("card_3").innerHTML = "Активировать"
	document.getElementById("card_4").innerHTML = "Активировать"
	document.getElementById("card_5").innerHTML = "Активировать"
	document.getElementById("card_6").innerHTML = "Активировать"
	document.getElementById("card_7").innerHTML = "Активировать"
	document.getElementById("card_8").innerHTML = "Активировать"
	document.getElementById("card_9").innerHTML = "Активировать"
}
function active_1 () {
	document.querySelector(".detecter_1").classList.toggle("_active")
	if (document.querySelector(".detecter_1").classList.contains("_active")) {
		document.getElementById("card_1").innerHTML = "Деактивировать"
	}else{
		document.getElementById("card_1").innerHTML = "Активировать"
	}
}
function active_2 () {
	document.querySelector(".detecter_2").classList.toggle("_active")
	if (document.querySelector(".detecter_2").classList.contains("_active")) {
		document.getElementById("card_2").innerHTML = "Деактивировать"
	}else{
		document.getElementById("card_2").innerHTML = "Активировать"
	}
}
function active_3 () {
	document.querySelector(".detecter_3").classList.toggle("_active")
	if (document.querySelector(".detecter_3").classList.contains("_active")) {
		document.getElementById("card_3").innerHTML = "Деактивировать"
	}else{
		document.getElementById("card_3").innerHTML = "Активировать"
	}
}
function active_4 () {
	document.querySelector(".detecter_4").classList.toggle("_active")
	if (document.querySelector(".detecter_4").classList.contains("_active")) {
		document.getElementById("card_4").innerHTML = "Деактивировать"
	}else{
		document.getElementById("card_4").innerHTML = "Активировать"
	}
}
function active_5 () {
	document.querySelector(".detecter_5").classList.toggle("_active")
	if (document.querySelector(".detecter_5").classList.contains("_active")) {
		document.getElementById("card_5").innerHTML = "Деактивировать"
	}else{
		document.getElementById("card_5").innerHTML = "Активировать"
	}
}
function active_6 () {
	document.querySelector(".detecter_6").classList.toggle("_active")
	if (document.querySelector(".detecter_6").classList.contains("_active")) {
		document.getElementById("card_6").innerHTML = "Деактивировать"
	}else{
		document.getElementById("card_6").innerHTML = "Активировать"
	}
}
function active_7 () {
	document.querySelector(".detecter_7").classList.toggle("_active")
	if (document.querySelector(".detecter_7").classList.contains("_active")) {
		document.getElementById("card_7").innerHTML = "Деактивировать"
	}else{
		document.getElementById("card_7").innerHTML = "Активировать"
	}
}
function active_8 () {
	document.querySelector(".detecter_8").classList.toggle("_active")
	if (document.querySelector(".detecter_8").classList.contains("_active")) {
		document.getElementById("card_8").innerHTML = "Деактивировать"
	}else{
		document.getElementById("card_8").innerHTML = "Активировать"
	}
}
function active_9 () {
	document.querySelector(".detecter_9").classList.toggle("_active")
	if (document.querySelector(".detecter_9").classList.contains("_active")) {
		document.getElementById("card_9").innerHTML = "Деактивировать"
	}else{
		document.getElementById("card_9").innerHTML = "Активировать"
	}
}