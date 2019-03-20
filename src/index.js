/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */

module.exports = function getLoveTrianglesCount(preferences = []) {
	let count = 0;

	preferences.forEach((item, index, arr) => {
		//The code below is working, but i think it isn't good code
		/*if (index + 1 === arr[arr[item - 1] - 1]) {
			count++;
		}*/

		//love - it's love variable in array and indexLove - it's index of love in array
		let love,
			indexLove = item - 1;

		for (let i = 0; i < 2; i++) {
			love = arr[indexLove];
			indexLove = love - 1;
		}

		if (indexLove === index) {
			count ++;
		}
	});

	//divide the bill by 3, because there is no list love triangles
	return Math.floor(count / 3);
};
