postUserLocation();

function getQueryParam(key) {
    // 1.URLから (指定したパラメータ名~&|$|#) で終わる箇所を抜き出し
    const value = window.location.href.match(new RegExp("[?&]" + key + "=(.*?)(&|$|#)"));
    // 2.パラメータ名に一致する値が存在しない場合は空返却
    if (value == null) return '';
    // 3.パラメータ名に一致する値が存在した場合はURLデコードして返却
    return decodeURIComponent(value[1]);
}

function PostUsername() {
    var value = Userform.username.value;

    location.href = '../maps/index.html' + '?user=' + value;
}
