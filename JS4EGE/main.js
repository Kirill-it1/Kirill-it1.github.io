let i = 1;
int = setInterval(() => {
	console.log(`Hello world ${i}`);
	i++;
	if(i == 100) clearInterval(int);

}, 100);



output = 'it`s end';