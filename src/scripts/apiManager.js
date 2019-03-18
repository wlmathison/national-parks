const getParksList = () => {
    return fetch("http://localhost:9099/parks")
        .then(r => r.json())
        .then(parsedResults => {
            parsedResults.forEach(item => {
                postToDOM(item)
            });
        });
}