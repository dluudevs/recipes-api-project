//QUESTIONS:
	//I couldn't figure out how to extract the ingredients (they're values in an array that is embedded in an array of objects)
	//I tried using forEach to extract the values, but i can't seem to log the array that i created
	//I wanted to pass in a string of ingredients, showRecipes() - line 113


const apiID = "c98291d0";
const apiKey = "6bb8f3a6880182e070150cf8780b037e";
let matches; //this holds the array of matches after ajax method runs
let $recipeID;
let course;

// ***** CHECKS IF FORM IS FILLED OUT *****
const formCheck = function (){
	if ( $('input[name="health"]:checked').val() && 
		$('input[name="ingredient"]:checked').val() &&
		$('option[name="course"]:selected').val()) {
		console.log('submitting form..');
		//print loading recipes in results section
	} else {
		alert('Before I can find recipes for you, please answer all my questions!');
	}
	console.log('Health:', $('input[name="health"]:checked').val());
	console.log('Ingredients:', $('input[name="ingredient"]:checked').val());
	course = $('option[name="course"]:selected').val();
	console.log('Course:', course);
}


// ***** HEALTHY FUNCTION FOR USER INPUT 
const healthValues = [100, 400, 800, 30, 800];
//if unhealthy, change all the values in the array to undefined
const healthInput = function (){
	if ($('#health input[name="health"]:checked').val() === 'unhealthy'){
		for(i = 0; i < healthValues.length; i++){
			healthValues[i] = undefined;
		}
	}
	console.log(healthValues);
}

//  ***** INGREDIENT FUNCTION FOR USER INPUT *****
let allowedIngredient = undefined;
let excludedIngredient = undefined;

const ingredientInput = function (){
	if ($('#include:checked').val() == 'include'){
		allowedIngredient= $('#ingredient input[type=text]').val();
		console.log($('#ingredientInput').val());
	} else if ($('#exclude:checked').val() == 'exclude'){
		excludedIngredient = $('#ingredient input[type=text]').val();
		console.log($('#ingredientInput').val());
	}  else if ($('#none:checked')) {
		console.log($('#none:checked').val());
		// $('#ingredientInput').addClass('hideInput');
	}
}

	// $('#ingredient input[type="radio"]').on('click', function(){
	// 	console.log('I heard your click!!!!');
	// })

// ***** AJAX REQUEST *****

const $refineSearch = (course, allowedIngredient, excludedIngredient, healthValues) => {
	//pass through variables to the function, assign variable values from a function for each user input
	
	return $.ajax({
		//returns what the end point provides us (allows us to work with it)
		//if you dont return it - you can't do anything with the returned value (like storing the output in the function)
		//tho its not necessary here as we're storing the object in a variable
	url: 'http://api.yummly.com/v1/api/recipes?',
	method: 'GET',
	data: {
		format: 'json',
		_app_id: apiID,
		_app_key: apiKey,
		'allowedCourse[]': `course^course-${course}`,
		maxTotalTimeInSeconds: 1800,	
		requirePictures: true,
		maxResult: 100,
		'nutrition.CHOCDF.max': healthValues[0], //100
		'nutrition.ENERC_KCAL.min': healthValues[1], //400
		'nutrition.ENERC_KCAL.max': healthValues[2], //800
		'nutrition.FAT.max': healthValues[3], //30
		'nutrition.NA.max': healthValues[4], //800
		'allowedIngredient[]': allowedIngredient,
		'excludedIngredient[]': excludedIngredient
		}
	}).then(function (data){
		// console.log('Matches array', matches); //returns an array
		// console.log('Data Objects', data);
		$recipeID = data.matches[0].id;	
		console.log(`Link to the recipe: https://www.yummly.com/recipe/${$recipeID}`);
		ingredientsArray(data.matches);
		// showRecipes(data.matches);
	})
}

//create a function that maps out the results

const ingredientsArray = function (matches){
	// debugger
	let ingredients = matches.forEach(function (index){
		return index.ingredients;
	})
	console.log(ingredients);
	// matches.ingredients.map(function (array){
	// 	const ingredients = array.join(', ');
	// 	console.log(ingredients)
}

const showRecipes = function (matches){
	console.log('this is the new function', matches);
	matches.forEach(function (){
		const recipes = `
			<div class="gallery">
				<h3${matches.recipeName}</h3>
				<img src=${matches.smallImageUrls} alt="picture of recipe">
				<p>Cooking Time: ${matches.totalTimeInSeconds}</p>
				<p></p> 
				<p>content for above</p>
			</div>	
			`
	})//ingredients are supposed to go in line 119, but they're in an array
}

$(document).ready(function (){
	$('#ready form').on('submit', function (e){
		e.preventDefault();
		ingredientInput();
		healthInput();
		// formCheck();
		$refineSearch(course, allowedIngredient, excludedIngredient, healthValues);
	})
});

//basic requirments for each search
	//max results 6 - is there a point in having this?
	//have a high number of max results (50) - to ensure that when we're looking into the second api request we find the what we want
	//then limit the display to 6 items


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
		//'allowedIngredient[]':
	//servings




//display data

					