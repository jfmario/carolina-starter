
/* global Carolina */

const expect = require('chai').expect;

describe("Terminal Service", () => {
  
  it("Service exists.", () => {
    expect(Carolina.$("Terminal")).to.exist;
  });
  
  describe("Command Library", () => {
    
    it("Contains included Command named ClearTmpCommand.", () => {
      let TerminalSvc = Carolina.$("Terminal");
      expect(() => { TerminalSvc._command("ClearTmpCommand") }).to.not.throw();
    });
    it("Contains included Command named ExportDatabaseTableCommand.", () => {
      let TerminalSvc = Carolina.$("Terminal");
      expect(() => { TerminalSvc._command("ExportDatabaseTableCommand") }).to.not.throw();
    });
    it("Contains included Command named GenerateCommand.", () => {
      let TerminalSvc = Carolina.$("Terminal");
      expect(() => { TerminalSvc._command("GenerateCommand") }).to.not.throw();
    });
    it("Contains included Command named GenerateKeyCommand.", () => {
      let TerminalSvc = Carolina.$("Terminal");
      expect(() => { TerminalSvc._command("GenerateKeyCommand") }).to.not.throw();
    });
    it("Contains included Command named HelpCommand.", () => {
      let TerminalSvc = Carolina.$("Terminal");
      expect(() => { TerminalSvc._command("HelpCommand") }).to.not.throw();
    });
    it("Contains included Command named ImportPluginResourcesCommand.", () => {
      let TerminalSvc = Carolina.$("Terminal");
      expect(() => { TerminalSvc._command("ImportPluginResourcesCommand") }).to.not.throw();
    });
    it("Contains included Command named LoadDataCommand.", () => {
      let TerminalSvc = Carolina.$("Terminal");
      expect(() => { TerminalSvc._command("LoadDataCommand") }).to.not.throw();
    });
    it("Contains included Command named RunserverCommand.", () => {
      let TerminalSvc = Carolina.$("Terminal");
      expect(() => { TerminalSvc._command("RunserverCommand") }).to.not.throw();
    });
  });
});