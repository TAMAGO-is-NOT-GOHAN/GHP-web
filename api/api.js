function getQueryParam(key) {
    // 1.URLから (指定したパラメータ名~&|$|#) で終わる箇所を抜き出し
    const value = window.location.href.match(new RegExp("[?&]" + key + "=(.*?)(&|$|#)"));
    // 2.パラメータ名に一致する値が存在しない場合は空返却
    if (value == null) return '';
    // 3.パラメータ名に一致する値が存在した場合はURLデコードして返却
    return decodeURIComponent(value[1]);
}

let user = getQueryParam("user");

const API_ENDPOINT = "https://httpbin.org"

function getEvent(eventID) {
    fetch(API_ENDPOINT + "/v1/event?user=" + user + "&event_id=" + eventID)
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
    fetch(API_ENDPOINT + "/v1/event/ngdate?user=" + user + "&event_id=" + eventID)
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
    fetch(API_ENDPOINT + "/v1/event/departure?user=" + user + "&event_id=" + eventID)
        .then(res => res.json())
        .catch(error => console.error('Error:', error));
}

function getRoute(eventID) {
    fetch(API_ENDPOINT + "/v1/event/route?user=" + user + "&event_id=" + eventID)
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
    fetch(API_ENDPOINT + "/v1/event/arrival/rank?user=" + user + "&event_id=" + eventID)
        .then(res => res.json())
        .catch(error => console.error('Error:', error));
}

function getUserLocation(targetUser) {
    fetch(API_ENDPOINT + "/v1/user/location?user=" + user + "&target_user=" + targetUser)
        .then(res => res.json())
        .catch(error => console.error('Error:', error));
}

function postUserLocation() {
    navigator.geolocation.getCurrentPosition(function (position) {
        let data = { lat: position.coords.latitude, lon: position.coords.longitude };

        fetch(API_ENDPOINT + "/v1/user/location", {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .catch(error => console.error('Error:', error));
    });
}
