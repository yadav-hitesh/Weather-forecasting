try {
  const response = await fetch("https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Delhi&entry=Delhi", {
    "method": "GET",
    "headers": {
      "X-RapidAPI-Key": "8ca76a5a73msh37efff02acd68c6p1fb499jsn4975698c67cb",
      "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com"
    }
  });

  if (response.ok) {
    const result = await response.json();
    console.log(result);
  }
} catch (err) {
  console.error(err);
}