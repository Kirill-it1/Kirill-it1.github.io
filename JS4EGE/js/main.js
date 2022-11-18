const input_txt = document.querySelector('#file-txt'),
	input_js = document.querySelector('#file-js'),
	myCons = document.querySelector('#console');

let myConsole = {};

myConsole.in = myCons.innerHTML;

myConsole.scroll = () => {

	myCons.scrollTo(0, myCons.scrollHeight);

}

myConsole.write = (str, primary) => {
	if(primary == false) {
		note = `<p class="console__text">${str}</p>`;
	} else {
		note = `<p class="console__text console__text_green">${str}</p>`;
	}
	myConsole.in += note;
	myCons.innerHTML = myConsole.in;
	myConsole.scroll();
}



const btn = document.querySelector('.file-btn');
const btn_text = document.querySelector('#text');
const btn_text_js = document.querySelector('#text_js');



console.stdlog = console.log.bind(console);
console.logs = [];

console.log = function(){
	console.logs.push(Array.from(arguments));
	console.stdlog.apply(console, arguments);
	myConsole.write(Array.from(arguments), false); 
}
console.stdlog(console.logs);

let files,
	text_file = false,
	js_file = false,
	fileText = '',
	fileJs = '';

document.addEventListener('dragover', ev => ev.preventDefault());
document.addEventListener('drop', ev => ev.preventDefault());



const main = () =>{
	
	if(js_file === true && text_file === true){
		output = '';
		input = fileText;
		eval(fileJs);
		out = output.toString();
		if(out.length > 0)
			myConsole.write(out, true);
	}

}


// обрабатываем изменение инпута
input_txt.addEventListener('change', () => {
	// извлекаем File
	file = input_txt.files[0]
	
	// передаем файл в функцию для дальнейшей обработки
	

	const handleFile = (file) => {
	if(file.type !== 'text/plain'){
		btn_text.innerHTML = `<span class="red">Неподходящий файл</span>`;
		text_file = false;
		return;
	}
	btn_text.innerHTML = `<span class="blue">${file.name}</span>`;

	createText(file)
}
		const createText = text => {
		// создаем экземпляр объекта "FileReader"
		const reader = new FileReader()
		// читаем файл как текст
		// вторым аргументом является кодировка
		// по умолчанию - utf-8,
		// но она не понимает кириллицу
		reader.readAsText(text, 'windows-1251')
		// дожидаемся завершения чтения файла
		// и помещаем результат в документ
		reader.onload = () => {

			text_file = true;
			fileText = reader.result;
			main();
	}
}
handleFile(file);

});


input_js.addEventListener('change', () => {
	// извлекаем File
	file = input_js.files[0]
	
	// передаем файл в функцию для дальнейшей обработки
	
	const handleFile = (file) => {
		if(file.type !== 'text/javascript'){
			btn_text_js.innerHTML = `<span class="red">Неподходящий файл</span>`;
			js_file = false;
			return;
		}
		btn_text_js.innerHTML = `<span class="blue">${file.name}</span>`;

		createText(file)
	}
	const createText = text => {
		// создаем экземпляр объекта "FileReader"
		const reader = new FileReader()
		// читаем файл как текст
		// вторым аргументом является кодировка
		// по умолчанию - utf-8,
		// но она не понимает кириллицу
		reader.readAsText(text, 'windows-1251')
		// дожидаемся завершения чтения файла
		// и помещаем результат в документ
		reader.onload = () => {
			js_file = true;
			fileJs = reader.result;
			main();
		}
	}
	handleFile(file);

});