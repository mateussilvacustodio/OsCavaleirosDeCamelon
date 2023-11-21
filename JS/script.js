var Down = window.document.getElementsByClassName('Secao')[0]
var Art = window.document.getElementsByClassName('Secao')[1]
var GDD = window.document.getElementsByClassName('Secao')[2]

var Cont1 = window.document.getElementsByClassName('Container')[0]
var Cont3 = window.document.getElementsByClassName('Container3')[0]
var Cont4 = window.document.getElementsByClassName('Container4')[0]

var UserAgent

var Botao1 = window.document.getElementsByClassName('BotaoAgent')[0]
var Botao2 = window.document.getElementsByClassName('BotaoAgent')[1]


Down.addEventListener('click', clickDown)

function clickDown() {

    Cont1.style.display = 'flex'
    Cont3.style.display = 'none'
    Cont4.style.display = 'none'


}

Art.addEventListener('click', clickArt)

function clickArt() {

    Cont1.style.display = 'none'
    Cont3.style.display = 'flex'
    Cont4.style.display = 'none'


}

GDD.addEventListener('click', clickGDD)

function clickGDD() {

    Cont1.style.display = 'none'
    Cont3.style.display = 'none'
    Cont4.style.display = 'flex'

}

function Dispositivo() {

    var UserAgent = navigator.userAgent.toLowerCase()
    
    if (UserAgent.includes('win') || UserAgent.includes('linux') && !(UserAgent.includes('android')) ) {

        Botao1.classList.remove('BotaoAgent')
        
    }
    
    if (UserAgent.includes('android') || UserAgent.includes('iphone') || UserAgent.includes('ipad')) {
    
        Botao2.classList.remove('BotaoAgent')
        Botao2.style.color = 'red'
        
    }

}

document.addEventListener('DOMContentLoaded', Dispositivo())

