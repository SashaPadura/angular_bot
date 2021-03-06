bot.service('apiService', ['dataService', '$resource', '$http', function (dataService, $resource, $http) {
	
	/*API weather*/
	function getWeather(data) {
		return $resource("https://api.openweathermap.org/data/2.5/weather?lat="+data.lat+"&lon="+data.lon+"&APPID=471b01dc1090574be546718f50dbd19a", {}, {
			get: {
				method: 'JSONP'
			}
		})
	}
	/*API current rate*/
	function getRate(){

		return $resource("https://api.fixer.io/latest?base=USD", {}, {
			get: {
				method: 'JSONP'
			}
		})
	}
	
	
	return {
		getWeather : getWeather,
		getRate	   : getRate
	}
}]);