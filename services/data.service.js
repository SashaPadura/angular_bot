bot.service('dataService', [function () {
	var noteArray = (localStorage.getItem('note') == null) ? [] : JSON.parse(localStorage.getItem('note'));

	function saveNote(note) {
		notifyMe(note.note);
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
	
	function notifyMe(message) {
	  if (!("Notification" in window)) {
		alert("This browser does not support desktop notification");
	  }
	  else if (Notification.permission === "granted") {
		var notification = new Notification(message);
	  }
	  else if (Notification.permission !== 'denied') {
		Notification.requestPermission(function (permission) {
		  if (permission === "granted") {
			var notification = new Notification(message);
		  }
		});
	  }
	}
	
	return {
		saveNote: saveNote
		, getNote: getNote
		, getPlace: getPlace
	}
}]);