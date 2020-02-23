var eventID = getQueryParam('event_id')
document.getElementById('event_id').textContent = "ルームID : " + eventID
postUserLocation()

function PostUsernameAndEventID() {
  var userName = Userform.username.value;
  joinEvent(eventID)
  location.href = '../guestmaps/index.html' + "?username=" + userName + "&event_id=" + eventID
}
