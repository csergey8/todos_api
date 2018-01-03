$(document).ready(function() {
  $.getJSON('/api/todos')
    .then(getTodos)
    .catch((err) => {
      cosole.log(err);
    })

  $('#todoInput').keypress((event) => {
    if(event.which == 13) {
      var val = $('#todoInput').val();
      createTodo(val);
    }
  });

  $('.list').on('click', 'li', function() {
    updateTodo($(this));
  });

  $('.list').on('click', 'span', function(e) {
    e.stopPropagation();
    removeTodo($(this).parent()) });
});

function getTodos(todos) {
  todos.forEach((todo) => {
    addTodo(todo);
  })
}

function addTodo(todo) {
  var newTodo = $('<li class="task">' + todo.name + '<span>X</span></li>');
  newTodo.data('id', todo._id);
  newTodo.data('completed', todo.completed);
  if(todo.completed) {
    newTodo.addClass('done');
  }
  $('.list').append(newTodo);
  $('#todoInput').val('');
}

function createTodo(todo) {
  $.post('/api/todos', {name: todo})
   .then((newTodo) => {
     addTodo(newTodo);
   })
   .catch((err) => {
     conosle.log(err);
   })
}

function removeTodo(todo) {
    var clickedId = todo.data('id');
    $.ajax({
      method: 'DELETE',
      url: '/api/todos/' + clickedId
    })
      .then((data) => {
        todo.remove();
      })
  }
function updateTodo(todo) {
  var clickedId = todo.data('id');
  var isDone = !todo.data('completed');
  var updateData = {completed: isDone};
  $.ajax({
    method: 'PUT',
    url: '/api/todos/' + clickedId,
    data: updateData
  })
  .then(function(updatedTodo) {
    todo.toggleClass("done");
    todo.data('completed', isDone);
  })
  .catch((err) => {
    console.log(err);
  })
}
