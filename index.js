var metodo = document.querySelector('#metodo'); 
var passosDiv = document.querySelector('#passosDiv');
var codificar = document.querySelector('#cod'); 
var codidecode = document.querySelector('#cod'); 
var radioDecodificar = document.querySelector('#decodificar'); 
var radioCodificar = document.querySelector('#codificar');
var mensagem = document.querySelector('#mensagem')
var resultado = document.querySelector('#resultado')
var btn = document.querySelector('#btn')


//recolher a opção de digitar passos (aparecer apenas quando for cifra de cesar)
metodo.addEventListener('change', function () {
    if (metodo.value =='cesar') {
        passosDiv.style.display = 'flex'
    } else {
        passosDiv.style.display = 'none'
    }

})

//botão de codificar e decodificar
radioDecodificar.addEventListener('change', function () {
    if (codificar.value == 'Codificar') {
        btn.innerHTML = 'Codificar'
    } else {
        btn.innerHTML = 'Decodificar'
    }
})

codificar.addEventListener('change', function () {
    if (radioDecodificar.value == 'Decodificar') {
        btn.innerHTML = 'Decodificar'
    } else btn.innerHTML = 'Codificar'
})

// Aplicando base64
btn.addEventListener('click', function (e) {
    e.preventDefault()
    if (metodo.value == 'base64' && radioCodificar.checked) {

        var retorno = ''
        retorno = mensagem.value

        retorno = btoa(mensagem.value)
        resultado.innerHTML = retorno
    }

})


btn.addEventListener('click', function (e) {
    if (metodo.value == 'base64' && radioDecodificar.checked) {
        retorno = mensagem.value

        retorno = atob(mensagem.value)
        resultado.innerHTML = retorno

    }
})

// Aplicando Cifra de Cesar
btn.addEventListener('click', function (e) {
    e.preventDefault()
    if (metodo.value == 'cesar' && radioCodificar.checked) {

        cifraCesar()
    }
})

btn.addEventListener('click', function () {
    if (metodo.value == 'cesar' && radioDecodificar.checked) {
        decodificaCesar()
    }
})



function cifraCesar() {
    var mensagemtxt = document.querySelector('#mensagem').value
    var passosDiv = document.querySelector('#passosDiv').value
    var texto = ""

    for (var i = 0; i < mensagemtxt.length; i++) {
        var vPasso = parseInt(passosDiv)
        var numAscii = mensagemtxt[i].charCodeAt()
        if (numAscii >= 65 && numAscii <= 90) {
            var modificaPasso = numAscii + vPasso
            if (modificaPasso > 90) {
                modificaPasso = modificaPasso - 26
            }
            texto += String.fromCharCode(modificaPasso)
        } else if (numAscii >= 97 && numAscii <= 122) {
            var modificaPasso = numAscii + vPasso
            if (modificaPasso > 122) {
                modificaPasso = modificaPasso - 26
                texto += mensagem[i]
            }
            texto += String.fromCharCode(modificaPasso)
        } else {
            texto += mensagem[i]
        }
        resultado.value = texto
    }
}

function decodificaCesar() {
    var mensagemtxt = document.querySelector('#mensagem').value
    var passosDiv = document.querySelector('#passosDiv').value
    var texto = ""
    
    for(var i = 0; i < mensagemtxt.length; i++) {
      var vPasso = parseInt(passosDiv)
      var numAscii = mensagemtxt[i].charCodeAt()
      if(numAscii >= 65 && numAscii <= 90) {
        var modificaPasso = numAscii - vPasso
        if(modificaPasso < 65) {
            modificaPasso = 26 + modificaPasso 
        }
        texto += String.fromCharCode(modificaPasso)
      }else if(numAscii >= 97 && numAscii <= 122) {
        var modificaPasso = numAscii - vPasso
        if(modificaPasso < 97) {
            modificaPasso = 26 + modificaPasso 
          texto += mensagem[i]
        }
        texto += String.fromCharCode(modificaPasso)
      }else{
        texto += mensagem[i]
      }
      resultado.value = texto
    }
  }
