document.addEventListener('DOMContentLoaded', function () {
	VanillaTilt.init(document.querySelector(".your-element"), {
		max: 25,
		speed: 400
	});
});
/*
var y = document.querySelector("form"),
	b = document.querySelector('button[type="submit"]'),
	_ = b.innerHTML,
	w = new s.Validator(y, {
		lang: s.enLang,
		on: {
			"validation:success": function () {
				b.innerHTML = "Loading...";
				fetch(y.getAttribute("action"), {
					method: y.getAttribute("method"),
					body: new FormData(y)
				}).then(function (response) {
					console.log("Response object:", response);
					if (!response.ok) {
						throw new Error('Network response was not ok ' + response.statusText);
					}
					return response.text();
				}).then(function (text) {
					console.log("Response text:", text);
					if ("true" === text) {
						b.innerHTML = "Email Sent";
						y.reset();
					} else {
						b.innerHTML = "Error Sending";
					}
					setTimeout(function () {
						b.innerHTML = _
					}, 5000);
				}).catch(function (error) {
					console.error("Fetch error:", error);
					b.innerHTML = "Error Sending";
				});
			}
		}
	});

y.addEventListener("submit", function (t) {
	w.validate(),
		t.preventDefault();
});
*/