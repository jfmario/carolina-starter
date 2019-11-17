
/* global Carolina */

const expect = require('chai').expect;

const BaseBrowser = require('carolina/main/requests/browsers/base-browser');

const Response = require('carolina/main/requests/response');

describe("Requests Service", () => {
  
  it("Service exists.", () => {
    expect(Carolina.$("Requests")).to.exist;
  });
  
  describe("Browser Class Library", () => {
    it("Contains included Browser class named AxiosBrowser.", () => {
      let RequestsSvc = Carolina.$("Requests");
      expect(() => { RequestsSvc._browserClass("AxiosBrowser") }).to.not.throw();
    });
  });
  
  describe("Browser Configuration", () => {
    it("Default browser is an instance of BaseBrowser.", () => {
      
      let RequestsSvc = Carolina.$("Requests");
      let browser = RequestsSvc.browsers['default'];
      
      expect(browser).to.be.instanceof(BaseBrowser);
    });
  });
  
  describe("HTTP Functionality", () => {
    it("Makes a successful GET request.", async function () {
      
      let RequestsSvc = Carolina.$("Requests");
      let response = await RequestsSvc.get({ url: "http://ifconfig.co" });
      
      expect(response).to.be.instanceof(Response);
    });
  });
});