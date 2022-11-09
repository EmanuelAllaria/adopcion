let btnMenu = document.querySelector(".fa-bars")
let as = document.querySelectorAll(".nav ul li a")
    
let menu = document.querySelector(".nav")
let login = document.querySelector(".login")

let cerrado = 0


if(screen.width <= 768){
    btnMenu.addEventListener("click", function() {

        cerrado++

        if (cerrado >= 3) {
            cerrado = 1
        }

        if (cerrado == 1) {
            menu.style.display = "block"
            login.style.display = "flex"
        } else if (cerrado == 2) {
            menu.style.display = "none"
            login.style.display = "none"
        }
    })

    for (const key in as) {
        if (Object.hasOwnProperty.call(as, key)) {
            const element = as[key];
            element.addEventListener("click", function() {
                cerrado++
                if (cerrado >= 2) {
                    cerrado = 1
                }
                // if (cerrado == 2) {
                //     menu.style.display = "none"
                // }
                if(cerrado == 1) {
                    menu.style.display = "none"
                    login.style.display = "none"
                }
            })
        }
    }
}