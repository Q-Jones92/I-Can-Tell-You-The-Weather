function weatherSearch(searchValue) {
  var APIKey = "76867f1d9d820e6fd45b355d5a55ddc8";


  var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + searchValue + "&appid=" + APIKey;


  $.ajax({
    url: queryURL,
    method: "GET"
  })

    .then(function (response) {

      $(".city").html("<h1>" + response.name + " Weather Details</h1>");
      $("#icon0").attr("src", "https://openweathermap.org/img/wn/" + response.weather[0].icon + "@2x.png");
      $(".wind").text(`Wind Speed: ${Math.round(response.wind.speed)}MPH`);
      $(".humidity").text("Humidity: " + response.main.humidity);
      $(".humidity").text(`Humidity: ${response.main.humidity}%`);




      $(".tempF").text(`Temperature: ${Math.round((response.main.temp - 273.15) * 1.8 + 32)}°F`);

    });
  $(".daysForecast1").html(`${moment().add(1, "d").format("MMMM DD, YYYY")}`);
  $(".daysForecast2").html(`${moment().add(2, "d").format("MMMM DD, YYYY")}`);
  $(".daysForecast3").html(`${moment().add(3, "d").format("MMMM DD, YYYY")}`);
  $(".daysForecast4").html(`${moment().add(4, "d").format("MMMM DD, YYYY")}`);
  $(".daysForecast5").html(`${moment().add(5, "d").format("MMMM DD, YYYY")}`);
  $(".daysForecast6").html(`${moment().add(6, "d").format("MMMM DD, YYYY")}`);

}

function forecast(lat, lon) {

  var APIKey = "76867f1d9d820e6fd45b355d5a55ddc8";




  var oneCallAPI = "https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon + "&exclude=currently,minutely,hourly,alerts&appid=" + APIKey;
  var fiveDayForecast = "http://api.openweathermap.org/data/2.5/uvi?lat=" + lat + "&lon=" + lon + "&appid=" + APIKey;
  console.log("This is the var fivDayForecast: ", oneCallAPI);

  $.ajax({

    url: oneCallAPI,
    method: "GET",
  }).then(function (response) {

    $("#icon1").attr(
      "src", "https://openweathermap.org/img/wn/" + response.daily[0].weather[0].icon + "@2x.png");
    $("#humidity1").text(`Humidity: ${response.daily[0].humidity}%`);
    $("#temp1").text(`Temperature (F): ${Math.round((response.daily[0].temp.day - 273.15) * 1.8 + 32)}°F`);

    $("#icon2").attr(
      "src", "https://openweathermap.org/img/wn/" + response.daily[1].weather[0].icon + "@2x.png");
    $("#humidity2").text(`Humidity: ${response.daily[1].humidity}%`);
    $("#temp2").text(`Temperature (F): ${Math.round((response.daily[1].temp.day - 273.15) * 1.8 + 32)}°F`);

    $("#icon3").attr(
      "src", "https://openweathermap.org/img/wn/" + response.daily[2].weather[0].icon + "@2x.png");
    $("#humidity3").text(`Humidity: ${response.daily[2].humidity}%`);
    $("#temp3").text(`Temperature (F): ${Math.round((response.daily[2].temp.day - 273.15) * 1.8 + 32)}°F`);

    $("#icon4").attr(
      "src", "https://openweathermap.org/img/wn/" + response.daily[3].weather[0].icon + "@2x.png");
    $("#humidity4").text(`Humidity: ${response.daily[3].humidity}%`);
    $("#temp4").text(`Temperature (F): ${Math.round((response.daily[3].temp.day - 273.15) * 1.8 + 32)}°F`
    );

    $("#icon5").attr(
      "src", "https://openweathermap.org/img/wn/" + response.daily[4].weather[0].icon + "@2x.png");
    $("#humidity5").text(`Humidity: ${response.daily[4].humidity}%`);
    $("#temp5").text(`Temperature (F): ${Math.round((response.daily[4].temp.day - 273.15) * 1.8 + 32)}°F`);

    forecast(searchValue);
  });
}

$('#searchbutton').on('click', function (event) {
  event.preventDefault();
var city = $('#searchinput') .val()
console.log(city)
  weatherSearch(city)
})