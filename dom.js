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
  ]; // this is our initial todoList

  // This function takes a todo, it returns the DOM node representing that todo
  var createTodoNode = function(todo) {
    var todoNode = document.createElement('li');
    var spanAdd = document.createElement("span");
    var textnode = document.createTextNode(todo.description);
    spanAdd.setAttribute("class", "descriptionSpan listOfTodos-"+todo.done);
    // console.log(todo);
    spanAdd.appendChild(textnode);
    todoNode.appendChild(spanAdd);
    //console.log(todoNode);
    document.getElementById("todo-container").appendChild(todoNode);

    // add span holding description (done and done)
    // create div for buttons
    var buttons = document.createElement("div");
    buttons.setAttribute("class", "buttons");
    // this adds the delete button
    var deleteButtonNode = document.createElement('button');
    deleteButtonNode.setAttribute("class", "delete-button");
    deleteButtonNode.setAttribute("id", "delete-button"+todo.id);
    var labeldelete = document.createElement("label");
    labeldelete.setAttribute("for", "delete-button"+todo.id);

    deleteButtonNode.addEventListener('click', function(event) {
      var newState = todoFunctions.deleteTodo(state, todo.id);
      update(newState);
    });
    buttons.appendChild(labeldelete);
    buttons.appendChild(deleteButtonNode);

    // add markTodo button
    var markButtonNode = document.createElement('button');
    markButtonNode.setAttribute("class", "mark-button");
    markButtonNode.setAttribute("id", "mark-button"+todo.id);
    var labelmark = document.createElement("label");
    labelmark.setAttribute("for", "mark-button"+todo.id);

    markButtonNode.addEventListener('click', function(event) {
      var newState = todoFunctions.markTodo(state, todo.id);
      update(newState);
    });
    buttons.appendChild(labelmark);
    buttons.appendChild(markButtonNode);
    todoNode.appendChild(buttons);
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
    //  can also be written like this: var input = event.target.description.target;
    //  hint: todoFunctions.addTodo
      var newTodo = {description: description}; // ?? change this!
      document.getElementById("add-todo").reset();
      // newTodo.description = description;
    //  console.log(newState);
      console.log(newTodo);
      //console.log(description);
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
