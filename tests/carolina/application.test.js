
/* global Carolina */

const expect = require('chai').expect;

const moment = require('moment');

const bootstrapCarolina = require('../testing_bootstrap');

before(async () => {
  await bootstrapCarolina();
});

describe("Carolina", () => {
  
  it("Global object exists.", () => {
    expect(Carolina).to.exist;
  });
  
  it("Start time is within the last five minutes.", () => {
    expect(
      Carolina.startTime.isAfter(moment().subtract({ minutes: 5 }))).to.be.true;
  });
  
  it("Application path is the current working directory.", () => {
    expect(Carolina.appPath).to.equal(process.cwd());
  });
  
  describe("Service Library", () => {
    
    it("Has a required service named Cron.", () => {
      expect(Carolina.servicePaths).to.include.key("Cron");
    });
    it("Has a required service named Crypto.", () => {
      expect(Carolina.servicePaths).to.include.key("Crypto");
    });
    it("Has a required service named DB.", () => {
      expect(Carolina.servicePaths).to.include.key("DB");
    });
    it("Has a required service named Email.", () => {
      expect(Carolina.servicePaths).to.include.key("Email");
    });
    it("Has a required service named Errors.", () => {
      expect(Carolina.servicePaths).to.include.key("Errors");
    });
    it("Has a required service named Events.", () => {
      expect(Carolina.servicePaths).to.include.key("Events");
    });
    it("Has a required service named Files.", () => {
      expect(Carolina.servicePaths).to.include.key("Files");
    });
    it("Has a required service named Http.", () => {
      expect(Carolina.servicePaths).to.include.key("Http");
    });
    it("Has a required service named Logger.", () => {
      expect(Carolina.servicePaths).to.include.key("Logger");
    });
    it("Has a required service named Requests.", () => {
      expect(Carolina.servicePaths).to.include.key("Requests");
    });
    it("Has a required service named Session.", () => {
      expect(Carolina.servicePaths).to.include.key("Session");
    });
    it("Has a required service named Terminal.", () => {
      expect(Carolina.servicePaths).to.include.key("Terminal");
    });
    it("Has a required service named Validation.", () => {
      expect(Carolina.servicePaths).to.include.key("Validation");
    });
    it("Has a required service named Views.", () => {
      expect(Carolina.servicePaths).to.include.key("Views");
    });
    it("Has a required service named WebSockets.", () => {
      expect(Carolina.servicePaths).to.include.key("WebSockets");
    });
  });
  
  describe("Values", () => {
    it("Can set and a retrieve a value.", () => {
      Carolina.setValue("TEST_KEY", "TEST_VALUE");
      expect(Carolina.value("TEST_KEY")).to.equal("TEST_VALUE");
    });
  });
  
  describe("Service Access", () => {
    it("Can retrieve a Service.", () => {
      expect(Carolina.$("DB")).to.not.be.null;
    });
    it("Gives the same object each time for a given Service.", () => {
      
      let DBSvc1 = Carolina.$("DB");
      let DBSvc2 = Carolina.$("DB");
      
      expect(DBSvc1 === DBSvc2).to.be.true;
    });
  });
});