
/* global Carolina */

const expect = require('chai').expect;

describe("Logger Service", () => {
  
  it("Service exists.", () => {
    expect(Carolina.$("Logger")).to.exist;
  });
  
  // not testing logs due to async issues
  
  describe("Logger Library", () => {
    
    it("Contains included Logger class named DbLogger.", () => {
      let LoggerSvc = Carolina.$("Logger");
      expect(() => { LoggerSvc._loggerClass("DbLogger") }).to.not.throw();
    });
    it("Contains included Logger class named EmailLogger.", () => {
      let LoggerSvc = Carolina.$("Logger");
      expect(() => { LoggerSvc._loggerClass("EmailLogger") }).to.not.throw();
    });
    it("Contains included Logger class named FileLogger.", () => {
      let LoggerSvc = Carolina.$("Logger");
      expect(() => { LoggerSvc._loggerClass("FileLogger") }).to.not.throw();
    });
    it("Contains included Logger class named JsonPostLogger.", () => {
      let LoggerSvc = Carolina.$("Logger");
      expect(() => { LoggerSvc._loggerClass("JsonPostLogger") }).to.not.throw();
    });
    it("Contains included Logger class named TerminalLogger.", () => {
      let LoggerSvc = Carolina.$("Logger");
      expect(() => { LoggerSvc._loggerClass("TerminalLogger") }).to.not.throw();
    });
  });
});