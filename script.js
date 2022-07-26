const input = document.getElementById("form_input")
const button = document.getElementById("btn_submit")
const postcontainer = document.getElementById("post_container")

button.addEventListener('click', (e) => {
    e.preventDefault()
    traerPost(input.value)
    
})


function traerPost(mostrar){
    fetch(`https://jsonplaceholder.typicode.com/posts/${mostrar}/`) 
    
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

    const titulopost = document.createElement ("h1")
    titulopost.textContent = ("Titulo Post:")

    const encabezadopost = document.createElement("h3")
    encabezadopost.textContent = mostrar.title

    const post = document.createElement ("h1")
    post.textContent = ("Post:")

    const posteo = document.createElement("h3")
    posteo.textContent = mostrar.body

    const div= document.createElement("div")
    div.appendChild (titulouser) 
    div.appendChild (h1) 
    div.appendChild (tituloid)
    div.appendChild (h3)
    div.appendChild (titulopost)
    div.appendChild (encabezadopost)
    div.appendChild (post)
    div.appendChild (posteo).reset()
    

    post_container.appendChild(div)

}
