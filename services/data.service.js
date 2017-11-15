bot.service('dataService', [function () {
	var noteArray = (localStorage.getItem('note') == null) ? [] : JSON.parse(localStorage.getItem('note'));

	function saveNote(note) {;
		noteArray[noteArray.length] = note;
		localStorage.setItem('note', JSON.stringify(noteArray));
	}

	function getNote() {
		var note = JSON.parse(localStorage.getItem('note'))
		if (note != null) {
			for (var i = 0; i < note.length; i++) {
				note[i].date = moment(note[i].date, 'MMMM Do YYYY, h:mm:ss a').fromNow();
			}
		}
		return note;
	}
	
	
	var place;
	
	$.getScript("https://maps.googleapis.com/maps/api/js?key=AIzaSyDZoQraZLd3pRfAiJLM2v3djMlFYoW4e7E&libraries=places", function (data, textStatus, jqxhr) {
		function initAutocomplete() {
			autocomplete = new google.maps.places.Autocomplete(
				(document.getElementById('autocomplete')), {
					types: ['geocode']
				});
			autocomplete.addListener('place_changed', fillInAddress);
		}
		initAutocomplete();

		function fillInAddress() {
			place = autocomplete.getPlace();
		}
	});

	function getPlace() {
		return place;
	}
	return {
		saveNote: saveNote
		, getNote: getNote
		, getPlace: getPlace
	}
}]);