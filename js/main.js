var elOffcanvas = document.querySelector('.offcanvas')
var elOffShad = document.querySelector('.offcanvas__shadow')
function fnOpen(){
    elOffcanvas.classList.add('open')
    elOffShad.style.display = 'block'
}

function fnClose(){
    elOffcanvas.classList.remove('open') 
    elOffShad.style.display = 'none'
}