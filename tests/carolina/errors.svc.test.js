
/* global Carolina */

const expect = require('chai').expect;

const HttpRequest = require('carolina/main/http/http-request');
const HttpResponse = require('carolina/main/http/http-response');

describe("Errors Service", () => {
  
  it("Service exists.", () => {
    expect(Carolina.$("Errors")).to.exist;
  });
  it("Returns HttpResponse from getResponse method.", async function() {
    
    let ErrorsSvc = Carolina.$("Errors");
    let req = new HttpRequest({});
    let res = new HttpResponse({});
    let res2 = await ErrorsSvc.getResponse(new SyntaxError("oops"),
      req, res, []);
      
    expect(res2).to.be.instanceof(HttpResponse);
  });
  
  describe("Error Library", () => {
    
    it("Contains included Error named AssertionError.", () => {
      let ErrorsSvc = Carolina.$("Errors");
      expect(() => { ErrorsSvc._errorClass("AssertionError") }).to.not.throw();
    });
    it("Contains included Error named RangeError.", () => {
      let ErrorsSvc = Carolina.$("Errors");
      expect(() => { ErrorsSvc._errorClass("RangeError") }).to.not.throw();
    });
    it("Contains included Error named ReferenceError.", () => {
      let ErrorsSvc = Carolina.$("Errors");
      expect(() => { ErrorsSvc._errorClass("ReferenceError") }).to.not.throw();
    });
    it("Contains included Error named SyntaxError.", () => {
      let ErrorsSvc = Carolina.$("Errors");
      expect(() => { ErrorsSvc._errorClass("SyntaxError") }).to.not.throw();
    });
    it("Contains included Error named TypeError.", () => {
      let ErrorsSvc = Carolina.$("Errors");
      expect(() => { ErrorsSvc._errorClass("TypeError") }).to.not.throw();
    });
    it("Contains included Error named FileExistsError.", () => {
      let ErrorsSvc = Carolina.$("Errors");
      expect(() => { ErrorsSvc._errorClass("FileExistsError") }).to.not.throw();
    });
    it("Contains included Error named FileNotFoundError.", () => {
      let ErrorsSvc = Carolina.$("Errors");
      expect(() => { ErrorsSvc._errorClass("FileNotFoundError") }).to.not.throw();
    });
    it("Contains included Error named NoSuchThingError.", () => {
      let ErrorsSvc = Carolina.$("Errors");
      expect(() => { ErrorsSvc._errorClass("NoSuchThingError") }).to.not.throw();
    });
    it("Contains included Error named TemplateNotFoundError.", () => {
      let ErrorsSvc = Carolina.$("Errors");
      expect(() => { ErrorsSvc._errorClass("TemplateNotFoundError") }).to.not.throw();
    });
    it("Contains included Error named ValidationError.", () => {
      let ErrorsSvc = Carolina.$("Errors");
      expect(() => { ErrorsSvc._errorClass("ValidationError") }).to.not.throw();
    });
  });
});