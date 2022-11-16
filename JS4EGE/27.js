	inputn = input.split('\n');

	size = parseInt(inputn[0]);
	inputn.shift();
	array = [];

	first = [];
	second = [];

	sumFirst = 0;
	sumSecond = 0;
	sumThird = 0;

	for(i = 0; i < inputn.length; i++){
		ar = inputn[i].split(' ');
		ar.sort((a, b) => {
			return parseInt(a) - parseInt(b);
		});
		array.push(ar);
		array[i][0] = parseInt(array[i][0]);
		array[i][1] = parseInt(array[i][1]);
		array[i][2] = parseInt(array[i][2]);


	}
	array.pop();
	for(i = 0; i < array.length; i++){
		first.push(array[i][0]);
		sumFirst += array[i][0];

	}
	for(i = 0; i < array.length; i++){
		second.push(array[i][1]);
		sumSecond += array[i][1];

	}
	for(i = 0; i < array.length; i++){
		sumThird += array[i][2];

	}
	if(sumFirst % 2 != 0 && sumSecond % 2 != 0){
	
		minDif = 1000000;
		minIndex = 0;
  	for(i = 0; i < array.length; i++){
  		min = array[i][0];
  		med = array[i][1];
  		max = array[i][2];

  		if(min % 2 != 0 && max % 2 == 0){
  			if(med % 2 != 0){
  				if(minDif > max - med) {
    				minDif = max - med;
    				minIndex = i;
    			}
  			} else {
  				if(minDif > max - min) {
    				minDif = max - min;
    				minIndex = i;
    			}
  			}
  			
  		} else if(min % 2 == 0 && max % 2 != 0){
  			if(med % 2 == 0){
  				if(minDif > max - med) {
    				minDif = max - med;
    				minIndex = i;
    			}
  			} else {
  				if(minDif > max - min) {
    				minDif = max - min;
    				minIndex = i;
    			}
  			}
  		}

  		
  	}


  	sumThird -= minDif;
	} else if(sumFirst % 2 == 0 && sumSecond % 2 == 0){
		minDif = 1000000;
		minIndex = 0;
  	for(i = 0; i < array.length; i++){
  		min = array[i][0];
  		med = array[i][1];
  		max = array[i][2];

  		if(med % 2 != 0 && max % 2 == 0){
  			if(minDif > max - med) {
  				minDif = max - med;
  				minIndex = i;
  			}
  		} else if(med % 2 == 0 && max % 2 != 0){
  			if(minDif > max - med) {
  				minDif = max - med;
  				minIndex = i;
  			}
  		}

  		
  	}

  	sumThird -= minDif;
	}



	output = sumThird;
