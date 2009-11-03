$(document).ready(function() {
  
  module("Wrap functions");
    
  test("wraped array", function() {
    equals(_([1,2,3]).first(), _.first([1,2,3]), 'should be the same as unwrapped');
  });
  
});