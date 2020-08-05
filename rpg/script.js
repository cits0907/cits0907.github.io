function createPassword(length, useNumber, useLower, useUpper, useSymbol) {
	let nums = "0123456789".split("")
	let chrs = "abcdefghijklmnopqrstuvwxyz".split("")
	let syms = "!\"#$%&'()-=^~\\|@`[{;+:*]},<.>/?_".split("")

	if (!useNumber && !useLower && !useUpper && !useSymbol || length <= 0) {
		return "Error"
	}

	var password = "", i = 0;
	while (i < length) {
		let type = Math.floor(Math.random() * 4)
		if (type == 0 && useNumber) {
			let rand = Math.floor(Math.random() * nums.length)
			if (password.slice(-1) != nums[rand]) {
				password += nums[rand]
				i++
			}
		} else if (type == 1 && useLower) {
			let rand = Math.floor(Math.random() * chrs.length)
			if (password.slice(-1) != chrs[rand]) {
				password += chrs[rand]
				i++
			}
		} else if (type == 2 && useUpper) {
			let rand = Math.floor(Math.random() * chrs.length)
			if (password.slice(-1) != chrs[rand].toUpperCase()) {
				password += chrs[rand].toUpperCase()
				i++
			}
		} else if (type == 3 && useSymbol) {
			let rand = Math.floor(Math.random() * syms.length)
			if (password.slice(-1) != syms[rand]) {
				password += syms[rand]
				i++
			}
		}
	}
	return password
}

function onGenerateButtonPressed() {
	let passElem = document.getElementById("password")
	let length = document.getElementById("length").value
	let useNumber = document.getElementById("useNumber").checked
	let useLower = document.getElementById("useLower").checked
	let useUpper = document.getElementById("useUpper").checked
	let useSymbol = document.getElementById("useSymbol").checked
	passElem.value = createPassword(length, useNumber, useLower, useUpper, useSymbol)
}

function onCopyButtonPressed() {
	let passElem = document.getElementById("password")
	passElem.select()
	document.execCommand("Copy")
	passElem.blur()
}