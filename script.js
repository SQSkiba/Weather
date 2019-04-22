$(document).ready(function(){
    $("#showResults").on("click",function(){
        var city = $("#enterCity").val();
        $.ajax({
            url: "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&APPID=ecc81b06bc1a0efe00898593102e7981",
            dataType: "json",
            method: "GET",
            success: function (answer){
                console.log(answer);
                myCallback(answer);
            }
        });

    });
});

function myCallback(json) {
    var city = $("#enterCity").val();
    console.log(json);
    console.log(city);
    $("#showWeather").empty();
    $("#cityName").empty();
    $("#cityName").append("Weather in " + city + "!");
//https://openweathermap.org/current#one

    temp = json.main.temp;
    temp = temp*(9/5) - 459.67;
    temp = Math.round(temp);
    humidity =  json.main.humidity;
    tempMin = json.main.temp_min;
    tempMin=tempMin*(9/5) - 459.67;
    tempMin= Math.round(tempMin);
    tempMax = json.main.temp_max;
    tempMax=tempMax*(9/5) - 459.67;
    tempMax = Math.round(tempMax);
    windSpeed = json.wind.speed;
    clouds = json.clouds.all;

    var output = "<br><table id='myTable' >";
    output += "<tr><td> Temperature: " + temp + " °F </td></tr>" ;
    output += "<tr><td> Humidity: " + humidity + "% </td></tr>";
    output += "<tr><td> Min Temperature: " + tempMin + " °F</td></tr>";
    output += "<tr><td> Max Temperature: " + tempMax + " °F</td></tr>";
    output += "<tr><td> Wind: " + windSpeed + " (m/s) </td></tr>";
    output += "<tr><td> Clouds: " + clouds + "% </td></tr>";
    output += "</table>";

    $("#showWeather").append(output);
}