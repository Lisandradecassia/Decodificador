
var metodo = document.querySelector('#metodo');
var passos = document.querySelector('#passos');


metodo.addEventListener('click', function () {
    if (metodo.value == '2') {
        passos.style.display = 'flex'
    } else {
        passos.style.display = 'none'
    }
})

