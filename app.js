const apiID = "c98291d0";
const apiKey = "6bb8f3a6880182e070150cf8780b037e";
var $matches; //this holds the array of matches after ajax method runs
const queryStrings = {

}

$()
//make each parameter an object - add the corresponding object to the data object in ajax method (for in loop)

$(document).ready(function (){

	const $initialResults = $.ajax({
		url: 'http://api.yummly.com/v1/api/recipes?',
		method: 'GET',
		data: {
			format: 'json',
			_app_id: apiID,
			_app_key: apiKey,
			'allowedCourse[]': 'course^course-Main Dishes',
			maxTotalTimeInSeconds: 1800,
			requirePictures: true,
		}
	}).then(function (data){
		$matches = data.matches;
		console.log($matches[0].totalTimeInSeconds/60, 'minutes');
		console.log($matches)
		// console.log(data);
	}); //end of ajax

});//end of document ready

//basic requirments for each search
	//max results 6 - is there a point in having this?


//display results 
	//name of recipe $matches[i].recipeName
	//img $matches[i].smallImageUrls[0]
	//cooktime $matches[i].totalTimeInSeconds
	//ingredients $matches[i].ingredients (returns an array)
	//link to actual recipe

//get data
	//use correct query string based on user input
	//make the form required 


//display data

					