function createPassword(length, characters) {
	var result = "";
	var i;
	for (i = 0; i < characters.length; i++) {
		if(result.indexOf(characters.charAt(i)) == -1) {
			result += characters.charAt(i);
		}
	}

	if (result.length < 2 || length < 1) {
		return "Error";
	}

	i = 0, password = "";
	while (i < length) {
		let random = Math.floor(Math.random() * result.length);
		if (password.slice(-1) != result.charAt(random)) {
			password += result.charAt(random);
			i++;
		}
	}
	return password;
}

function onGenerateButtonPressed() {
	var length = document.getElementById("length").value;
	if (length > 100000) {
		if (!confirm("処理に時間がかかりますがよろしいですか？")) {
			return;
		}
	}

	var characters = "";
	characters += document.getElementById("useNumber").checked ? document.getElementById("includedNumber").value : "";
	characters += document.getElementById("useLower").checked ? document.getElementById("includedLower").value : "";
	characters += document.getElementById("useUpper").checked ? document.getElementById("includedUpper").value : "";
	characters += document.getElementById("useSymbol").checked ? document.getElementById("includedSymbol").value : "";
	document.getElementById("password").value = createPassword(length, characters);
}

function onCopyButtonPressed() {
	let passwordElement = document.getElementById("password");
	passwordElement.select();
	document.execCommand("Copy");
	passwordElement.blur();
}

function onCheckboxTitleClicked(className) {
	let checkboxElement = document.getElementsByClassName(className)[0];
	checkboxElement.checked = checkboxElement.checked ? false : true;

	onCheckBoxChanged(className);
}

function onCheckBoxChanged(className) {
	let checkboxElement = document.getElementsByClassName(className)[0];
	let charactersElement = document.getElementsByClassName(className)[1];

	charactersElement.disabled = checkboxElement.checked ? false : true;
}

function onResetButtonPressed() {
	document.getElementById("length").value = 16;
	document.getElementById("password").value = "";
	document.getElementById("useNumber").checked = true;
	document.getElementById("useLower").checked = true;
	document.getElementById("useUpper").checked = true;
	document.getElementById("useSymbol").checked = false;
	document.getElementById("includedNumber").value = "0123456789";
	document.getElementById("includedLower").value = "abcdefghijklmnopqrstuvwxyz";
	document.getElementById("includedUpper").value = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	document.getElementById("includedSymbol").value = "!\"#$%&'()-=^~\\|@`[{;+:*]},<.>/?_";
	document.getElementById("includedNumber").disabled = false;
	document.getElementById("includedLower").disabled = false;
	document.getElementById("includedUpper").disabled = false;
	document.getElementById("includedSymbol").disabled = true;
}