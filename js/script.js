let choosenPlace;

function showPlace() {
	checkPlace();
	showPlaceInfo();
}

function showPlaceInfo () {
	document.getElementById("place-name").innerHTML = placeData[choosenPlace-1].name;
  	document.getElementById("description").innerHTML = placeData[choosenPlace-1].description;
   	document.getElementById("map").innerHTML = placeData[choosenPlace-1].map;

}

function checkPlace () {
	for(let i=1; i<7; i++) {
		if(document.getElementById("place"+i).checked) {
   			choosenPlace = document.getElementById("place"+i).value;
   		}
   }
}