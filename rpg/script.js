// パスワードを作成する
function createPassword(length, characters) {
	var tmpDuplicates = "";
	var i;
	// 文字種の重複を削除
	for (i = 0; i < characters.length; i++) {
		if(!tmpDuplicates.includes(characters.charAt(i))) {
			tmpDuplicates += characters.charAt(i);
		}
	}
	characters = tmpDuplicates;

	// 重複削除の結果，1種類しか残らない場合やパスワードの長さが1未満の場合は終了
	if (characters.length < 2 || length < 1) {
		alert("入力に誤りがあります！");
		return "エラー！";
	}

	// 文字が連続しないようにしながらパスワードを生成
	i = 0, password = "";
	while (i < length) {
		let random = Math.floor(Math.random() * characters.length);
		if (password.slice(-1) != characters.charAt(random)) {
			password += characters.charAt(random);
			i++;
		}
	}
	return password;
}

// 作成ボタンが押された時の処理
function onGenerateButtonPressed() {
	var length = document.getElementById("length").value;
	if (length >= 100000 && !confirm("処理に時間がかかりますがよろしいですか？")) {
		return;
	}

	// 入力フォームの内容を取得し，createPasswordを呼ぶ
	var characters = "";
	characters += document.getElementById("useNumber").checked ? document.getElementById("includedNumber").value : "";
	characters += document.getElementById("useLower").checked ? document.getElementById("includedLower").value : "";
	characters += document.getElementById("useUpper").checked ? document.getElementById("includedUpper").value : "";
	characters += document.getElementById("useSymbol").checked ? document.getElementById("includedSymbol").value : "";
	document.getElementById("password").value = createPassword(length, characters);
}

// コピーボタンが押された時の処理
function onCopyButtonPressed() {
	let passwordElement = document.getElementById("password");
	passwordElement.select();
	document.execCommand("Copy");
	passwordElement.blur();
}

// チェックボックスに対応した文字をクリックされた時の処理
function onCheckboxTitleClicked(className) {
	// チェックボックスを反転させる
	let checkboxElement = document.getElementsByClassName(className)[0];
	checkboxElement.checked = !checkboxElement.checked;

	onCheckBoxChanged(className);
}

// チェックボックスがクリックされた時の処理
function onCheckBoxChanged(className) {
	let checkboxElement = document.getElementsByClassName(className)[0];
	let charactersElement = document.getElementsByClassName(className)[1];

	// 入力フォームを無効化
	charactersElement.disabled = !checkboxElement.checked;
}

// 初期化ボタンが押された時の処理
function onResetButtonPressed() {
	document.getElementById("length").value = 16;
	document.getElementById("password").value = "";
	document.getElementById("password").placeholder = "ここにパスワードが表示されます";
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

// 初回読み込み時，初期化する
onResetButtonPressed();
