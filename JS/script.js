var Down = window.document.getElementsByClassName('Secao')[0]
var Art = window.document.getElementsByClassName('Secao')[1]
var GDD = window.document.getElementsByClassName('Secao')[2]

var Cont1 = window.document.getElementsByClassName('Container')[0]
var Cont2 = window.document.getElementsByClassName('Container2')[0]
var Cont3 = window.document.getElementsByClassName('Container3')[0]
var Cont4 = window.document.getElementsByClassName('Container4')[0]

Down.addEventListener('click', clickDown)

function clickDown() {

    Cont1.style.display = 'flex'
    Cont2.style.display = 'flex'
    Cont3.style.display = 'none'
    Cont4.style.display = 'none'

}

Art.addEventListener('click', clickArt)

function clickArt() {

    Cont1.style.display = 'none'
    Cont2.style.display = 'none'
    Cont3.style.display = 'flex'
    Cont4.style.display = 'none'


}

GDD.addEventListener('click', clickGDD)

function clickGDD() {

    Cont1.style.display = 'none'
    Cont2.style.display = 'none'
    Cont3.style.display = 'none'
    Cont4.style.display = 'flex'

}