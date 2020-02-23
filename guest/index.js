postUserLocation();

function PostUsername() {
  var value = Userform.username.value;
  document.cookie = 'username=' + value + ";domain=tamago-is-not-gohan.github.io";
  location.href = '../maps/index.html'
}
