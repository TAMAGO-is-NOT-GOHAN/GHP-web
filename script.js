postUserLocation();

function PostUsername() {
    var value = Userform.username.value;

    location.href = '../maps/index.html' + '?user=' + value;
}
