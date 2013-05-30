$(document).ready(function() {
  var todoTemplate = $.trim($('#todo_template').html());

  function bindEvents() {
    
        // Bind functions which add, remove, and complete todos to the appropriate
    // elements
    $('.add').on('click', addTodo);
    $(document).on('click', '.delete', deleteTodo);
    $(document).on('click', '.complete', completeTodo);
  }
  
    //Create functions to add, remove and complete todos


  function addTodo(e){
    e.preventDefault();
    var user_input = ($('.todo').val());
    $('.todo_list').append(buildTodo(user_input));
  }

  function deleteTodo(e){
    e.preventDefault();
    $(this).closest('.todo').remove();
  }

  function completeTodo(e){
    e.preventDefault();
    $(this).closest('.todo').addClass("complete");
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
