const input = document.querySelector("searchinput")
const button = document.querySelector("button")
const postcontainer = document.querySelector("post-container")

function traerPost(){
    fetch("https://jsonplaceholder.typicode.com/posts/1") 
    
    .then ((res) => res.json())
    .then((data) => {
        crearPost(data)
 })
}

function crearPost(mostrar){
    const titulouser = document.createElement ("h1")
    titulouser.textContent = ("User ID:")

    const h1 = document.createElement("h1")
    h1.textContent = mostrar.userId

    const tituloid = document.createElement ("h1")
    tituloid.textContent = ("ID:")
    
    const h3 = document.createElement("h3")
    h3.textContent = mostrar.id

    const titulopost = document.createElement ("h3")
    titulopost.textContent = ("Titulo Post:")

    const encabezadopost = document.createElement("h3")
    encabezadopost.textContent = mostrar.title

    const div= document.createElement("div")
    div.appendChild (titulouser) 
    div.appendChild (h1) 
    div.appendChild (tituloid)
    div.appendChild (h3)
    div.appendChild (titulopost)
    div.appendChild (encabezadopost)

    post_container.appendChild(div)
}

traerPost()