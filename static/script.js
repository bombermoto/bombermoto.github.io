function opencloseForm() {
	var poll = document.getElementById("poll");
	if (poll.style.display == "none" || poll.style.display == "") {
		poll.style.display = "block";
	} else if (poll.style.display == "block") {
		poll.style.display = "none";
	}	
}

