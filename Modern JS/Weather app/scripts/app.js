const cityform = document.querySelector('form');
const card = document.querySelector('.card');
const details = document.querySelector('.details');
const time = document.querySelector('img.time');
const icon = document.querySelector('.icon img');

const updateUI = (data) => {
    const {citydets, weather} = data;
    // update details
    details.innerHTML = `<h5 class="my-3">${citydets.EnglishName}</h5>
    <div class="my-3">${weather.WeatherText}</div>
    <div class="display-4 my-4">
        <span>${weather.Temperature.Metric.Value}</span>
        <span>&deg;C</span>
    </div>`

    if (card.classList.contains('d-none'))
        card.classList.remove('d-none');
    let timeSrc = null;
    timeSrc = weather.IsDayTime ? 'img/day.svg' : 'img/night.svg';
    time.setAttribute('src', timeSrc);
    let iconSrc = null;
    iconSrc = `img/icons/${weather.WeatherIcon}.svg`;
    icon.setAttribute('src',iconSrc);
}

const updatecity = async(city) => {
    const citydets = await getcity(city);
    const weather = await getweather(citydets.Key);
    return {
        citydets,
        weather
    };
};

cityform.addEventListener('submit',e => {
    e.preventDefault();
    const  city = cityform.city.value.trim();
    cityform.reset();
    updatecity(city)
    .then(data => updateUI(data))
    .catch(err =>console.log(err))
});