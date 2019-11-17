
/* global Carolina */

const expect = require('chai').expect;

describe("Validation Service", () => {
  
  it("Service exists.", () => {
    expect(Carolina.$("Validation")).to.exist;
  });
  
  describe("Rule Library", () => {
    
    it("Contains included Rule named DistinctRule.", () => {
      let ValidationSvc = Carolina.$("Validation");
      expect(() => { ValidationSvc._rule("DistinctRule") }).to.not.throw();
    });
    it("Contains included Rule named SamenessRule.", () => {
      let ValidationSvc = Carolina.$("Validation");
      expect(() => { ValidationSvc._rule("SamenessRule") }).to.not.throw();
    });
  });
  
  describe("Schema Library", () => {
    
    it("Contains included Schema named LoginSchema.", () => {
      let ValidationSvc = Carolina.$("Validation");
      expect(() => { ValidationSvc._schema("LoginSchema") }).to.not.throw();
    });
  });
});