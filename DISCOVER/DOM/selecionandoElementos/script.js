//getElementByClaasName()
/* const element = document.getElementByClaasName('meta');
console.log(element); */

//querySelector
/* const element = document.querySelector('#one');
console.log(element); */

//querySelectorAll



/* const element = document.getElementByClaasName('.one')

console.log(element)

element.forEach(el => console.log(el))
 */


//manipulando conteudo
//textcontent
/* 
const element = document.querySelector('h1')
element.textContent += " ola devs"

console.log(element.textContent) */


//manipular atraves no inner text 

/* const element = document.querySelector('h1') */
/* element.innerText = "Olá devs!" */

/* element.innerHTML  = "Olá devs! <small>!!!</small>" */

//com o innethtml é possivel insirer modificaçõesmdo html  no js

/* const element = document.querySelector('input')
console.log(element.value)
element.value = "outro valor"
 */
//manipular elementos como atributos e ELementos

const header = document.querySelector('header')
header.setAttribute('id','header')
const headerID = document.querySelector('#header')
console.log(headerID.getAttribute('class'))

header.removeAttribute('id')

header.setAttribute('class', 'bg header')






