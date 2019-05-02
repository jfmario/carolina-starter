
/* global Carolina */

const expect = require('chai').expect;

describe("Views Service", () => {
  
  it("Service exists.", () => {
    expect(Carolina.$("Views")).to.exist;
  });
  
  describe("Views", () => {
    
    it("Contains included View named FileDownloadView.", () => {
      let ViewsSvc = Carolina.$("Views");
      expect(() => { ViewsSvc._view("FileDownloadView") }).to.not.throw();
    });
    it("Contains included View named PugTemplateView.", () => {
      let ViewsSvc = Carolina.$("Views");
      expect(() => { ViewsSvc._view("PugTemplateView") }).to.not.throw();
    });
    it("Contains included View named StringView.", () => {
      let ViewsSvc = Carolina.$("Views");
      expect(() => { ViewsSvc._view("StringView") }).to.not.throw();
    });
  });
});