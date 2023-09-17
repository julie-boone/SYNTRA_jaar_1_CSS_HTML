let result = document.getElementById("result");

//GEOLOCATION

function showPosition(position) {
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;

  result.innerHTML = latitude + " - " + longitude; //prima om hier innerHTML te gebruiken, want dit vraagt geen user input op
}

function getLocation() {
  if (navigator.geolocation) {
    //checken of geolocation API aanstaat en dus mag gebruikt worden; genereert ofwel een object ofwel null
    navigator.geolocation.getCurrentPosition(showPosition); //getCurrentPosition vraagt locatie op, watchPosition blijft locatie opvragen
    //showPosition is de functie die moet worden uitgevoerd als getCurrentPosition werkt
  } 
  else 
  {
    result.innerText = "Probleem met geolocatie ...";
  }
}


//HISTORY - houdt je brwosergeschiedenis bij

function goHistory()
{
    window.history.go(-1); //-1 is equivalent aan één keer op de terugknop klikken
}

const $historyButton = document.getElementById("history");
$historyButton.addEventListener("click", goHistory);


//URL

function readUrl()
{
    let currentUrl = new URL(document.URL); //verwacht een string die hem vertelt welke url hij moet lezen
    
    console.log(currentUrl);
}

const $btnUrl = document.getElementById("url");

$btnUrl.addEventListener("click", readUrl);


//FORM VALIDATION - in html zelf kan je ook 'required' aangeven, maar daarmee kan je veel minder doen
//en soms volstaat validatie via HTML niet, bv als je je submit niet via input:submit maar via button doet

function validateForm()
{
    let $iptTest = document.getElementById("test");
    if(!$iptTest.checkValidity()) //standaard functie die werkt op alle inputvelden
    {
        result.innerText = "Input test: " + $iptTest.validationMessage; //geeft foutmelding in de taal waarin browser is ingesteld
        //reageert enkel op checks die in html zijn aangegeven bij de knop, bv required of range 
    }
    else
    {
        result.innerText = "";
    }
}

const $btnForm = document.getElementById("formButton");
$btnForm.addEventListener("click", validateForm);

