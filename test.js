var test = require('tape');
var logic = require('./logic.js');
var mockdata = require("./mockdata.js");


console.log(logic);
console.log(mockdata);

test('If the test is true it should return true', function(t) {
  t.equal(0, 0, "Should be 0");
  t.end();
});

// Test One
test('Add todo function', function(t) {
  var initialTodo = mockdata.state;
  // [
  //   { id: -3, description: 'first todo' },
  //   { id: -2, description: 'second todo' },
  //   { id: -1, description: 'third todo' },
  // ]

  var newTodoSub = [{ id: 0, description: 'new todo' }]

  var updatedTodo = [
    { id: -3, description: 'first todo' },
    { id: -2, description: 'second todo' },
    { id: -1, description: 'third todo' },
    { id: 0, description: 'new todo' },
  ]

  var result = logic.addTodo(initialTodo, newTodoSub);

  t.deepEqual(result, updatedTodo, "Should be add todo with correct ID");
  console.log(result);
  t.end();
});


//Test Two
test('Add generateId function', function(t) {

  var initialTodo = mockdata.state;

  var newTodoSub = { description: 'new todo' }

  var result = logic.addTodo(initialTodo, newTodoSub);

  var updatedTodo = [
    { id: -3, description: 'first todo' },
    { id: -2, description: 'second todo' },
    { id: -1, description: 'third todo' },
    { id: 2, description: 'new todo' },
  ]

  t.deepEqual(result, updatedTodo, "Should be add todo with correct ID");
  console.log(result);
  t.end();
});


//Test Three
test("Delete any todo", function(t) {
  var initialTodo = mockdata.state;

  var deletingId = -1;

  var result = logic.deleteTodo(initialTodo, deletingId)

  var finalTodo = [
    { id: -3, description: 'first todo' },
    { id: -2, description: 'second todo' },
  ]

  t.deepEqual(result, finalTodo, "Should remove the Object with id -1");
  console.log(result);
  t.end();
});
