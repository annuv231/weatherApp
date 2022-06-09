let weather = {
  "api-key": API_KEY,
  fetchWeather: function (city) {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${this["api-key"]}`
    )
      .then((response) => response.json())
      .then((data) => this.displayWeather(data));
  },
  displayWeather: function (data) {
    const { name } = data;
    const { description, icon } = data.weather[0];
    const { temp, humidity } = data.main;
    const { speed } = data.wind;
    console.log(name, description, icon, temp, humidity, speed);
    document.querySelector(".city").innerText = name;
    document.querySelector(".temprature").innerText = temp + "°C";
    document.querySelector(
      ".icon"
    ).src = `http://openweathermap.org/img/wn/${icon}.png`;
    document.querySelector(".description").innerText = description;
    document.querySelector(".wind").innerText =
      "Wind Speed: " + " " + speed + "Km/h";
    document.querySelector(".humidity").innerText =
      "Humidity:" + "  " + humidity;
  },
  search: function () {
    this.fetchWeather(document.querySelector("#searchBox").value);
    document.querySelector("#searchBox").value = "";
  },
};
const btn = document.querySelector(".search button");
btn.addEventListener("click", function () {
  weather.search();
});
document.querySelector("#searchBox").addEventListener("keypress", (event) => {
  if (event.keyCode === 13) {
    // key code of the keybord key
    ///event.preventDefault();
    weather.search();
    // your code to Run
  }
});
