var Myclass = require("../src/Myclass.js");
var sinon = require ("sinon");
 var myobj = new Myclass();
var chai = require ("chai");
var expect = chai.expect;

describe ("Test suit", function() {
it("add two numbers", function()
{
expect(myobj.addnumbers(1,2)).to.be.equal(3);
});
});


  it("add another number", function()
  {
    var spy =  sinon.spy( myobj, "addnumbers");
  var arg1 = 10;
  var arg2 = 20;
 
  myobj.addanotherfn(arg1, arg2)
  sinon.assert.calledOnce(spy);
  });




