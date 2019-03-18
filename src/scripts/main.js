const displayContainer = document.getElementById("display-container");

const postToDOM = (park) => {
    const parkName = park.name;
    const stateName = park.state;
    const visitedStatus = park.visited;
    
    let displayHTML = `<article>
    <h3>${parkName}</h3>
    <p>${stateName}</p>
    </article>`;
    
    let newParkDiv = document.createElement("div");
    newParkDiv.classList = visitedStatus;
    newParkDiv.innerHTML = displayHTML;
    displayContainer.appendChild(newParkDiv)
}


