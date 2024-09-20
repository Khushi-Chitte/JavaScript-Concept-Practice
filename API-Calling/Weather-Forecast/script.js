const button = document.getElementById('search-btn');
const input = document.getElementById('city-name');

const cityName = document.getElementById('c-name');
const cityTime = document.getElementById('c-time');
const cityTemp = document.getElementById('c-temp');

async function getData(cityName){
    const promise = await fetch(`http://api.weatherapi.com/v1/current.json?key=b459c9fc7ccd4dceb8260939241509&q=${cityName}&aqi=yes`)
    return await promise.json()
}

button.addEventListener('click',async()=>{
    const value = input.value;
    const result = await getData(value);
    cityName.innerText = `${result.location.name}, ${result.location.region} - ${result.location.country}`
    cityTime.innerText = result.location.localtime;
    cityTemp.innerText = result.current.temp_c;
}) 