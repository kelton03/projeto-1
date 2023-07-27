function toggleMode() {
    const html = document.body
    html.classList.toggle('light')

    const img = document.querySelector("#profile img")
    
    if (html.classList.contains("light")) {

        img.setAttribute("src", "./imagem/avatar-light.png")
    } else {
        img.setAttribute("src", "./imagem/avatar.png")
    }

    


}