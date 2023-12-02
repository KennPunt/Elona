document.addEventListener('DOMContentLoaded', function () {
    VanillaTilt.init(document.querySelector("#tiltkaartje"), {
        max: 25,
        speed: 400
    });



function disableAndUpdateForm(formId) {
    var form = document.querySelector(formId);
    var button = form.querySelector('button');
    button.innerHTML = "Verstuurd!";

    var elements = form.querySelectorAll('input, select, textarea');
    for (var i = 0; i < elements.length; i++) {
        elements[i].disabled = true;
    }
}


function handleFormSubmit(event, formId) {
    var form = document.querySelector(formId);
    var button = form.querySelector('button');

    if (button.innerHTML === "Verstuurd!") {
        alert("Je hebt het reeds verstuurd.");
        event.preventDefault();
        return false;
    }

    // Replace 'this.submit();' with 'form.submit();'
    form.submit();
    disableAndUpdateForm(formId);
    return false;
}

document.querySelector('#rsvp').addEventListener("submit", function (event) {
    handleFormSubmit(event, '#rsvp');
});

document.querySelector('#gastenboekform').addEventListener("submit", function (event) {
    handleFormSubmit(event, '#gastenboekform');
});


/*
document.querySelector('#rsvp').submit(function() {
    this.submit();
    disableFields(); // your own function
    return false;
});
*/

// Function to get query parameters
function getQueryParam(param) {
    var urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}
if (getQueryParam('invitation') === 'babyborrel') {
    history.pushState({}, '', '/invitation');
    // Code to display the invitation

    // Select all .invitation elements and make them visible
    var invitationElements = document.querySelectorAll('.invitation');
    invitationElements.forEach(function (element) {
        element.style.display = 'block';
    });
}

// Simulate a click on the link to #babyborrel after a delay
var linkToBabyborrel = document.getElementById('babyborrellink');
if (linkToBabyborrel) {
    setTimeout(function() {
        linkToBabyborrel.click();
    }, 3000);
}

});