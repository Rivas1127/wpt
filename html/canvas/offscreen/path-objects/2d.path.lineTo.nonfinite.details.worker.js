// DO NOT EDIT! This test has been generated by /html/canvas/tools/gentest.py.
// OffscreenCanvas test in a worker:2d.path.lineTo.nonfinite.details
// Description:lineTo() with Infinity/NaN for first arg still converts the second arg
// Note:

importScripts("/resources/testharness.js");
importScripts("/html/canvas/resources/canvas-tests.js");

var t = async_test("lineTo() with Infinity/NaN for first arg still converts the second arg");
var t_pass = t.done.bind(t);
var t_fail = t.step_func(function(reason) {
    throw reason;
});
t.step(function() {

var canvas = new OffscreenCanvas(100, 50);
var ctx = canvas.getContext('2d');

for (var arg1 of [Infinity, -Infinity, NaN]) {
  var converted = false;
  ctx.lineTo(arg1, { valueOf: function() { converted = true; return 0; } });
  _assert(converted, "converted");
}
t.done();

});
done();