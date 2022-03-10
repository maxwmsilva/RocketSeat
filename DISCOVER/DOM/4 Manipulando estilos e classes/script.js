/* //      Alterando estilos  */

const element = document.querySelector('body')

/* element.style.backgroundColor= "#f9f3D2"
console.log(element.style.backgroundColor) */

element.classList.add('active', 'green')
console.log(element.classList)
/* element.classList.remove('active') */
element.classList.toggle('active')