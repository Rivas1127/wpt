// DO NOT EDIT! This test has been generated by /html/canvas/tools/gentest.py.
// OffscreenCanvas test in a worker:2d.layer.invalid-calls.endLayer
// Description:Raises exception on lone endLayer calls.
// Note:

importScripts("/resources/testharness.js");
importScripts("/html/canvas/resources/canvas-tests.js");

test(t => {
  var canvas = new OffscreenCanvas(100, 50);
  var ctx = canvas.getContext('2d');

  assert_throws_dom("INVALID_STATE_ERR", function() {
    ctx.endLayer();
  });
}, "Raises exception on lone endLayer calls.");
done();