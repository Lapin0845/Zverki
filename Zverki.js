let d1 = document.getElementById('d1')
let d2 = document.getElementById('d2')
let d3 = document.getElementById('d3')
let k1 = document.getElementById('k1')
let k2 = document.getElementById('k2')
let k3 = document.getElementById('k2')



d1.ondragstart = start
d1.ondragend = end

d2.ondragstart = start
d2.ondragend = end

d3.ondragstart = start
d3.ondragend = end

let ofX = 0
let ofY = 0
function start(event){
    console.log(event.pageX,event.pageY)
    console.log(offset.pageX,offset.pageY)
    ofX = event.offsetX
    ofY = event.offsetY
}

function end(event){
    let x = event.pageX
    let y = event.pageY
    this.style.left = (x-ofX)+'px'
        this.style.top = (y-ofY)+'px'
    console.log(event.pageX,event.pageY)
}

function f1(){
    let d1left = $('#d1').css('left')
    let d1top = $('#d1').css('top')

    d1left = +d1left.slice(0,-2)
    d1top = +d1top.slice(0,-2)
    if (0<d1left && d1left<30 && d1top<30)
    { $('#d1').html('<img src="https://t.facdn.net/32930113@300-1567644201.jpg">')}
}

function f2(){
    let d2left = $('#d2').css('left')
    let d2top = $('#d2').css('top')

    d2left = +d2left.slice(0,-2)
    d2top = +d2top.slice(0,-2)
    if (0<d2left && d2left<255 && d2top<255)
    { $('#d2').html('<img src="https://cache3.youla.io/files/images/780_780/5c/97/5c971e362aecd6246436cc13.jpg">')}
}