const buttonOpenModal = document.getElementById ('openModal')

const modalWrapper = document.querySelector('modal-wrapper')

buttomOpenModal.oneclick = function (){
    modalWrapper
    .classList
    .remove('invisible')
}

document.addEventListener('keydown', function(event){
    
    const isEscKey = event.key == 'Escape'

    if(isEscKey){
        modalWrapper.classList.add('invisible')
    }

})