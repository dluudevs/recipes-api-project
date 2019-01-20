const apiID = "c98291d0";
const apiKey = "6bb8f3a6880182e070150cf8780b037e";
var $matches; //this holds the array of matches after ajax method runs
const queryStrings = {

}

const $recipes = $.ajax({
	url: 'http://api.yummly.com/v1/api/recipes?',
	method: 'GET',
	data: {
		format: 'json',
		_app_id: apiID,
		_app_key: apiKey,
		'allowedCourse[]': 'course^course-Main Dishes',
		maxTotalTimeInSeconds: 1800,	
		requirePictures: true,
		'allowedIngredient[]': 'pork',
		'excludedIngredient[]': 'cheese',
		q: '1 serving'
		}
}).then(function (data){
	$matches = data.matches;
	const $recipeID = $matches[2].id;
	console.log('Matches array', $matches); //returns an array
	console.log('Data Objects', data);
	console.log(`Link to the recipe: https://www.yummly.com/recipe/${$recipeID}`);
});
//make each parameter an object - add the corresponding object to the data object in ajax method (for in loop)

$(document).ready(function (){
	$recipes;


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

					