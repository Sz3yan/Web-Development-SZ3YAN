function load(){
    var row=document.getElementById("schedule").insertRow(1);
	var cell1 = row.insertCell(0);
	var cell2 = row.insertCell(1);
	cell1.innerHTML = badminton[0]["name"];
	cell2.innerHTML = badminton[0].location;
}