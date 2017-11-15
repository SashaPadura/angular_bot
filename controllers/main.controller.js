bot.controller('mainCtrl',['dataService','apiService','$location',function(dataService,apiService,$location){
	
	var vm = this;
	
	vm.saveNote = function(){
		dataService.saveNote({note : vm.noteText, date : moment().format('MMMM Do YYYY, h:mm:ss a')});
		getNote();
	}
	
	function getNote(){
		vm.noteArray = dataService.getNote();
	}
	
	
	
	getNote();
}])