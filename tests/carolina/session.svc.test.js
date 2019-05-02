
/* global Carolina */

const expect = require('chai').expect;

describe("Session Service", () => {
  
  it("Service exists.", () => {
    expect(Carolina.$("Session")).to.exist;
  });
  it("Invalid Session ID does not exist.", async function () {
    
    let SessionSvc = Carolina.$('Session');
    let sessionExists = await SessionSvc._sessionIdExists("abc");
    
    expect(sessionExists).to.be.false;
  });
  it("Newly created Session ID does exist.", async function () {
    
    let SessionSvc = Carolina.$('Session');
    let sessID = await SessionSvc.newSession();
    
    expect(sessID).to.exist;
  });
  it("Can get newly created session.", async function () {
    
    let SessionSvc = Carolina.$('Session');
    let sessID = await SessionSvc.newSession({ key: "value" });
    let sess = await SessionSvc.getSession(sessID);
    
    expect(sess).to.exist;
    expect(sess.key).to.equal("value");
  });
  it("Can save existing session.", async function () {
    
    let SessionSvc = Carolina.$('Session');
    let sessID = await SessionSvc.newSession({ key: "value01" });
    let sess = await SessionSvc.getSession(sessID);
    
    expect(sess.key).to.equal("value01");
    sess.key = "value02";
    
    await SessionSvc.saveSession(sessID, sess);
    
    let sess2 = await SessionSvc.getSession(sessID);
    expect(sess2.key).to.equal("value02");
  });
  it("Can delete an existing session.", async function () {
    
    let SessionSvc = Carolina.$('Session');
    let sessID = await SessionSvc.newSession({ key: "value01" });
    let sess = await SessionSvc.getSession(sessID);
    
    expect(sess.key).to.equal("value01");
    
    await SessionSvc.deleteSession(sessID);
    sess = await SessionSvc.getSession(sessID);
    
    expect(sess).to.be.empty;
  });
});