var assert = chai.assert;
var expect = chai.expect;


describe('Closing and opening the cookie jar should work!', function() {


  it('Cookie jar should be closed when executing the closeLid function', function() {
    closeLid();
    assert.equal(isCookieJarOpen, false);
  })

  it('Cookie jar should be open when executing the openLid function', function() {
    openLid();
    assert.equal(isCookieJarOpen, true);
  })

});

describe('Outer and inner functions!', function() {

  it('outerFunction should return \'Hello World\'', function() {
    assert.equal(outerFunction(), 'Hello World')
  })
})

describe('Be careful of colliding count variables in nested for loops!', function() {

  it('Should output the correct sum of all matrix elements', function() {
    var myMatrix = [  [1,3,2],
                      [2,1,5],
                      [5,8,1]  ];
    assert.equal(addMatrixElements(myMatrix), 28);
  })

})

describe('Neo is trying to be authenticated, fix the broken code!', function() {

  it('Should authenticate Neo, and not Morpheus', function() {
    var correctAnswer = {
      handle: 'neo',
      authenticated: true
    }
    assert.deepEqual(sendDataToClient(), correctAnswer)
  })

})
