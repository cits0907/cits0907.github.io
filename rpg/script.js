function createPassword(length, useNumbers, useLowers, useUppers, useSymbols) {
	var letters = "";
	letters += useNumbers ? "0123456789" : "";
	letters += useLowers ? "abcdefghijklmnopqrstuvwxyz" : "";
	letters += useUppers ? "ABCDEFGHIJKLMNOPQRSTUVWXYZ" : "";
	letters += useSymbols ? "!\"#$%&'()-=^~\\|@`[{;+:*]},<.>/?_" : "";

	if (letters == "" || length <= 0) {
		return "Error";
	}

	var i = 0, password = "";
	while (i < length) {
		var random = Math.floor(Math.random() * letters.length);
		if (password.slice(-1) != letters.charAt(random)) {
			password += letters.charAt(random);
			i++;
		}
	}
	return password;
}

function onGenerateButtonPressed() {
	let passElem = document.getElementById("password");
	let length = document.getElementById("length").value;
	let useNumber = document.getElementById("useNumber").checked;
	let useLower = document.getElementById("useLower").checked;
	let useUpper = document.getElementById("useUpper").checked;
	let useSymbol = document.getElementById("useSymbol").checked;
	passElem.value = createPassword(length, useNumber, useLower, useUpper, useSymbol);
}

function onCopyButtonPressed() {
	let passElem = document.getElementById("password");
	passElem.select();
	document.execCommand("Copy");
	passElem.blur();
}

function onCheckboxTitleClicked(type){
	if (document.getElementById(type).checked) {
		document.getElementById(type).checked = false;
	} else {
		document.getElementById(type).checked = true;
	}
}