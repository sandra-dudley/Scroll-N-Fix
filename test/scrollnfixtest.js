QUnit.test( "Scroll'N'Fix exists", function( assert ) {
  assert.ok( scrollnfix , "Scroll'N'Fix exists!" );
});
QUnit.test( "Scroll'N'Fix is an object", function( assert ) {
  assert.equal( typeof scrollnfix, "object", "It is an object" );
});
QUnit.test( "Initial position", function( assert ) {
  var done = assert.async();
  window.scrollTo(0,0);
  setTimeout(function() {
    assert.ok( document.getElementById("div1").style.backgroundAttachment !== "fixed", "DIV 1 Background attachment is scroll" );
    assert.ok( document.getElementById("div2").style.backgroundAttachment !== "fixed", "DIV 2 Background attachment is scroll" );
    assert.ok( document.getElementById("div3").style.backgroundAttachment !== "fixed", "DIV 3 Background attachment is scroll" );
    done();
  },500)
});
QUnit.test( "After 1st scroll", function( assert ) {
  var done = assert.async();
  window.scrollTo(0,500);
  setTimeout(function() {
    assert.equal( document.getElementById("div1").style.backgroundAttachment, "fixed", "DIV 1 Background attachment is fixed" );
    assert.equal( document.getElementById("div2").style.backgroundAttachment, "scroll", "DIV 2 Background attachment is scroll" );
    assert.equal( document.getElementById("div3").style.backgroundAttachment, "scroll", "DIV 3 Background attachment is scroll" );
    done();
  },1500)
});
QUnit.test( "After 2nd scroll", function( assert ) {
  var done = assert.async();
  window.scrollTo(0,1000);
  setTimeout(function() {
    assert.equal( document.getElementById("div1").style.backgroundAttachment, "fixed", "DIV 1 Background attachment is fixed" );
    assert.equal( document.getElementById("div2").style.backgroundAttachment, "fixed", "DIV 2 Background attachment is fixed" );
    assert.equal( document.getElementById("div3").style.backgroundAttachment, "scroll", "DIV 3 Background attachment is scroll" );
    done();
  },2000)
});
QUnit.test( "After 3rd scroll", function( assert ) {
  var done = assert.async();
  window.scrollTo(0,1500);
  setTimeout(function() {
    assert.equal( document.getElementById("div1").style.backgroundAttachment, "fixed", "DIV 1 Background attachment is fixed" );
    assert.equal( document.getElementById("div2").style.backgroundAttachment, "fixed", "DIV 2 Background attachment is fixed" );
    assert.equal( document.getElementById("div3").style.backgroundAttachment, "fixed", "DIV 3 Background attachment is fixed" );
    done();
  },2500)
});
QUnit.test( "Scroll back", function( assert ) {
  var done = assert.async();
  window.scrollTo(0,0);
  setTimeout(function() {
    assert.equal( document.getElementById("div1").style.backgroundAttachment, "scroll", "DIV 1 Background attachment is scroll" );
    assert.equal( document.getElementById("div2").style.backgroundAttachment, "scroll", "DIV 2 Background attachment is scroll" );
    assert.equal( document.getElementById("div3").style.backgroundAttachment, "scroll", "DIV 3 Background attachment is scroll" );
    done();
  },3000)
});
