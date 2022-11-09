let historias = document.querySelectorAll(".noticia")

let cards = 1

function slideNoticia() {
    
    cards ++
    if(cards > 5){
        cards = 1
    }
    if (cards == 1){
        return historias[0].classList.add("noticia_visible"),
        historias[1].classList.remove("noticia_visible"),
        historias[2].classList.remove("noticia_visible"),
        historias[3].classList.remove("noticia_visible"),
        historias[4].classList.remove("noticia_visible")
    } else if (cards == 2){
        return historias[1].classList.add("noticia_visible"),
        historias[0].classList.remove("noticia_visible"),
        historias[2].classList.remove("noticia_visible"),
        historias[3].classList.remove("noticia_visible"),
        historias[4].classList.remove("noticia_visible")
    } else if (cards == 3){
        return historias[2].classList.add("noticia_visible"),
        historias[0].classList.remove("noticia_visible"),
        historias[1].classList.remove("noticia_visible"),
        historias[3].classList.remove("noticia_visible"),
        historias[4].classList.remove("noticia_visible")
    } else if (cards == 4){
        return historias[3].classList.add("noticia_visible"),
        historias[0].classList.remove("noticia_visible"),
        historias[1].classList.remove("noticia_visible"),
        historias[2].classList.remove("noticia_visible"),
        historias[4].classList.remove("noticia_visible")
    } else if (cards == 5){
        return historias[4].classList.add("noticia_visible"),
        historias[0].classList.remove("noticia_visible"),
        historias[1].classList.remove("noticia_visible"),
        historias[2].classList.remove("noticia_visible"),
        historias[3].classList.remove("noticia_visible")
    }
}
setInterval(slideNoticia,3000)