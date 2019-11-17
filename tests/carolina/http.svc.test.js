
/* global Carolina */

const expect = require('chai').expect;

let HttpRequest = require('carolina/main/http/http-request');
let HttpResponse = require('carolina/main/http/http-response');

describe("Http Service", () => {
  
  it("Service exists.", () => {
    expect(Carolina.$("Http")).to.exist;
  });
  
  describe("Controller Library", () => {
    
    it("Contains included Controller named FunctionController.", () => {
      let HttpSvc = Carolina.$("Http");
      expect(() => { HttpSvc._controller("FunctionController") }).to.not.throw();
    });
    it("Contains included Controller named RedirectController.", () => {
      let HttpSvc = Carolina.$("Http");
      expect(() => { HttpSvc._controller("RedirectController") }).to.not.throw();
    });
    it("Contains included Controller named TemplateController.", () => {
      let HttpSvc = Carolina.$("Http");
      expect(() => { HttpSvc._controller("TemplateController") }).to.not.throw();
    });
  });
  
  describe("Middleware Library", () => {
    
    it("Contains included Controller named ApiMiddleware.", () => {
      let HttpSvc = Carolina.$("Http");
      expect(() => { HttpSvc._middleware("ApiMiddleware") }).to.not.throw();
    });
    it("Contains included Controller named BodyParserMiddleware.", () => {
      let HttpSvc = Carolina.$("Http");
      expect(() => { HttpSvc._middleware("BodyParserMiddleware") }).to.not.throw();
    });
    it("Contains included Controller named BrowserMiddleware.", () => {
      let HttpSvc = Carolina.$("Http");
      expect(() => { HttpSvc._middleware("BrowserMiddleware") }).to.not.throw();
    });
    it("Contains included Controller named CookieMiddleware.", () => {
      let HttpSvc = Carolina.$("Http");
      expect(() => { HttpSvc._middleware("CookieMiddleware") }).to.not.throw();
    });
    it("Contains included Controller named CookieEncryptionMiddleware.", () => {
      let HttpSvc = Carolina.$("Http");
      expect(() => { HttpSvc._middleware("CookieEncryptionMiddleware") }).to.not.throw();
    });
    it("Contains included Controller named CsrfMiddleware.", () => {
      let HttpSvc = Carolina.$("Http");
      expect(() => { HttpSvc._middleware("CsrfMiddleware") }).to.not.throw();
    });
    it("Contains included Controller named LogRequestsMiddleware.", () => {
      let HttpSvc = Carolina.$("Http");
      expect(() => { HttpSvc._middleware("LogRequestsMiddleware") }).to.not.throw();
    });
    it("Contains included Controller named ModelExtractionMiddleware.", () => {
      let HttpSvc = Carolina.$("Http");
      expect(() => { HttpSvc._middleware("ModelExtractionMiddleware") }).to.not.throw();
    });
    it("Contains included Controller named SessionMiddleware.", () => {
      let HttpSvc = Carolina.$("Http");
      expect(() => { HttpSvc._middleware("SessionMiddleware") }).to.not.throw();
    });
  });
  
  describe("Controllers", () => {
    
    it("FunctionConroller calls passed method and returns an HttpResponse.", async function () {
      
      let C = Carolina.$("Http")._controller("FunctionController");
    
      let fn= (req, obj, ctrl) => {
        obj.number = 5;
        return new HttpResponse({});
      };
      
      let myObj = { number: 0 };
      let data = {
        data: myObj,
        func: fn
      };
      let req = new HttpRequest({});
      
      let res = await C.handle(req, data);
      
      expect(res).to.be.instanceof(HttpResponse);
      expect(myObj.number).to.equal(5);
    });
    it("RedirectController returns a redirect HttpResponse.", async function () {
      
      let C = Carolina.$("Http")._controller("RedirectController");
      let data = {
        status: 301,
        redirectTo: '/new-place'
      };
      let req = new HttpResponse({});
      let res = await C.handle(req, data);
      
      expect(res).to.be.instanceof(HttpResponse);
      expect(res.redirectTo).to.equal("/new-place");
      expect(res.status).to.equal(301);
    });
  });
});