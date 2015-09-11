
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



var ViewModel = function() {

	this.showLiveMarkers = function() {
		initializeLiveMap();
	}

	this.showLikeMarkers = function() {
    initializeLikeMap();
	}
}

ko.applyBindings(new ViewModel());