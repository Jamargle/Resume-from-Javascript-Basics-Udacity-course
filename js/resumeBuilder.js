
bioDisplay();
worksDisplay();
projectsDisplay();
educationsDisplay();


function addHyperLink(html,url,text){
    if (!text) { 
    	text = url; 
    }
    
    var formattedURL = html.replace("#", url);
    formattedURL = formattedURL.replace("%data%",text);
    
    return formattedURL;
}

function inName() {
  var name = bio.name.trim().split(" ");

  name[1] = name[1].toUpperCase();
  name[0] = name[0].slice(0,1).toUpperCase() +
            name[0].slice(1).toLowerCase();

  return name[0] + " " + name[1];
}

$("#main").append(internationalizeButton);

$("#mapDiv").append(googleMap);


var ViewModel = {

  query : ko.observable(''), //Initially blank


	showLiveMarkers : function() {
		initializeLiveMap(locationFinder());
	},

	showLikeMarkers : function() {
    initializeLikeMap(locationLikeFinder());
	},

  findThisMarker : function(searchString) {

    var results = [];
    
    if (searchString == '') {
      displayMarkersSearchResults(results);
      return;
    }

    for (var pos in neighborhoods.locations) {
      if (neighborhoods.locations[pos].toLowerCase().indexOf(searchString.toLowerCase()) >= 0) {
        results.push(neighborhoods.locations[pos]);
      }
    }

    displayMarkersSearchResults(results);
  },

  
} //Fin de ViewModel
ViewModel.query.subscribe(ViewModel.findThisMarker);

ko.applyBindings(ViewModel);

