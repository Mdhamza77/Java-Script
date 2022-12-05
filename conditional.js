/*
const weather = document.querySelector('select')
const p = document.querySelector('p')
weather.addEventListener('change', setweather)
function setweather() {
    const opt = weather.value;
    if(opt === 'Sunny'){
        p.textContent = "Live in the sunshine, swim the sea, drink the wild air.To be happy, you must be your own sunshine."
    }
    else if(opt === 'Cloudy'){
        p.textContent = " The rainy and foggy weather is very peaceful and has a calming aesthetic"
    }
    else if(opt === 'Rainy'){
        p.textContent = "Rain is grace; rain is the sky descending to the earth; without rain, there would be no life. "
    }
    else {
        p.textContent('None')
    } 
}*/

/*
function setweather() {
    const choice = weather.value;
    switch (choice) {
        case 'Sunny':
            p.textContent = "Live in the sunshine, swim the sea, drink the wild air.To be happy, you must be your own sunshine."
            break;
        case 'Cloudy':
            p.textContent = " The rainy and foggy weather is very peaceful and has a calming aesthetic"
            break;
        case 'Rainy':
            p.textContent = "Rain is grace; rain is the sky descending to the earth; without rain, there would be no life. "
            break;


    }
}

*/

const option = document.querySelector('select')
const html = document.querySelector('html')

function update(bgcolor,textColor){
   html.style.backgroundColor = bgcolor
   html.style.color = textColor
}
option.addEventListener('change', () => option.value === 'black'
 ?update('black','white') 
 :update('white','black')
 ); 