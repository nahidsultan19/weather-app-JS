const API_KEY = `f4e0dda2c6d5c1c5aae75f426f7abf43`;

const searchTemperature = () => {
    const city = document.getElementById('city-name').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

    fetch(url)
        .then(res => res.json())
        .then(data => dispplayTemperature(data))

    city.value = '';
}

const setInnerText = (id, text) => {
    document.getElementById(id).innerText = text;
}

const dispplayTemperature = temperature => {
    setInnerText('city', temperature.name);
    setInnerText('temperature', temperature.main.temp);
    setInnerText('conditions', temperature.weather[0].main)

    // set weather img 
    const url = `http://openweathermap.org/img/wn/${temperature.weather[0].icon}@2x.png`;
    const imgIcon = document.getElementById('weather-icon');
    imgIcon.setAttribute('src', url);
}