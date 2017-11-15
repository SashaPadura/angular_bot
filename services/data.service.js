bot.service('dataService', [ function() {
	
	var noteArray = (localStorage.getItem('note') == null) ? [] : JSON.parse(localStorage.getItem('note'));
		
	function saveNote(note){;
		noteArray[noteArray.length] = note;
		localStorage.setItem('note',JSON.stringify(noteArray));
	}
	
	function getNote(){
		var note = JSON.parse(localStorage.getItem('note'))
		if(note != null){
			for(var i =0; i < note.length; i ++){
				note[i].date = moment(note[i].date,'MMMM Do YYYY, h:mm:ss a').fromNow();
			}
		}
		return note;
	}
	
	
      window.initAutocomplete = function () {
        autocomplete = new google.maps.places.Autocomplete(
            (document.getElementById('autocomplete')),
            {types: ['geocode']});
        autocomplete.addListener('place_changed', fillInAddress);
      }

      function fillInAddress() {
        var place = autocomplete.getPlace();
		console.log(place);
        
      }
	
	
	
	
	return {
		saveNote : saveNote,
		getNote  : getNote
	}
	
}]);
