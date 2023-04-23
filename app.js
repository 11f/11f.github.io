console.log('hola dije')

const formulario = document.getElementById('formulario');
const listaTareas = document.getElementById('lista-tarea');
const input = document.getElementById('input');
const template = document.getElementById('template').content;
const fragment = document.createDocumentFragment();
let tareas = {};

formulario.addEventListener('submit', e => {
    e.preventDefault()
     
setTarea(e)    
})

const setTarea= e => {
    if (input.value.trim() === '')   {
        console.log('Con esto no hacemo na\'')
        return
    }

const tarea = {
    id: Date.now(),
    texto: input.value,
    estado: false
}

    tareas[tarea.id] = tarea
console.log(tareas)


    formulario.reset();
    input.focus()

    selectTareas ()

}
const selectTareas = () =>{
    Object.values(tareas).forEach(tareas => {
     const clone = templ.cloneNode(true )
     clone.querySelector('p').textContent = tarea.texto
     fragment.appendChild(clone)
    })
    listaTareas.appendChild(fragment)
}