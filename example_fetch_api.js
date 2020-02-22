fetch("https://httpbin.org/ip")
    .then(res => res.json())
    .then(function (response) {
        console.log(JSON.stringify(response));
        let root = document.getElementById("root");
        let respElem = document.createElement("p");
        respElem.textContent = JSON.stringify(response);
        root.appendChild(respElem);
    })
    .catch(error => console.error('Error:', error));;

var url = 'https://httpbin.org/post';
let data = { username: 'example' };

fetch(url, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
        'Content-Type': 'application/json'
    }
})
    .then(res => res.json())
    .then(function (response) {
        console.log(JSON.stringify(response));
        let root = document.getElementById("root");
        let respElem = document.createElement("p");
        respElem.textContent = JSON.stringify(response);
        root.appendChild(respElem);
    })
    .catch(error => console.error('Error:', error));
