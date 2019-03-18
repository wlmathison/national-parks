const getWeatherfromDarkSky = (latitude, longitude) => {
    return fetch(`https://api.darksky.net/forecast/c4fbd34a0d27a12a77323b9d4adfc6d0/${latitude},${longitude}`)
        .then(r => r.json())
        .then(parsedResults => {
            getWeather(parsedResults)
        })
}
const getParksList = () => {
    return fetch("http://localhost:9099/parks")
        .then(r => r.json())
        .then(parsedResults => {
            parsedResults.forEach(item => {
                postToDOM(item)
            });
        });
}
