$(document).ready(function() {
  $.getJSON('/api/todos')
    .then(getTodos)
    .catch((err) => {
      cosole.log(err);
    })
});

function getTodos(todos) {
  todos.forEach((todo) => {
    var newTodo = $('<li>' + todo.name + '</li>');
    if(todo.completed) {
      newTodo.addClass('done');
    }
    $('.list').append(newTodo);
  })
}
