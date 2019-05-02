
/* global Carolina */

const expect = require('chai').expect;

describe("Files Service", () => {
  
  it("Service exists.", () => {
    expect(Carolina.$("Files")).to.exist;
  });
  
  describe("FileDriver Class Library", () => {
    
    it("Contains included FileDriver class named DropboxFileDriver.", () => {
      let FilesSvc = Carolina.$("Files");
      expect(() => { FilesSvc._fileDriverClass("DropboxFileDriver") }).to.not.throw();
    });
    it("Contains included FileDriver class named FtpFileDriver.", () => {
      let FilesSvc = Carolina.$("Files");
      expect(() => { FilesSvc._fileDriverClass("FtpFileDriver") }).to.not.throw();
    });
    it("Contains included FileDriver class named LocalFileDriver.", () => {
      let FilesSvc = Carolina.$("Files");
      expect(() => { FilesSvc._fileDriverClass("LocalFileDriver") }).to.not.throw();
    });
  });
});