let userIds = []
const input = document.getElementById('form_input')
const button = document.getElementById('btn_submit')
const postcontainer = document.querySelector('#post_container')

window.onload = function () {
  mostrarSelect()
}

button.addEventListener('click', e => {
  e.preventDefault()
  traerPost(input.value)
  //   listPosts.forEach(function (post) {
  //     if (userIds.includes(post) === false) { //EVITAR QUE SE REPITA EL USER ID EN LA LISTA
  //       userIds.push(post.userId)
  //       console.log(post)
  //     }
  //   })
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
      })
    })
}

function traerPost (mostrar) {
  fetch(`https://jsonplaceholder.typicode.com/posts/${mostrar}/`)
    .then(res => res.json())
    .then(post => {
      // select.value == data.userId
      // Si es el mismo valor, imprimes resultado
      console.log(document.getElementById('select1').value)
      console.log(post.userId)
      console.log(document.getElementById('select1').value == post.userId)
      if (document.getElementById('select1').value == post.userId) {
        imprimirResultado(post)
      } else {
      sinResultado()
      }
      // Si no mensaje de no información
      // Nueva funcion
    })
    .catch(res => console.log(res))
}

function sinResultado () {
 let error = document.getElementById('error')
 let container = document.getElementById('post-container')
 error.classList.remove('hidden')
 container.classList.add('hidden')
}

function imprimirResultado (data) {
  let container = document.getElementById('post-container')
  const userId = document.getElementById('user-response')
  const id = document.getElementById('id-response')
  const title = document.getElementById('title-response')
  const body = document.getElementById('body-response')
  let error = document.getElementById('error')
  
  // SET
  userId.textContent = data.userId
  id.textContent = data.id
  title.textContent = data.title
  body.textContent = data.body

  // STYLE
  container.classList.remove('hidden')
  error.classList.add('hidden')
}
