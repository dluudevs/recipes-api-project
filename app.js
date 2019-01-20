const apiID = "c98291d0";
const apiKey = "6bb8f3a6880182e070150cf8780b037e";
var $matches; //this holds the array of matches after ajax method runs

const queryStrings = {

}

const formCheck = function (){
	if ( $('input[name="health"]:checked').val() && 
		$('input[name="ingredient"]:checked').val() &&
		$('option[name="servings"]:selected').val()) {
		console.log('submitting form..');
		//print loading recipes in results section
	} else {
		alert('Before I can find recipes for you, please answer all my questions!');
	}
	console.log('Health:', $('input[name="health"]:checked').val());
	console.log('Ingredients:', $('input[name="ingredient"]:checked').val());
	console.log('Servings:', $('option[name="servings"]:selected').val());
}
	

//what are all the possible outcomes 
// key1, value1, key2, value2, key3, value3, key4, value4,
// 								key5, value5, key6, value6, key7, value7, key8, value8

// const $refineSearch = function (key1, value1, key2, value2, key3, value3, key4, value4,
// 								key5, value5, key6, value6, key7, value7, key8, value8){
// 	$.ajax({
// 	url: 'http://api.yummly.com/v1/api/recipes?',
// 	method: 'GET',
// 	data: {
// 		format: 'json',
// 		_app_id: apiID,
// 		_app_key: apiKey,
// 		'allowedCourse[]': 'course^course-Main Dishes',
// 		maxTotalTimeInSeconds: 1800,	
// 		requirePictures: true,
// 		// q: 'pizza'
// 		// key1: value1,
// 		// key2: value2,
// 		// key3: value3,
// 		// key4: value4,
// 		// key5: value5,
// 		// key6: value6,
// 		// key6: value6,
// 		// key8: value8
// 		}
// 	}).then(function (data){
// 		$matches = data.matches;
// 		const $recipeID = $matches[2].id;
// 		console.log('Matches array', $matches); //returns an array
// 		console.log('Data Objects', data);
// 		console.log(`Link to the recipe: https://www.yummly.com/recipe/${$recipeID}`);
// 	});
// }

// how do people normally do this if they dont want to use if statements, specifically if your parameter contains nonconventional characters



const $results = $.ajax({
	url: 'http://api.yummly.com/v1/api/recipes?',
	method: 'GET',
	data: {
		format: 'json',
		_app_id: apiID,
		_app_key: apiKey,
		'allowedCourse[]': 'course^course-Main Dishes',
		maxTotalTimeInSeconds: 1800,	
		requirePictures: true,
		'excludedIngredient[]': 'pork'
		// q: '1 serving'
		}
	}).then(function (data){
		$matches = data.matches;
		const $recipeID = $matches[2].id;
		console.log('Matches array', $matches); //returns an array
		console.log('Data Objects', data);
		console.log(`Link to the recipe: https://www.yummly.com/recipe/${$recipeID}`);
	});

$(document).ready(function (){
	$('#ready form').on('submit', function (e){
		e.preventDefault();
		$results;
		// formCheck();
	})
});

//basic requirments for each search
	//max results 6 - is there a point in having this?


//display results 
	//name of recipe $matches[i].recipeName
	//img $matches[i].smallImageUrls[0]
	//cooktime $matches[i].totalTimeInSeconds
	//ingredients $matches[i].ingredients (returns an array)
	//link to actual recipe `https://www.yummly.com/recipe/${matches[i].id}`

//user search parameters
	//nutritional values
		// healthy: {'nutrition.CHOCDF.max': 100, carbs (less carbs from fibers)
		// 			'nutrition.ENERC_KCAL.min': 400, min calories
		// 			'nutrition.ENERC_KCAL.max': 800, max calories
		// 			'nutrition.FAT.max': 30, total fat
		// 			'nutrition.NA.max': 800 
			// 		 }
	//include and exclude
		//'excludedIngredient[]': 
		//'includedIngredient[]':
	//servings




//display data

					