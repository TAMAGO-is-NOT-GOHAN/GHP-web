let form = document.getElementById("nameform");

let eventName = document.getElementById("event-name").value;

let eventDescription = document.getElementById("event-desc").value;

let eventDate = document.getElementById("date-time").value;

let eventMaxPeople = document.getElementById("max").value;

form.addEventListener("submit", function () {
    createEvent(eventName, eventDescription, eventDate, eventMaxPeople);
    let nextPage = document.createElement("a");
    nextPage.href = "../maps?user=" + getQueryParam("user");
});