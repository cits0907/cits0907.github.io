function createPassword(length, useNum, useLow, useUpr, useSym) {
	let nums = "0123456789".split("")
	let chrs = "abcdefghijklmnopqrstuvwxyz".split("")
	let syms = "!\"#$%&'()-=^~\\|@`[{;+:*]},<.>/?_".split("")
	if (!useNum && !useLow && !useUpr && !useSym || length <= 0) {
		return "Error"
	}
	var pass = "", i = 0;
	while (i < length) {
		let type = Math.floor(Math.random() * 4)
		if (type == 0 && useNum) {
			let rand = Math.floor(Math.random() * nums.length)
			if (pass.slice(-1) != nums[rand]) {
				pass += nums[rand]
				i++
			}
		} else if (type == 1 && useLow) {
			let rand = Math.floor(Math.random() * chrs.length)
			if (pass.slice(-1) != chrs[rand]) {
				pass += chrs[rand]
				i++
			}
		} else if (type == 2 && useUpr) {
			let rand = Math.floor(Math.random() * chrs.length)
			if (pass.slice(-1) != chrs[rand].toUpperCase()) {
				pass += chrs[rand].toUpperCase()
				i++
			}
		} else if (type == 3 && useSym) {
			let rand = Math.floor(Math.random() * syms.length)
			if (pass.slice(-1) != syms[rand]) {
				pass += syms[rand]
				i++
			}
		}
	}
	return pass
}

function onGenPressed() {
	let passElem = document.getElementById("password")
	let length = document.getElementById("length").value
	let useNum = document.getElementById("useNum").checked
	let useLow = document.getElementById("useLow").checked
	let useUpr = document.getElementById("useUpr").checked
	let useSym = document.getElementById("useSym").checked
	passElem.value = createPassword(length, useNum, useLow, useUpr, useSym)
}

function onCpyPressed() {
	let passElem = document.getElementById("password")
	passElem.select()
	document.execCommand("Copy")
	passElem.blur()
}