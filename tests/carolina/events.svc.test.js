
/* global Carolina */

const expect = require('chai').expect;

describe("Events Service", () => {
  
  it("Service exists.", () => {
    expect(Carolina.$("Events")).to.exist;
  });
  it("Respects configuration for Event types not to be fired.", () => {
    
    let dontFireConfig = Carolina.config("events.dontFire");
    let replacement = ["SystemShutdownEvent"];
    
    Carolina.setConfig("events.dontFire", replacement);
    
    let err = new SyntaxError("Uh-Oh!");
    let EventsSvc = Carolina.$('Events');
    let ErrorEvent = EventsSvc._eventClass("ErrorEvent");
    let event1 = new ErrorEvent(err);
    let SystemShutdownEvent = EventsSvc._eventClass("SystemShutdownEvent");
    let event2 = new SystemShutdownEvent({ reason: "Test" });
    let fire1 = EventsSvc.fireEvent(event1, 'ErrorEvent');
    let fire2 = EventsSvc.fireEvent(event2, "SystemShutdownEvent");
    
    expect(fire1).to.be.true;
    expect(fire2).to.be.false;
    
    // restore original configuration for events.dontFire
    Carolina.setConfig('events.dontFire', dontFireConfig);
  });
  
  describe("Events Library", () => {
    
    it("Contains included Event named ErrorEvent", () => {
      let EventsSvc = Carolina.$("Events");
      expect(() => { EventsSvc._eventClass("ErrorEvent") }).to.not.throw();
    });
    it("Contains included Event named InitializeServiceEvent", () => {
      let EventsSvc = Carolina.$("Events");
      expect(() => { EventsSvc._eventClass("InitializeServiceEvent") }).to.not.throw();
    });
    it("Contains included Event named SystemShutdownEvent", () => {
      let EventsSvc = Carolina.$("Events");
      expect(() => { EventsSvc._eventClass("SystemShutdownEvent") }).to.not.throw();
    });
  });
  
  describe("Listener Library", () => {
    
    it("Contains included Listener named LogError", () => {
      let EventsSvc = Carolina.$("Events");
      expect(() => { EventsSvc._listener("LogError") }).to.not.throw();
    });
    it("Contains included Listener named SystemShutdownListener", () => {
      let EventsSvc = Carolina.$("Events");
      expect(() => { EventsSvc._listener("SystemShutdownListener") }).to.not.throw();
    });
  });
});