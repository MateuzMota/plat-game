const form = document.getElementById("header");

form.addEventListener('submit', function(e) {
    e.preventDefault();
    const nick = document.getElementById('nickInput');
    console.log(nick.value);
})