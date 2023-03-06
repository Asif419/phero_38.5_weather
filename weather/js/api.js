// Do not show API 
// b2d0c684df242b7ec01c41286d6d0bb0

const API_KEY = 'b2d0c684df242b7ec01c41286d6d0bb0';

const loadWeatherData = async (city = 'Sydney') => {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
  const res = await fetch(url);
  const data = await res.json();
  showData(data);
}

const showData = data => {
  const temperature = document.getElementById('temperature');
  temperature.innerText = data?.main.temp;
  document.getElementById('condition').innerText = data.weather ? data.weather[0].main : 'No data available';
  document.getElementById('city-name').value = '';
}

document.getElementById('btn-search').addEventListener('click', function (event) {
  const city = document.getElementById('city-name');
  const setCity = document.getElementById('city');
  if (city.value == '') {
    city.value = 'Sydney';
    setCity.innerText = 'Sydney';
  }
  else {
    setCity.innerHTML = city.value;
  }
  loadWeatherData(city.value);
})

loadWeatherData('Sydney');
