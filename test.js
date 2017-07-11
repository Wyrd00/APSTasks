var test = require('tape');
var logic = require('./logic.js');

test('If the test is true it should return true', function(t) {
  t.equal(newTodo(), true, "Should be true");
  t.end();
});
