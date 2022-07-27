let userIds = []
const input = document.getElementById('form_input')
const button = document.getElementById('btn_submit')
const postcontainer = document.querySelector('#post_container')

window.onload=function(){
    mostrarSelect()
}

button.addEventListener('click', e => {
  e.preventDefault()
  traerPost(input.value)
})

function mostrarSelect () {
  fetch(`https://jsonplaceholder.typicode.com/posts`)
    .then(res => res.json())
    .then(function (listPosts) {
      
        //SE RECORRE EL PRIMER CICLO PARA OBTENER LOS 10 USER ID
      listPosts.forEach(function (post) {
        if (userIds.includes(post.userId) === false) {
          userIds.push(post.userId)
        }
      })

      //SE RECORRE EL SEGUNDO CICLO PARA MOSTRAR LOS USER ID EN SELECT
      userIds.forEach(function (userId) {
        const miSelect = document.getElementById('select1')
        let opt = document.createElement('option')
        opt.value = userId
        opt.innerHTML = userId
        miSelect.appendChild(opt)

        console.log(select1)
      })
    })
}

function traerPost (mostrar) {
  fetch(`https://jsonplaceholder.typicode.com/posts/${mostrar}/`)
    .then(res => res.json())
    .then(data => {
      // select.value == data.userId
      // Si es el mismo valor, imprimes resultado
      imprimirResultado(data)
      // Si no mensaje de no información
      // Nueva funcion
    })
    .catch(res => console.log(res))
}

function imprimirResultado (data) {
  const container = document.getElementById('post-container')
  const userId = document.getElementById('user-response')
  const id = document.getElementById('id-response')
  const title = document.getElementById('title-response')
  const body = document.getElementById('body-response')

  // SET
  userId.textContent = data.userId
  id.textContent = data.id
  title.textContent = data.title
  body.textContent = data.body

  // STYLE
  container.classList.remove('hidden')
}
