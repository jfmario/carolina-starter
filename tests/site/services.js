
/* global Carolina */

const expect = require('chai').expect;

const bootstrapCarolina = require('../testing_bootstrap');

before(async () => {
  await bootstrapCarolina();
});

describe("Service Library Configuration", () => {
    
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