bot.service('apiService', ['dataService', '$resource','$http', function (dataService, $resource,$http) {

function getWeather(){
	$.getJSON("http://samples.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=b1b15e88fa797225412429c1c50c122a1",function(result){
		console.log(result);
    });
};

	getWeather();

return {
	getWeather : getWeather
}
	
	
}]);