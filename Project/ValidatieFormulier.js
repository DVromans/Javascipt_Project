// array met foutmeldingen
let foutmeldingen = [];

// functie met de volledige validatie van het formulier
function validateForm() {
  // Alerts
  let errorAlert = document.getElementById("errorAlert");
  let completionAlert = document.getElementById("completionAlert");
  let paymentAlert = document.getElementById("paymentAlert");

  // p Alert definieren
  let pError = document.getElementById("pError");
  let pOke = document.getElementById("pOke");
  let pBetaling = document.getElementById("pBetaling");

  // Alerts leegmaken
  pError.innerText = "";
  pOke.innerText = "";
  pBetaling.innerText = "";

  //inputs
  let voornaam = document.getElementById("inputVoornaam").value;
  let naam = document.getElementById("inputNaam").value;
  let gebruikersNaam = document.getElementById("inputGebruikersNaam").value;
  let email = document.getElementById("inputEmail").value;
  let wachtwoord = document.getElementById("inputWachtwoord").value;
  let wachtwoordControle = document.getElementById(
    "inputHerhaalWachtwoord"
  ).value;
  let adres = document.getElementById("inputAdres").value;
  let land = document.getElementById("inputLand").value;
  let provincie = document.getElementById("inputProvincie").value;
  let postcode = document.getElementById("inputPostcode").value;
  let nieuwbrief = document.getElementById("inputNieuwsbrief").value;
  let voorwaarden = document.getElementById("inputVoorwaarden").value;
  let betalingOptie = document.querySelector(
    'input[name="radioBetaling"]:checked'
  ).value;

  // controleren of inputs leeg zijn
  checkEmptyField(voornaam, "het veld voornaam is vereist.");
  checkEmptyField(naam, "het veld naam is vereist.");
  checkEmptyField(gebruikersNaam, "het veld gebruikersnaam is vereist.");
  checkEmptyField(email, "het veld email is vereist.");
  validateEmail(email);
  if (!validateEmail(email)) {
    if(email != "")
    foutmeldingen.push("E-mailadres is niet correct");
  }

  checkEmptyField(wachtwoord, "het veld wachtwoord is vereist.");
  checkEmptyField(
    wachtwoordControle,
    "het veld herhaal wachtwoord is vereist."
  );

  checkEmptyField(adres, "het veld adres is vereist.");
  checkEmptyField(land, "het veld land is vereist.");
  checkEmptyField(provincie, "het veld provincie is vereist.");
  checkEmptyField(postcode, "het veld postcode is vereist.");
  checkEmptyField(nieuwbrief, "het veld nieuwbrief is vereist.");
  checkEmptyField(voorwaarden, "het veld voorwaarden is vereist.");
  checkEmptyField(betalingOptie, "het veld betalingOptie is vereist.");
  //
  if (foutmeldingen.length > 0) {
    foutmeldingen.forEach((element) => {
      pError.innerText += element + "\n";
    });

    foutmeldingen = [];
  }
}
function checkEmptyField(veld, melding) {
  if (veld == "") {
    foutmeldingen.push(melding);
  }
}

function validateEmail(emailadres) {
  //https://www.simplilearn.com/tutorials/javascript-tutorial/email-validation-in-javascript
  let valEmail =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  // controle email op format
  if (emailadres.match(valEmail)) {
    return true;
  } else false;
}
