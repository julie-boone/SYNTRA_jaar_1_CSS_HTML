const $form = document.getElementById('testform');

const range = document.getElementById("range");
const rangeVal = document.getElementById("rangeVal");

$form.addEventListener("submit", formSubmit);

range.addEventListener("input", changeRange); 
//kan ook met eventlistener change, die treedt al in werking terwijl de verandering plaatsvindt
//verschil ga je hier niet echt merken, maar als er meer gaande is, is input iets minder energievretend en lichter dan change

function changeRange() {
    rangeVal.innerText = range.value;
}

function formSubmit(event) {
    event.preventDefault();
    console.info('Form submitted');
    
}