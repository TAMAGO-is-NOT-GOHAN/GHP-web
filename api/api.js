const API_ENDPOINT = "https://httpbin.org"

function getEvent(eventID) {
    fetch(API_ENDPOINT + "/v1/event?event_id=" + eventID)
        .then(res => res.json())
        .catch(error => console.error('Error:', error));
}

function createEvent(eventName, eventDescription, eventDate, eventMaxPeople) {
    let data = { event_name: eventName, description: eventDescription, date: eventDate, max_people: eventMaxPeople };

    fetch(API_ENDPOINT + "/v1/event", {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(res => res.json())
        .catch(error => console.error('Error:', error));
}

function changeEvent(eventName, eventDescription, eventDate, eventMaxPeople) {
    let data = { event_name: eventName, description: eventDescription, date: eventDate, max_people: eventMaxPeople };

    fetch(API_ENDPOINT + "/v1/event", {
        method: 'PUT',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(res => res.json())
        .catch(error => console.error('Error:', error));
}

function joinEvent(eventID) {
    let data = { event_id: eventID };

    fetch(API_ENDPOINT + "/v1/event/join", {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(res => res.json())
        .catch(error => console.error('Error:', error));
}

function getNgDate(eventID) {
    fetch(API_ENDPOINT + "/v1/event/ngdate?event_id=" + eventID)
        .then(res => res.json())
        .catch(error => console.error('Error:', error));
}

function postNgDate(eventID) {
    let data = { event_id: eventID };

    fetch(API_ENDPOINT + "/v1/event/ngdate", {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(res => res.json())
        .catch(error => console.error('Error:', error));
}

function getDepatureTime(eventID) {
    fetch(API_ENDPOINT + "/v1/event/departure?event_id=" + eventID)
        .then(res => res.json())
        .catch(error => console.error('Error:', error));
}

function getRoute(eventID) {
    fetch(API_ENDPOINT + "/v1/event/route?event_id=" + eventID)
        .then(res => res.json())
        .catch(error => console.error('Error:', error));
}

function arrivalEvent(eventID) {
    let data = { event_id: eventID };

    fetch(API_ENDPOINT + "/v1/event/arrival", {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(res => res.json())
        .catch(error => console.error('Error:', error));
}

function getArrivalRank(eventID) {
    fetch(API_ENDPOINT + "/v1/event/arrival/rank?event_id=" + eventID)
        .then(res => res.json())
        .catch(error => console.error('Error:', error));
}

function getUserLocation(user) {
    fetch(API_ENDPOINT + "/v1/user/location?user=" + user)
        .then(res => res.json())
        .catch(error => console.error('Error:', error));
}

function postUserLocation(lat, lon) {
    let data = { lat: lat, lon: lon };

    fetch(API_ENDPOINT + "/v1/user/location", {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(res => res.json())
        .catch(error => console.error('Error:', error));
}
