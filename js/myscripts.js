function openModal() {
	var modal =  document.getElementById('myModal');
	var page = document.getElementById('wrapper');

	console.log("hej");
	modal.style.display = "block";
	page.className = "page blurred";

}

function removeModal() {
	var modal =  document.getElementById('myModal');
	var page = document.getElementById('wrapper');
	modal.style.display = "none";
	page.className = "page";
}