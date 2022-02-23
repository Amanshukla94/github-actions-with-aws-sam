const chai = require ("chai")
,assert =  chai.assert
,expect =  chai .expect
,should = chai.should()

describe ( 'string', function(){
let name = "john";
it('Try different methods of chai', function(){
name.should.be.a('string')
expect(name).to.be.a('string')
assert.typeOf(name,'string')
})
it('another chai library', function(){
   // let name = "Kate";
   name.should.equal('john')
   expect(name).to.equal('john')
    assert.equal(name, 'john')

})
it.skip('another chai library', function(){
    // let name = "Kate";
    name.should.equal('john') //should 
    expect(name).to.equal('john') //expect
     assert.equal(name, 'john') // assert
 
 })
 this.beforeEach(function(){
     console.log("Testing hooks1")
 })
 before(function(){
    console.log("Testing hooks2")
})
this.afterEach(function(){
    console.log("Testing hooks3")
})
after(function(){
    console.log("Testing hooks4")

})
})

// array function 
describe('Array', function () {
    describe('#indexOf()', function () {
      it('should return -1 when the value is not present', function () {
        [1, 2, 3].indexOf(5).should.equal(-1);
        [1, 2, 3].indexOf(0).should.equal(-1);
      });
    });
  });

 // assertions library
  var assert = require('chai').assert
  , xyz = 'bar'
  , beverages = { tea: [ 'chai', 'matcha', 'oolong' ] };

assert.typeOf(xyz, 'string'); // without optional message
assert.typeOf(xyz, 'string', 'xyz is a string'); // with optional message
assert.equal(xyz, 'bar', 'xyz equal `bar`');
assert.lengthOf(xyz, 3, 'xyz value has a length of 3');
assert.lengthOf(beverages.tea, 3, 'beverages has 3 types of tea');



