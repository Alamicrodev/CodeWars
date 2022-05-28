// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

// moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]

// -------------------- My Solution -----------------------------------

function moveZeros(arr) {
	let newArray = [];
	for (let i = 0; i <= arr.length - 1; i++) {
		if (arr[i] === 0) {
			arr.splice(i, 1);
			newArray.push(0);
			i--;
		}
	}

	arr = arr.concat(newArray);
	return arr;
}

console.log(moveZeros([1, 2, 0, 0, 0, 1, 0, 3, 0, 1]));
