/*=====================================================
 Version: 1.0.0 Gold
 Author: Fahd Alatfi
 Author URL : https://github.com/fahdalatfi
 APIs: None
 License: MIT Free License , commercial use is prohibited
 ====================================================== */


// Consts for length calculator
const btnLength = document.getElementById('btnLength');
const userInputLength = document.getElementById('userInputLength');
const unitsLength = document.getElementById('unitsLength');
const unitsTargetedLength = document.getElementById('unitsTargetedLength');
const resultsLength = document.getElementById('resultsLength');
const containerLength = document.getElementById('containerLength');
const btnLengthBack = document.getElementById('btnLengthBack');

// Consts for initial page
const initialOptionsBtn = document.getElementById('initialOptionsBtn');
const initialOptions = document.getElementById('initialOptions');
const optionsContainer = document.getElementById('optionsContainer');


// Consts for weight page
const containerWeight = document.getElementById('containerWeight');
const btnWeight = document.getElementById('btnWeight');
const userInputWeight = document.getElementById('userInputWeight');
const unitsWeight = document.getElementById('unitsWeight');
const unitsTargetedWeight = document.getElementById('unitsTargetedWeight');
const resultsWeight = document.getElementById('resultsWeight');
const btnWeightBack = document.getElementById('btnWeightBack');

// VAR REGEX validator  
let regexValidator = /^[0-9]+$/;

// eventlistner initialOptions button
initialOptionsBtn.addEventListener('click' , e => {
    e.preventDefault;
    let initialOptionsValue = initialOptions.value;

    if(initialOptionsValue === 'length'){
        containerLength.style.display = 'flex';
        optionsContainer.style.display = 'none';
    } else if(initialOptionsValue === 'weight'){
        containerWeight.style.display = 'flex';
        optionsContainer.style.display = 'none';
    }
})


btnWeight.addEventListener('click', e => {

    // default page reload prevention 
    e.preventDefault;
    let userInputWeightValue = userInputWeight.value;
    let unitsWeightValue = unitsWeight.value;
    let unitsTargetedWeightValue = unitsTargetedWeight.value;

    // REGEX Validation
    if(!userInputWeightValue.match(regexValidator)){
        alert('Please enter valid quantity. chars are not allowed!')
    };

    // Statment from mg to all units
    if(unitsWeightValue === 'mg' && unitsTargetedWeightValue === 'g'){
        userInputWeightValue *= 0.001;
    } else if (unitsWeightValue === 'mg' && unitsTargetedWeightValue === 'kg'){
        userInputWeightValue *= 0.000001;
    } else if (unitsWeightValue === 'mg' && unitsTargetedWeightValue === 'tonne'){
        userInputWeightValue *= 0.000000001;
    };

    // Statment from g to all units
    if(unitsWeightValue === 'g' && unitsTargetedWeightValue === 'mg'){
        userInputWeightValue *= 1000;
    } else if (unitsWeightValue === 'g' && unitsTargetedWeightValue === 'kg'){
        userInputWeightValue *= 0.001;
    } else if (unitsWeightValue === 'g' && unitsTargetedWeightValue === 'tonne'){
        userInputWeightValue *= 0.000001;
    };

    // Statment from kg to all units
    if(unitsWeightValue === 'kg' && unitsTargetedWeightValue === 'mg'){
        userInputWeightValue *= 1000000;
    } else if (unitsWeightValue === 'kg' && unitsTargetedWeightValue === 'g'){
        userInputWeightValue *= 1000;
    } else if (unitsWeightValue === 'kg' && unitsTargetedWeightValue === 'tonne'){
        userInputWeightValue *= 0.001;
    };

    // Statment from tonne to all units
    if(unitsWeightValue === 'tonne' && unitsTargetedWeightValue === 'mg'){
        userInputWeightValue *= 1000000000;
    } else if (unitsWeightValue === 'tonne' && unitsTargetedWeightValue === 'g'){
        userInputWeightValue *= 1000000;
    } else if (unitsWeightValue === 'tonne' && unitsTargetedWeightValue === 'kg'){
        userInputWeightValue *= 1000;
    };

    // console output
    console.log(userInputWeightValue)

    // DOM manipulation using literal template
    resultsWeight.innerHTML = `<h3>Results:</h3>${userInputWeight.value} ${unitsWeightValue} = ${userInputWeightValue} ${unitsTargetedWeightValue}`
})


// eventlistner submit button for length converter
btnLength.addEventListener('click', e => {

    // default page reload prevention 
    e.preventDefault;
    let userInputLengthValue = userInputLength.value;
    let unitsLengthValue = unitsLength.value;
    let unitsTargetedLengthValue = unitsTargetedLength.value;


    // REGEX Validation
    if(!userInputLengthValue.match(regexValidator)){
        alert('Please enter valid quantity. chars are not allowed!')
    };

    // Statment from mm to all units
    if(unitsLengthValue === 'mm' && unitsTargetedLengthValue === 'cm'){
        userInputLengthValue *= 0.1;
    } else if (unitsLengthValue === 'mm' && unitsTargetedLengthValue === 'dm'){
        userInputLengthValue *= 0.01;
    } else if (unitsLengthValue === 'mm' && unitsTargetedLengthValue === 'm'){
        userInputLengthValue *= 0.001;
    };

    // Statment from cm to all units
    if(unitsLengthValue === 'cm' && unitsTargetedLengthValue === 'mm'){
        userInputLengthValue *= 10;
    } else if (unitsLengthValue === 'cm' && unitsTargetedLengthValue === 'dm'){
        userInputLengthValue *= 0.1;
    } else if (unitsLengthValue === 'cm' && unitsTargetedLengthValue === 'm'){
        userInputLengthValue *= 0.01;
    };

    // Statment from dm to all units
    if(unitsLengthValue === 'dm' && unitsTargetedLengthValue === 'mm'){
        userInputLengthValue *= 100;
    } else if (unitsLengthValue === 'dm' && unitsTargetedLengthValue === 'cm'){
        userInputLengthValue *= 10;
    } else if (unitsLengthValue === 'dm' && unitsTargetedLengthValue === 'm'){
        userInputLengthValue *= 0.1;
    };

    // Statment from m to all units
    if(unitsLengthValue === 'm' && unitsTargetedLengthValue === 'mm'){
        userInputLengthValue *= 1000;
    } else if (unitsLengthValue === 'm' && unitsTargetedLengthValue === 'cm'){
        userInputLengthValue *= 100;
    } else if (unitsLengthValue === 'm' && unitsTargetedLengthValue === 'dm'){
        userInputLengthValue *= 10;
    };


    // console output
    console.log(userInputLengthValue)

    // DOM manipulation using literal template
    resultsLength.innerHTML = `<h3>Results:</h3>${userInputLength.value} ${unitsLengthValue} = ${userInputLengthValue} ${unitsTargetedLengthValue}`
})



btnLengthBack.addEventListener('click', e => {
    e.preventDefault;
    containerLength.style.display = 'none';
    optionsContainer.style.display = 'flex';
})


btnWeightBack.addEventListener('click', e => {
    e.preventDefault;
    containerWeight.style.display = 'none';
    optionsContainer.style.display = 'flex';
})
