bot.controller('mainCtrl',['dataService','apiService','$location',function(dataService,apiService,$location){
	
	var vm = this;
	
	vm.saveNote = function(){
		dataService.saveNote({note : vm.noteText, date : moment().format('MMMM Do YYYY, h:mm:ss a'), symbol : 'N', title : 'Нотатка' });
		getNote();
		vm.noteText = '';
	}
	
	function getNote(){
		vm.noteArray = dataService.getNote();
	}
	
	vm.getWeather = function(){
		var place = dataService.getPlace();
		
		var data = {
			lat : place.geometry.location.lat(),
			lon : place.geometry.location.lng()
		}
		apiService.getWeather(data).get(function(msg){
			var temp = parseInt(Number(msg.main.temp) - 273.15);
			
			dataService.saveNote({note : 'В місті : '+place.address_components["0"].long_name+' становить : '+ temp +' градусів Цельсія', date : moment().format('MMMM Do YYYY, h:mm:ss a'), symbol : 'T', title : 'Температура'});
			getNote();
			
		},function(error){
			console.log(error);
		})
	}
	
	getNote();
}])