// array met foutmeldingen
let foutmeldingen = [];

paymentAlert.style.display = 'none'
completionAlert.style.display = 'none'
errorAlert.style.display = 'none'

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
  let voorwaarden = document.getElementById("inputVoorwaarden").checked;
  let betalingsMethode = document.querySelector(
    "input[name=radioBetaling]:checked"
  ).value;

  // controleren of inputs leeg zijn
  checkEmptyField(voornaam, "het veld voornaam is vereist.");
  checkEmptyField(naam, "het veld naam is vereist.");
  checkGebruikersnaam(gebruikersNaam);
  checkEmptyField(email, "het veld email is vereist.");
  validateEmail(email);
  if (!validateEmail(email)) {
    if (email != "") foutmeldingen.push("E-mailadres is niet correct");
  }
  checkWachtwoord(wachtwoord, wachtwoordControle);

  checkEmptyField(adres, "het veld adres is vereist.");

  checkEmptyField(land, "het veld land is vereist.");

  checkEmptyField(provincie, "het veld provincie is vereist.");

  checkPostcode(postcode);

  checkEmptyField(nieuwbrief, "het veld nieuwbrief is vereist.");

  checkVoorwaarden(voorwaarden);

  checkEmptyField(betalingsMethode, "het veld betalingOptie is vereist.");
  checkBetalingsMethode(betalingsMethode);

  if (foutmeldingen.length != 0) {
    paymentAlert.style.display = 'none'
    completionAlert.style.display = 'none'
    errorAlert.style.display = 'block'
  }

  if(foutmeldingen.length == 0){
    paymentAlert.style.display = 'block'
    completionAlert.style.display = 'block'
    errorAlert.style.display = 'none'
  }

  //
  if (foutmeldingen.length > 0) {
    foutmeldingen.forEach((element) => {
      pError.innerText += element + "\n";
    });

    foutmeldingen = [];
  }
}

// controleert of het veld leeg is een geeft een foutmelding mee.
function checkEmptyField(veld, melding) {
  if (veld == "") {
    foutmeldingen.push(melding);
  }
}

//controleert of het email adres is ingevuld en of deze het juiste formaat heeft
function validateEmail(emailadres) {
  //https://www.simplilearn.com/tutorials/javascript-tutorial/email-validation-in-javascript
  let regex =
    /^[a-zA-Z0-9]+([._-][a-zA-Z0-9]+)*@[a-zA-Z0-9]+([.-][a-zA-Z0-9]+)*\.[a-zA-Z]{2,}$/;

  // controle email op format
  if (emailadres.match(regex)) {
    return true;
  } else false;
}

// functie controleert of hetwachtwoord langer of gelijk is aan 8 karakters en of deze overeen komen met de controle
function checkWachtwoord(wachtwoord, wachtwoordControle) {
  checkEmptyField(wachtwoord, "het veld wachtwoord is vereist.");
  checkEmptyField(
    wachtwoordControle,
    "het veld herhaal wachtwoord is vereist."
  );
  if (wachtwoord < 8 && wachtwoord.length != 0) {
    foutmeldingen.push("Wachtwoord moet langer zijn als 7 karakters.");
  }
  if (wachtwoord != wachtwoordControle) {
    foutmeldingen.push("Je wachtwoorden komen niet overeen.");
  }
}

// functie die de format van de gebruikersnaam controleert en of deze is ingevuld
function checkGebruikersnaam(gebruiker) {
  checkEmptyField(gebruiker, "het veld gebruikersnaam is vereist.");
  let regex = /^(?=[a-zA-Z0-9_])(?![-.])([a-zA-Z0-9_.]){1,}$/;
  if (gebruiker.length != 0) {
    if (!gebruiker.match(regex)) {
      foutmeldingen.push("De gebruikersnaam heeft een verkeerde format.");
    }
  }
}

//functie die controleert of de postcode tussen de 1000 en de 9999 zit
function checkPostcode(code) {
  checkEmptyField(code, "het veld postcode is vereist.");
  if (code.length != 0) {
    if (code < 1000 || code >> 9999) {
      foutmeldingen.push("De postcode moet tussen de 1000 en 9999 zijn");
    }
  }
}

//functie die controleert of de gebruiker akkoord is met de voorwaarden
function checkVoorwaarden(voorwaarden) {
  if (!voorwaarden) {
    foutmeldingen.push("Je moet de algmene voorwaarden accepteren.");
  }
}

//functie zet in alert over de betaling de juiste betalingswijze
//https://stackoverflow.com/questions/9561625/checking-value-of-radio-button-group-via-jquery
function checkBetalingsMethode(methode) {
  pBetaling.innerText = `Je betalingswijze is ${methode}`;
}
