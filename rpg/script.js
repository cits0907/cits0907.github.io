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
		let random = Math.floor(Math.random() * letters.length);
		if (password.slice(-1) != letters.charAt(random)) {
			password += letters.charAt(random);
			i++;
		}
	}
	return password;
}

function onGenerateButtonPressed() {
	let passwordElement = document.getElementById("password");
	let length = document.getElementById("length").value;
	let useNumber = document.getElementById("useNumber").checked;
	let useLower = document.getElementById("useLower").checked;
	let useUpper = document.getElementById("useUpper").checked;
	let useSymbol = document.getElementById("useSymbol").checked;
	passwordElement.value = createPassword(length, useNumber, useLower, useUpper, useSymbol);
}

function onCopyButtonPressed() {
	let passwordElement = document.getElementById("password");
	passwordElement.select();
	document.execCommand("Copy");
	passwordElement.blur();
}

function onCheckboxTitleClicked(type){
	let checkboxElement = document.getElementById(type);
	checkboxElement.checked = checkboxElement.checked ? false : true;
}