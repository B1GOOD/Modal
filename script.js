const btnModal = document.querySelector("#abrir")
const vanderley = document.querySelector(".overlay")
const modalJanela = document.querySelector(".modal")
const btnFechar = document.querySelector("#fechar")

btnModal.addEventListener("click", abrirModal)
btnFechar.addEventListener("click", fecharModal)

function abrirModal(){
    vanderley.classList.remove("escondido")
    modalJanela.classList.remove("escondido")
}

function fecharModal(){
    vanderley.classList.add("escondido")
    modalJanela.classList.add("escondido")
}
// Uma função apenas
function alternarModal(){
    vanderley.classList.toggle("escondido")
    modalJanela.classList.toggle("escondido")
}