function showPlace() {

	for(let i=1; i<7; i++) {
		if(document.getElementById('place'+i).checked) {
   			choosenPlace = document.getElementById('place'+i).value;
   		}
   }
   alert(choosenPlace);
}