postUserLocation();

function PostUsername() {
    var value = Userform.username.value;

    location.href = '../form/index.html' + '?user=' + value;
}
