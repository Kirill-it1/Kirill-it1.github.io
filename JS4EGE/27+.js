array = input.split('\n');

size = parseInt(array[0]);
array.shift();
array.pop();

let newArray = [],
	dif = [],
	minSum = 0;


array.forEach((arr) => {
	if(arr.indexOf('  ') > 0){
		newArr = arr.split('  ');
	} else {
		newArr = arr.split(' ');
	}
	newArr[0] = parseInt(newArr[0]);
	newArr[1] = parseInt(newArr[1]);

	newArr.sort((a, b) => a - b);
	if(newArr[1] != newArr[0] && (newArr[1] - newArr[0]) % 3 != 0)
		dif.push(newArr[1] - newArr[0]);

	minSum += newArr[0];

	newArray.push(newArr);
});

console.log(newArray);

dif.sort((a, b) => a - b);
let dif1 = 1111110;
let dif2 = 1111110;
let Dif = 0;
let index = 0;

if(minSum % 3 == 1){

	for(i = 0; i < dif.length; i++){
		if(dif[i] % 3 == 2){
			dif2 = dif[i];
			index = i;
			break;
		}

	}

	for(i = 0; i < index - 1; i++){

		for(j = i + 1; j < index; j++){
			if((dif[i] + dif[j]) % 3 == 2)
				dif1 = Math.min(dif1, dif[i] + dif[j]);

		}

	}

	Dif = Math.min(dif1, dif2);

} else if(minSum % 3 == 2){

	for(i = 0; i < dif.length; i++){
		if(dif[i] % 3 == 1){
			dif2 = dif[i];
			index = i;
			break;
		}

	}

	for(i = 0; i < index - 1; i++){

		for(j = i + 1; j < index; j++){
			if((dif[i] + dif[j]) % 3 == 1)
				dif1 = Math.min(dif1, dif[i] + dif[j]);

		}

	}

	Dif = Math.min(dif1, dif2);

}

minSum += Dif;

output = minSum;