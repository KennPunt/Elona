document.addEventListener('DOMContentLoaded', function () {
    VanillaTilt.init(document.querySelector("#tiltkaartje"), {
        max: 25,
        speed: 400
    });



function disableAndUpdateForm(formId) {
    var form = document.querySelector(formId);
    var button = form.querySelector('button');
    button.innerHTML = "Verstuurd!";

    //var elements = form.querySelectorAll('input, select, textarea');
    //for (var i = 0; i < elements.length; i++) {
    //    elements[i].disabled = true;
    //}
}


function handleFormSubmit(event, formId) {
    var form = document.querySelector(formId);
    var button = form.querySelector('button');

    if (button.innerHTML === "Verstuurd!") {
        alert("Je hebt het reeds verstuurd.");
        event.preventDefault();
        return false;
    }

    if (typeof form.reportValidity === "function") {
        if (!form.reportValidity()) {
            event.preventDefault();
            return false;
        }
    }

     // Custom email validation
     var emailInputs = form.querySelectorAll('input[type="email"]');
     for (var i = 0; i < emailInputs.length; i++) {
         if (!validateEmail(emailInputs[i].value)) {
             alert("Ongeldig e-mailadres: " + emailInputs[i].value);
             event.preventDefault();
             return false;
         }
     }


    event.preventDefault();
    form.submit();
    disableAndUpdateForm(formId);
    return false;
}

// Email validation function
function validateEmail(email) {
    var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
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
    }, 2000);
}



  var sepaqr = new sepaQR({
    charset: sepaQR.Charset.UTF_8,
    version: '001',
    benefName: 'Elona Vernaillen',
    benefBIC: 'GEBABEBB',
    benefAccNr: 'BE82034376244268',
    /*amountEuro: 1,*/
    remittanceInf: 'Luierloterij! Bedankt dat je meedoet. De prijs? Eeuwige dankbaarheid.',
  });
  //console.log(sepaqr.valid());

  var code = sepaqr.makeCodeInto("qrcode");
  /*
  if (!!code) {
    var elem = document.getElementById("qrcodetext");
    elem.innerHTML = sepaqr.toQRText() + "\n\n-- Stats\nlength (chars):" + sepaqr.toQRText().length + "\nModule Count (max. 69!): " + sepaqr.qrcode._oQRCode.moduleCount;
  }*/


  var generateQrButton = document.getElementById('generateQRButton');
    if (generateQrButton) {
        generateQrButton.addEventListener('click', function() {
            // Retrieve input values
            var amount = parseFloat(document.getElementById('pamper-amount').value);
            var message = document.getElementById('pamper-message').value;
            if(!amount) {
                amount = 1;
            }
            // Clear the old QR code
            var qrContainer = document.getElementById('qrcode');
            qrContainer.innerHTML = '';
        
            // Generate a new QR code
            var sepaqr = new sepaQR({
                charset: sepaQR.Charset.UTF_8,
                version: '001',
                benefName: 'Elona Vernaillen',
                benefBIC: 'GEBABEBB',
                benefAccNr: 'BE82034376244268',
                amountEuro: amount,
                remittanceInf: message,
            });
        
            if (sepaqr.valid()) {
                sepaqr.makeCodeInto('qrcode');
            } else {
                console.error('Invalid SEPA QR Code parameters');
            }
        });
    } else {
        console.error('Button with ID "generateQrButton" not found.');
    }
 


});