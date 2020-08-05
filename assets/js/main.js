// to load the page
init();

// eventListners
$('form').on('submit', submitTodos);

$('ul').on('click', 'span', removeTodos);

$('h1').on('click', 'span', toggleHide);

$('input').on('click', removeClass);

$('ul').on('click', 'li', toggleClass);

// functions & variables

let todos = [];

function init() {
  // retrieve saved todos from localStorage
  // JSON parse the data
  getTodos();
  renderTodos();
}

function submitTodos(event) {
  event.preventDefault();

  var todoText = $('input').val();

  if (todoText === '') {
    alert('must enter something...');
    return;
  }

  todos.push(todoText);

  $('input').val('');

  storeTodos();
  renderTodos();
}

function renderTodos() {
  $('ul').html('');

  for (i = 0; i < todos.length; i++) {
    var todo = todos[i];
    // console.log(i)
    // console.log(todo)
    var span =
      '<span data-index=' +
      i +
      " id='trashCan'><i class='fa fa-trash'></i></span>";
    $('ul').append('<li data-index=' + i + '>' + todo + span + '</li>');
  }
}

function storeTodos() {
  localStorage.setItem('todos', JSON.stringify(todos));
}

function getTodos() {
  var storedTodos = JSON.parse(localStorage.getItem('todos'));
  if (storedTodos !== null) {
    todos = storedTodos;
  }
}

function removeTodos() {
  event.stopPropagation();
  // Get its data-index value and remove the todo element from the list
  var element = event.target;
  var index = element.parentElement.getAttribute('data-index');
  todos.splice(index, 1);

  // Store updated todos in localStorage, re-render the list
  storeTodos();
  renderTodos();
}

function toggleHide(event) {
  event.stopPropagation();
  $('input').toggleClass('hide');
}

function removeClass() {
  $('input').removeClass('show');
}

function toggleClass() {
  $(this).toggleClass('completed');
}
