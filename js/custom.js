document.addEventListener('DOMContentLoaded', function () {
	VanillaTilt.init(document.querySelector(".your-element"), {
		max: 25,
		speed: 400
	});
});

gastenboekform

var y = document.querySelector("#rsvp");

function disableform() {
	var b = document.querySelector('#rsvp button');
	b.innerHTML = "Verstuurd!";

	var elements = document.querySelectorAll('#rsvp input, #rsvp select, #rsvp textarea');
	for (var i = 0; i < elements.length; i++) {
		elements[i].disabled = true;
	}
}

y.addEventListener("submit", function (t) {
	//w.validate(),
	var b = document.querySelector('#rsvp button');
	if(b.innerHTML == "Verstuurd!"){
		alert("Je hebt de aanwezigheid reeds verstuurd.");
		t.preventDefault();
		return false;
	}
	this.submit();
	disableform();
	t.preventDefault();
	return false;

});

/*
document.querySelector('#rsvp').submit(function() {
	this.submit();
	disableFields(); // your own function
	return false;
});
*/