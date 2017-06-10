function goBack() {
	window.history.back();
}


function openModal() {
	var modal =  document.getElementById('myModal');
	var page = document.getElementById('wholePage');

	console.log("hej");
	modal.style.display = "block";
	page.className = "page blurred";

}

function removeModal() {
	var modal =  document.getElementById('myModal');
	var page = document.getElementById('wholePage');
	modal.style.display = "none";
	page.className = "page";
}