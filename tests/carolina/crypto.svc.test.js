
/* global Carolina */

const expect = require('chai').expect;

describe("Crypto Service", () => {
  
  it("Service exists.", () => {
    expect(Carolina.$("Crypto")).to.exist;
  });
  it("Uses algorithm AES-256-CBC-HMAC-SHA256.", () => {
    expect(Carolina.$('Crypto').algorithm).to.equal("AES-256-CBC-HMAC-SHA256");
  });
  it("Encrypts values into something different.", () => {
    let original = "A string of text.";
    expect(Carolina.$('Crypto').encryptText(original)).to.not.equal(original);
  });
  it("Encrypts the same value the same way each time.", () => {
    
    let original = "A string of text.";
    let encrypted1 = Carolina.$('Crypto').encryptText(original);
    let encrypted2 = Carolina.$('Crypto').encryptText(original);
    
    expect(encrypted1).to.equal(encrypted2);
  });
  it("Encrypts values into valid hexadecimal.", () => {
    
    let original = "A string of text.";
    let encrypted = Carolina.$('Crypto').encryptText(original);
    let hexRegex = /^[0-9a-fA-F]+$/;
    
    expect(hexRegex.test(encrypted)).to.be.true;
  });
  it("Decrypts back into the same original value.", () => {
    
    let original = "A string of text.";
    let encrypted = Carolina.$('Crypto').encryptText(original);
    
    expect(Carolina.$('Crypto').decryptText(encrypted)).to.equal(original);
  });
  it("Creates different encryptions with a different secret.", () => {
    
    let original = "A string of text.";
    let encrypted1 = Carolina.$('Crypto').encryptText(original);
    let appSecret = Carolina.config("app.secret");
    let otherSecret = "other_secret";
    
    Carolina.setConfig("app.secret", otherSecret);
    let encrypted2 = Carolina.$('Crypto').encryptText(original);
    
    expect(encrypted1).to.not.equal(encrypted2);
    
    // reset app secret
    Carolina.setConfig("app.secret", appSecret);
  });
});