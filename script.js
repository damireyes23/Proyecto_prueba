const input = document.getElementById("form_input")
const button = document.getElementById("btn_submit")
const postcontainer = document.querySelector("#post_container")

button.addEventListener('click', (e) => {
    e.preventDefault()
    traerPost(input.value)
})

function traerPost(mostrar){

    // validar la información select
    // Obtienes valor del select
    fetch(`https://jsonplaceholder.typicode.com/posts/${mostrar}/`) 
    .then ((res) => res.json())
    .then((data) => {
        // select.value == data.userId
        // Si es el mismo valor, imprimes resultado
        imprimirResultado(data)
        // Si no mensaje de no información
        // Nueva funcion
    })
    .catch((res) => console.log(res))
}

function imprimirResultado(data){

    const container = document.getElementById ("post-container")
    const userId = document.getElementById ("user-response")
    const id = document.getElementById ("id-response")
    const title = document.getElementById ("title-response")
    const body = document.getElementById ("body-response")

    // SET
    userId.textContent = data.userId;
    id.textContent = data.id;
    title.textContent = data.title;
    body.textContent = data.body;

    // STYLE
    container.classList.remove("hidden");
}
