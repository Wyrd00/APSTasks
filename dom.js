// part 2 linking it all together
// The function here is called an iife,
// it keeps everything inside hidden from the rest of our application
 (function() {
  // This is the dom node where we will keep our todo
  var container = document.getElementById('todo-container');
  var addTodoForm = document.getElementById('add-todo');

  var state = [
    { id: -3, description: 'first todo' },
    { id: -2, description: 'second todo' },
    { id: -1, description: 'third todo' },
    { id: 0, description: 'fourth todo' },
  ]; // this is our initial todoList

  // This function takes a todo, it returns the DOM node representing that todo
  var createTodoNode = function(todo) {
    //console.log(todo);
    var todoNode = document.createElement('li');
    var spanAdd = document.createElement("span");
    var textnode = document.createTextNode(todo.description);
    spanAdd.setAttribute("class", "listOfTodos");
    spanAdd.appendChild(textnode);
    todoNode.appendChild(spanAdd);
    //console.log(todoNode);
    document.getElementById("todo-container").appendChild(todoNode);

    // add span holding description (done and done)
    // this adds the delete button
    var deleteButtonNode = document.createElement('button');
    deleteButtonNode.setAttribute("class", "delete-button");
    deleteButtonNode.addEventListener('click', function(event) {
      var newState = todoFunctions.deleteTodo(state, todo.id);
      update(newState);
    });
    todoNode.appendChild(deleteButtonNode);

    // add markTodo button
    var markButtonNode = document.createElement('button');
    markButtonNode.setAttribute("class", "mark-button");
    markButtonNode.addEventListener('click', function(event) {
      var newState = todoFunctions.markTodo(state, todo.id);
      update(newState);
    });
    todoNode.appendChild(markButtonNode);
    // add classes for css (done and done and done)
    return todoNode;
  };

  // bind create todo form
  if (addTodoForm) {
    addTodoForm.addEventListener('submit', function(event) {
      // https://developer.mozilla.org/en-US/docs/Web/Events/submit
      // what does event.preventDefault do?
      // what is inside event.target?
      event.preventDefault();
      var description = document.getElementById("description").value;
      var input = event.target.description.target;
    //  console.log(description);
    //  hint: todoFunctions.addTodo
      var newTodo = {}; // ?? change this!
      newTodo.description = description;
    //  console.log(newState);
      var newState = todoFunctions.addTodo(state, newTodo);
      update(newState);
    });
  }

  // you should not need to change this function
  var update = function(newState) {
    state = newState;
    renderState(state);
  };

  // you do not need to change this function
  var renderState = function(state) {
    var todoListNode = document.createElement('ul');
    state.forEach(function(todo) {
      todoListNode.appendChild(createTodoNode(todo));
    });
    // you may want to add a class for css
    container.replaceChild(todoListNode, container.firstChild);
  };
  if (container) renderState(state);
})();
