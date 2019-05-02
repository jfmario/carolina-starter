
/* global Carolina */

const expect = require('chai').expect;

const fs = require('fs-extra');

describe("Email Service", () => {
  
  it("Service exists.", () => {
    expect(Carolina.$("Email")).to.exist;
  });
  it("Correctly sends an e-mail using default mailer.", async function () {
    
    let EmailSvc = Carolina.$('Email')
    fs.ensureDirSync(EmailSvc.mailers.default.basepath);
    let count1 = fs.readdirSync(EmailSvc.mailers.default.basepath).length;
    await EmailSvc.sendEmail({
      to: ["recipient@example.com"],
      message: "Hello"
    });
    let count2 = fs.readdirSync(EmailSvc.mailers.default.basepath).length;
    
    expect(count2).to.be.equal(count1 + 2);
  });
  
  describe("Mailer Library", () => {
    
    it("Contains included Mailer named FileMailer", () => {
      let EmailSvc = Carolina.$("Email");
      expect(() => { EmailSvc._mailerClass("FileMailer") }).to.not.throw();
    });
    it("Contains included Mailer named MailgunMailer", () => {
      let EmailSvc = Carolina.$("Email");
      expect(() => { EmailSvc._mailerClass("MailgunMailer") }).to.not.throw();
    });
    it("Contains included Mailer named TerminalMailer", () => {
      let EmailSvc = Carolina.$("Email");
      expect(() => { EmailSvc._mailerClass("TerminalMailer") }).to.not.throw();
    });
  });
});