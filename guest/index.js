document.getElementById('event_id').textContent = "ルームID : " + getQueryParam("event_id")
postUserLocation();

function PostUsernameAndEventID() {
  var userName = Userform.username.value;
  location.href = '../guestmaps/index.html' + "?username=" + userName + "?event_id" + getQueryParam('event_id')
}
