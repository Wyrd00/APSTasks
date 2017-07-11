var test = require('tape');
var logic = require('./logic.js');
var mockdata = require("./mockdata.js")
console.log(logic);
console.log(mockdata);

test('If the test is true it should return true', function(t) {
  t.equal(0, 0, "Should be 0");
  t.end();
});

test('Add todo function', function(t) {
  var initialTodo = mockdata
  // [
  //   { id: -3, description: 'first todo' },
  //   { id: -2, description: 'second todo' },
  //   { id: -1, description: 'third todo' },
  // ]

  var newTodo = [{ id: 0, description: 'new todo' }]

  var updatedTodo = [
    { id: -3, description: 'first todo' },
    { id: -2, description: 'second todo' },
    { id: -1, description: 'third todo' },
    { id: 0, description: 'new todo' },
  ]

  t.deepEqual(logic.addTodo(initialTodo, newTodo), updatedTodo, "Should be add todo with correct ID");
  console.log(logic.addTodo(initialTodo,newTodo));
  t.end();
});
