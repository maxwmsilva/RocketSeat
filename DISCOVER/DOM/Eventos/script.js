//Eventos

/* const h1 = document.querySelector('h1')
h1.addEventListener('mouseover', print)

function print(){
    console.log('print')
} */


//adicionando evento via outro metodo adicionando

/* const h1 = document.querySelector('h1')
h1.addEventListener('click', print)

function print (){
    console.log ('print max')
}

h1.addEventListener('click', function(){

    console.log('print 2 function')
}) */

//argumento event 

const input = document.querySelector('input')

input.onkeydown = function(event){
    console.log(event)
}