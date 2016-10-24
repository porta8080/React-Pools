var assert = require('chai').assert;
describe('Testing validations', function(){
  describe('Testing CPF',function(){
    var Validator;

    before(function(){
      Validator = require('../utils/Validator');
    });

    it('should fail with empty arguments',function(done){
      assert.isFalse(Validator.cpf());
      done();
    });

    it('should fail with empty value',function(done){
      assert.isFalse(Validator.cpf(''));
      done();
    });

    it('should pass with only numbers',function(done){
      assert.isTrue(Validator.cpf('12562537742'));
      done();
    });

    it('should pass with correct pattern',function(done){
      assert.isTrue(Validator.cpf('125.625.377-42'));
      done();
    });

    it('should fail with correct pattern but invalid CPF',function(done){
      assert.isFalse(Validator.cpf('123.456.789-00'));
      done();
    });
  });
});
