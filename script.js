const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '8ca76a5a73msh37efff02acd68c6p1fb499jsn4975698c67cb',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

const getweather = (city) => {
    cityName.innerHTML = city
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
	.then(response => response.json())
	.then((response) => {        
        console.log(response)
        cloud_pct.innerHTML = response.cloud_pct
        feels_like.innerHTML = response.feels_like
        humidity.innerHTML = response.humidity
        max_temp.innerHTML = response.max_temp
        min_temp.innerHTML = response.min_temp
        let x = response.sunrise
        let rise = new Date(x*1000);
        sunrise.innerHTML = rise
        let y = response.sunset
        let set = new Date(y*1000);
        sunset.innerHTML = set
        temp.innerHTML = response.temp
        temp1.innerHTML = response.temp
        wind_speed.innerHTML = response.wind_speed
        wind_speed1.innerHTML = response.wind_speed
        wind_degrees.innerHTML = response.wind_degrees 
    })
	.catch(err => console.error(err));
}

submit.addEventListener("click" , (e)=>{
    e.preventDefault()
    getweather(city.value)
})
var dt = new Date();
document.getElementById('date-time').innerHTML=dt;

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Delhi' , options)
	.then(response => response.json())
	.then((response) => {        
        console.log(response)
        cloud_pct2.innerHTML = response.cloud_pct
        feels_like2.innerHTML = response.feels_like
        humidity2.innerHTML = response.humidity
        max_temp2.innerHTML = response.max_temp
        min_temp2.innerHTML = response.min_temp
        let x = response.sunrise
        let set1 = new Date(x*1000);
        sunrise2.innerHTML = set1
        let y = response.sunset
        let rise1 = new Date(y*1000);
        sunset2.innerHTML = rise1
        temp2.innerHTML = response.temp
        temp2.innerHTML = response.temp
        wind_speed2.innerHTML = response.wind_speed
        wind_speed2.innerHTML = response.wind_speed
        wind_degrees2.innerHTML = response.wind_degrees 
    })
	.catch(err => console.error(err));

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Kolkata' , options)
	.then(response => response.json())
	.then((response) => {        
        console.log(response)
        cloud_pct3.innerHTML = response.cloud_pct
        feels_like3.innerHTML = response.feels_like
        humidity3.innerHTML = response.humidity
        max_temp3.innerHTML = response.max_temp
        min_temp3.innerHTML = response.min_temp
        let x = response.sunrise
        let set2 = new Date(x*1000);
        sunrise3.innerHTML = set2
        let y = response.sunset
        let rise2 = new Date(y*1000);
        sunset3.innerHTML = rise2
        temp3.innerHTML = response.temp
        temp3.innerHTML = response.temp
        wind_speed3.innerHTML = response.wind_speed
        wind_speed3.innerHTML = response.wind_speed
        wind_degrees3.innerHTML = response.wind_degrees 
    })
	.catch(err => console.error(err));

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Chennai' , options)
	.then(response => response.json())
	.then((response) => {        
        console.log(response)
        cloud_pct4.innerHTML = response.cloud_pct
        feels_like4.innerHTML = response.feels_like
        humidity4.innerHTML = response.humidity
        max_temp4.innerHTML = response.max_temp
        min_temp4.innerHTML = response.min_temp
        let x = response.sunrise
        let set3 = new Date(x*1000);
        sunrise4.innerHTML = set3
        let y = response.sunset
        let rise3 = new Date(y*1000);
        sunset4.innerHTML = rise3
        temp4.innerHTML = response.temp
        temp4.innerHTML = response.temp
        wind_speed4.innerHTML = response.wind_speed
        wind_speed4.innerHTML = response.wind_speed
        wind_degrees4.innerHTML = response.wind_degrees 
    })
	.catch(err => console.error(err));

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Mumbai' , options)
	.then(response => response.json())
	.then((response) => {        
        console.log(response)
        cloud_pct5.innerHTML = response.cloud_pct
        feels_like5.innerHTML = response.feels_like
        humidity5.innerHTML = response.humidity
        max_temp5.innerHTML = response.max_temp
        min_temp5.innerHTML = response.min_temp
        let x = response.sunrise
        let set4 = new Date(x*1000);
        sunrise5.innerHTML = set4
        let y = response.sunset
        let rise4 = new Date(y*1000);
        sunset5.innerHTML = rise4
        temp5.innerHTML = response.temp
        temp5.innerHTML = response.temp
        wind_speed5.innerHTML = response.wind_speed
        wind_speed5.innerHTML = response.wind_speed
        wind_degrees5.innerHTML = response.wind_degrees
    })
	.catch(err => console.error(err));
getweather("Delhi")