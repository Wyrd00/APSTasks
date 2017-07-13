var test = require('tape');
var logic = require('./logic.js');
var mockdata = require("./mockdata.js");


var initialTodo = mockdata.state;

console.log(logic);
console.log(mockdata);

// Test addTodo successfully pass
test('Add todo function', function(t) {
  //var initialTodo = mockdata.state;
  var newTodoSub = [{ id: 0, description: 'mix ingredients', done: false }];
  var updatedTodo = [
    { id: -3, description: 'smash avocado', done: false },
    { id: -2, description: 'cut onions', done: false },
    { id: -1, description: 'dice tomatoes', done: false },
    { id: 0, description: 'mix ingredients', done: false },
  ];
  var result = logic.addTodo(initialTodo, newTodoSub);
  t.deepEqual(result, updatedTodo, "Should add todo successfully");
  // console.log(result);
  t.end();
});

//Test generateId successfully
test('Add generateId function', function(t) {
  //var initialTodo = mockdata.state;
  var newTodoSub = { description: 'mix ingredients' };
  var result = logic.addTodo(initialTodo, newTodoSub);
  var updatedTodo = [
    { id: -3, description: 'smash avocado', done: false },
    { id: -2, description: 'cut onions', done: false },
    { id: -1, description: 'dice tomatoes', done: false },
    { id: 2, description: 'mix ingredients', done: false },
  ]
  t.deepEqual(result, updatedTodo, "Should add todo with correct ID");
  // console.log(result);
  t.end();
});

//Test done:false key when addTodo function is called
test('Add done: false key', function(t) {
  //var initialTodo = mockdata.state;
  var newTodoSub = { description: 'new todo' };
  var result = logic.addTodo(initialTodo, newTodoSub);
  var updatedTodo = [
    { id: -3, description: 'smash avocado', done: false },
    { id: -2, description: 'cut onions', done: false },
    { id: -1, description: 'dice tomatoes', done: false },
    { id: 3, description: 'new todo', done: false },
  ];
  t.deepEqual(result, updatedTodo, "Should add todo with correct 'done:false' key");
  // console.log(result);
  t.end();
});

//Test deleteTodo successully pass
test("Delete any todo", function(t) {
  //var initialTodo = mockdata.state;
  var deletingId = -1;
  var result = logic.deleteTodo(initialTodo, deletingId);
  var finalTodo = [
    { id: -3, description: 'smash avocado', done: false },
    { id: -2, description: 'cut onions', done: false },
  ];
  t.deepEqual(result, finalTodo, "Should remove the Object with id -1");
  // console.log(result);
  t.end();
});

//Test markTodo 'done' from false to true
test("Test markTodo to change 'done' boolean from false to true", function(t) {
  //var initialTodo = mockdata.state;
  var idToChange = -1;
  var result = logic.markTodo(initialTodo, idToChange);
  var finalTodo = [
    { id: -3, description: 'smash avocado', done: false },
    { id: -2, description: 'cut onions', done: false },
    { id: -1, description: 'dice tomatoes', done: true },
  ];
  t.deepEqual(result, finalTodo, "Should change 'done' with id -1");
  t.end();
});

test("Test markTodo to change 'done' boolean from false to true", function(t) {
  //var initialTodo = mockdata.state;
  // console.log(initialTodo);
  var idToChange = -3;
  var result = logic.markTodo(initialTodo, idToChange);
  // console.log(result);
  var finalTodo = [
    { id: -3, description: 'smash avocado', done: true },
    { id: -2, description: 'cut onions', done: false },
    { id: -1, description: 'dice tomatoes', done: false },
  ];
  t.deepEqual(result, finalTodo, "Should change 'done' with id -3");
  // console.log(result);
  t.end();
});
