var chai = require('chai');
var should = chai.should();
var expect = chai.expect;

describe('Vault', function() {

  var vault = require('../vault');
  var vaulted;

  beforeEach(function() {
    vaulted = vault();
  });

  it('should return null if no key is used', function() {
    expect(vaulted.getValue()).to.be.null;
  });

  it('should return null if an invalid key is used', function() {
    var invalidKey = 'sntdaoifiadnitdoaenyineoaiseou';
    var val = vaulted.getValue( invalidKey );
    expect(val).to.be.null;
  });


  it('should set a secret value with a key, and get that same value back', function() {
    var key1ToSet = 'my key 1';
    var value1ToSet = 'my secret 1';
    var key2ToSet = 'my key 2';
    var value2ToSet = 'my secret 2';

    vaulted.setValue( key1ToSet, value1ToSet );
    vaulted.getValue( key1ToSet ).should.equal( value1ToSet );
    vaulted.setValue( key2ToSet, value2ToSet );
    vaulted.getValue( key2ToSet ).should.equal( value2ToSet );

  });

  it('should not return values from other vaults', function() {
    var key1ToSet = 'my key 1';
    var value1ToSet = 'my secret 1';

    vaulted.setValue( key1ToSet, value1ToSet );
    vaulted.getValue( key1ToSet ).should.equal( value1ToSet );

    var otherVault = vault();
    expect(otherVault.getValue( key1ToSet )).to.be.null;
  });

});
