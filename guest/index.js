postUserLocation();

function PostUsername() {
  var value = Userform.username.value;
  document.cookie = 'username=' + value + ";domain=tamago-is-not-gohan.github.io";
  location.href = '../guest'
}

var element = document.getElementById('event_id').textContent = "ルームID : " + getQueryParam("event_id")
