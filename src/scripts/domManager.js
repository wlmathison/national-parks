const displayContainer = document.getElementById("display-container");
let weatherDisplayHTML = "";
let displayHTML = "";

const getWeather = (weather) => {
    const currently = weather.currently.summary;
    const today = weather.hourly.summary;
    const week = weather.daily.summary;

    weatherDisplayHTML = `
   <p>Weather:</p>
   <ul>
     <li>Currently: ${currently}</li>
     <li>Today: ${today}</li>
     <li>Week: ${week}</li>
   </ul>`;

    return weatherDisplayHTML;
}

const postToDOM = (park) => {
    let parkName = park.name;
    let stateName = park.state;
    let visitedStatus = park.visited;

    let newParkArticle = document.createElement("article");
    newParkArticle.classList = visitedStatus;

    let displayHTML = `
    <h3>${parkName}</h3>
    <p>${stateName}</p>`;
    
    getWeatherfromDarkSky(park.latitude, park.longitude)
        .then(() => {
            newParkArticle.innerHTML = displayHTML + weatherDisplayHTML;
        })

    displayContainer.appendChild(newParkArticle)
}