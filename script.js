// Funktion zum Wechseln der Karte nach HeadOffice und NewComplex

document.getElementById('HeadOffice').addEventListener('click', function () {
  document.getElementById("map").src =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13661.931716719719!2d75.6979107131164!3d31.124100445290047!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391a61de7df6d29b%3A0xb724668e27054965!2sYouth%20Football%20Club%20Rurka%20Kalan!5e0!3m2!1sen!2sin!4v1746247343257!5m2!1sen!2sin";
});

document.getElementById('NewComplex').addEventListener('click', function () {
  document.getElementById("map").src =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3424.3040938015754!2d75.6953666!3d31.1176043!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391a610056c7827d%3A0x85eb471f1d76e986!2sYFC%20Rurka%20Kalan%20-%20GACC!5e0!3m2!1sen!2sin!4v1714633310000!5m2!1sen!2sin";
});





/* ########################################################################################################################*/
/* ComboBox */
/* ########################################################################################################################*/

document.addEventListener('DOMContentLoaded', function () {
  const dropdown = document.querySelector('.material-select-custom');
  const selected = dropdown.querySelector('.selected');
  const optionsContainer = dropdown.querySelector('.options');
  const optionsList = dropdown.querySelectorAll('.options li');
  const selectedInput = dropdown.querySelector('.selected-input');
  const label = dropdown.querySelector('label');

  // Öffne/Schließe das Dropdown beim Klick auf den sichtbaren Bereich
  selected.addEventListener('click', function (e) {
    dropdown.classList.toggle('open');
    selectedInput.focus(); // Cursor sofort ins Eingabefeld setzen
  });

  // Option auswählen und im Input anzeigen
  optionsList.forEach(option => {
    option.addEventListener('click', function () {
      const text = this.textContent;
      selectedInput.value = text;
      dropdown.classList.remove('open');
      selected.classList.add('has-value');
    });
  });

  // Schließe das Dropdown, wenn außerhalb geklickt wird
  document.addEventListener('click', function (e) {
    if (!dropdown.contains(e.target)) {
      dropdown.classList.remove('open');
    }
  });
});



/* ########################################################################################################################*/
/* Asterisk */
/* ########################################################################################################################*/

const inputs = document.querySelectorAll('.material-input input');
const textarea = document.querySelectorAll('.material-textarea textarea');
let counter = 0;

inputs.forEach(input => {
  input.addEventListener('input', () => {
    const label = input.nextElementSibling;
    const asterisk = label.querySelector('.asterisk');
    console.log(input.value)
    if (input.validity.valid && input.value.length == 1 && asterisk !== null && asterisk.style.color !== "green") {
      asterisk.style.color = 'green';
      counter = counter + 1;
    } else if(input.value == "" && asterisk !== null) {
      asterisk.style.color = 'red';
      counter = counter - 1;
    }

    if(counter == 6){
      document.getElementById('buttonApplication').disabled = false;
    } else{
      document.getElementById('buttonApplication').disabled = true;
    }
  });
});

textarea.forEach(input => {
  input.addEventListener('input', () => {
    const label = input.nextElementSibling;
    const asterisk = label.querySelector('.asterisk');
    console.log(input.value)
    if (input.validity.valid && input.value.length == 1 && asterisk !== null && asterisk.style.color !== "green") {
      asterisk.style.color = 'green';
      counter = counter + 1;
    } else if(input.value == "" && asterisk !== null) {
      asterisk.style.color = 'red';
      counter = counter - 1;
    }

    if(counter == 6){
      document.getElementById('buttonApplication').disabled = false;
    } else{
      document.getElementById('buttonApplication').disabled = true;
    }
  });
});

/* ########################################################################################################################*/
/* Asterisk - CheckBoxen */
/* ########################################################################################################################*/

const checkBoxNewsletter = document.getElementById('checkBoxNewsletter')
const checkBoxDataPrivacyStatement = document.getElementById('checkBoxDataPrivacyStatement')
let counterCheckBoxen = 0;

checkBoxNewsletter.addEventListener("change", function() {
  if (checkBoxNewsletter.checked){
    counterCheckBoxen = counterCheckBoxen + 1;
  } else {
    counterCheckBoxen = counterCheckBoxen - 1;
  }

  if(counterCheckBoxen == 2){
    document.getElementById('buttonNewsletter').disabled = false;
  } else{
    document.getElementById('buttonNewsletter').disabled = true;
  }
})

checkBoxDataPrivacyStatement.addEventListener("change", function() {
  if (checkBoxDataPrivacyStatement.checked){
    counterCheckBoxen = counterCheckBoxen + 1;
  } else {
    counterCheckBoxen = counterCheckBoxen - 1;
  }

  if(counterCheckBoxen == 2){
    document.getElementById('buttonNewsletter').disabled = false;
  } else{
    document.getElementById('buttonNewsletter').disabled = true;
  }
})






document.querySelector('.selected-input').addEventListener('input', function () {
  const filter = this.value.toLowerCase();
  const options = document.querySelectorAll('.options li');

  options.forEach(option => {
    option.style.display = option.textContent.toLowerCase().includes(filter) ? 'block' : 'none';
  });
});








