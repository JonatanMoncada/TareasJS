//Seleccionar los elementos HTML que necesitamos:
let input = document.querySelector('#tarea');
let boton = document.querySelector('#boton');
let tareas = document.querySelector('ul');

//Cuando se haga click en el boton
boton.addEventListener('click', function () {
  //Obtener lo que hay escrito en el input
  let tarea = input.value;
  //console.log(tarea);

  //añadirlo como  un nuevo elemento
  let li = document.createElement('li');
  li.textContent = tarea;
  tareas.appendChild(li);
  input.value = '';
});
