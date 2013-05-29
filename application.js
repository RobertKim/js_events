$(document).ready(function() {
  var todoTemplate = $.trim($('#todo_template').html());

  function bindEvents() {

    // Bind functions which add, remove, and complete todos to the appropriate
    // elements

    $('.toolbox').on('click', '.add', function(){
      addTodo($('.toolbox input').val())
    });

    $(document).on('click','.delete', function(){
      deleteTodo(this);
    });

    $(document).on('click', '.complete', function(){
      completeTodo(this);
    });

  }

  //Create functions to add, remove and complete todos


  function addTodo(todoTitle) {
    $('#todo').append(buildTodo(todoTitle)); 
  }
  
  function deleteTodo(task) {
    $(task).closest('#todo_template, div').remove();
  }
  
  function completeTodo(todo) {
    $(todo).closest('div').find('h2').append($("<h6>DONE!</h6>"));
    $(todo).parent().remove();
  }
  

  function buildTodo(todoName) {
    // Creates an jQueryDOMElement from the todoTemplate.
    var $todo = $(todoTemplate);
    // Modifies it's text to use the passed in todoName.
    $todo.find('h2').text(todoName);
    // Returns the jQueryDOMElement to be used elsewhere.
    return $todo;
  }
  
  bindEvents();
});
