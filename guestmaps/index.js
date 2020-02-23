let form = document.getElementById("nameform");

let eventName = document.getElementById("event-name").value;

let eventDescription = document.getElementById("event-desc").value;

let eventDate = document.getElementById("date-time").value;

let eventMaxPeople = document.getElementById("max").value;

from.onSubmit = function () {
  try {
    createEvent(eventName, eventDescription, eventDate, eventMaxPeople);
  } catch (error) {
    return false;
  }
  return false;
};