//navegando pelos elementos
// parentNode parendElement

/* 
const body = document.querySelector('body')
 console.log(body.parentNode) 
console.log(body.parentElement) */


/* const el = document.querySelector('body')
console.log(el.lastElementChild) //para pegar os filhos 



 */

//navegando pelos elementos

/* const el =  document.querySelector('body script') */

//nextSibling nextElementSibling

//console.log(el.previousSibling)
/* console.log(el.previousElementSibling) */

//createElement
const div = document.createElement('div');
div.innerText = "Ola Dev!"

//appende prepend 

const body = document.querySelector('body')
const header = body.querySelector('header')


//body.preppend(div)

//insertBefore
body.insertBefore(div, header.nextSibling)

