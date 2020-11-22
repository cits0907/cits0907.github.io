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
	var characters = "";
	characters += document.getElementById("useNumber").checked ? document.getElementById("includedNumber").value : "";
	characters += document.getElementById("useLower").checked ? document.getElementById("includedLower").value : "";
	characters += document.getElementById("useUpper").checked ? document.getElementById("includedUpper").value : "";
	characters += document.getElementById("useSymbol").checked ? document.getElementById("includedSymbol").value : "";
	document.getElementById("password").value = createPassword(document.getElementById("length").value, characters);
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