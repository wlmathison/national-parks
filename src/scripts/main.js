const displayContainer = document.getElementById("display-container");

const postToDOM = (park) => {
    const parkName = park.name;
    const stateName = park.state;
    const visitedStatus = park.visited;
    
    let displayHTML = `<h3>${parkName}</h3>
    <p>${stateName}</p>`;
    
    let newParkArticle = document.createElement("article");
    newParkArticle.classList = visitedStatus;
    newParkArticle.innerHTML = displayHTML;
    displayContainer.appendChild(newParkArticle)
}

getParksList()


