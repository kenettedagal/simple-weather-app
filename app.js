const submitBtn = document.querySelector('#submit');
const input = document.querySelector('input');
const city = document.querySelector('#location');
const temp = document.querySelector('#temperature');
const changeTempBtn = document.createElement('button');

input.value = 'Manila';
changeTempBtn.textContent = 'Convert to Celcius';

let celciusRes, kelvinRes;

changeTempBtn.addEventListener('click', () => {
    if (changeTempBtn.textContent === 'Convert to Celcius') {
        changeTempBtn.textContent = 'Convert to Kelvin';
        temp.textContent = 'Temperature ' + celciusRes.main.temp + ' C';
    } else {
        changeTempBtn.textContent = 'Convert to Celcius';
        temp.textContent = 'Temperature ' + kelvinRes.main.temp + ' K';
    }
});



submitBtn.addEventListener('click', () => {
    changeTempBtn.textContent = 'Convert to Celcius';
    const location = input.value;
    getData(location);
    document.body.append(changeTempBtn);
});

const apiKey = '376ff0455bfc121f469ebd31c435463d';

async function getData(location) {
    const celciusUrl = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`);
    const kelvinUrl = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`);

    celciusRes = await celciusUrl.json();
    kelvinRes = await kelvinUrl.json();

    city.textContent = 'City location: ' + location;
    temp.textContent = 'Temperature ' + kelvinRes.main.temp + ' K';
    console.log(kelvinRes);
}