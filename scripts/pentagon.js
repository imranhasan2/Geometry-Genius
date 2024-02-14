function calculatePentagonArea(){

    const perimeter = getInputValueById('pentagon-perimeter');
    const apothem =getInputValueById('pentagon-apothem');
    const area = 0.5 * perimeter * apothem;
    setInnerTextById('pentagon-area',area)
}


function getInputValueById(inputFieldId){
const inputField = document.getElementById(inputFieldId);
const inputFieldIdText = inputField.value;
const value = parseFloat(inputFieldIdText);
return value
}

function setInnerTextById(elementId,area){
    const element = document.getElementById(elementId);
    element.innerText = area;

}