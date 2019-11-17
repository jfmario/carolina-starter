
/* global Carolina */

const expect = require('chai').expect;

describe("WebSockets Service", () => {
  
  it("Service exists.", () => {
    expect(Carolina.$("WebSockets")).to.exist;
  });
});