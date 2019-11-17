
/* global Carolina */

const expect = require('chai').expect;

const moment = require('moment');

const BaseConnection = require('carolina/main/db/connections/base-connection');
const BaseField = require('carolina/main/db/fields/base-field');

describe("DB Service", () => {
  
  it("Service exists.", () => {
    expect(Carolina.$("DB")).to.exist;
  });
  it("Connection for every Model class extends BaseConnection", () => {
    for (let modelClassName in Carolina.$('DB').modelClasses) {
      expect(Carolina.$('DB').getConnection(modelClassName)).to.be.instanceof(
        BaseConnection);
    }
  });
  
  describe("Connection Library", () => {
    
    it("Contains included Connection named JsonConnection", () => {
      let DBSvc = Carolina.$("DB");
      expect(() => { DBSvc._connectionClass("JsonConnection") }).to.not.throw();
    });
    it("Contains included Connection named MongoDbConnection", () => {
      let DBSvc = Carolina.$("DB");
      expect(() => { DBSvc._connectionClass("MongoDbConnection") }).to.not.throw();
    });
  });
  
  describe("Field Library", () => {
    
    it("Contains included Field named Array", () => {
      let DBSvc = Carolina.$("DB");
      expect(() => { DBSvc._fieldClass("Array") }).to.not.throw();
    });
    it("Contains included Field named Boolean", () => {
      let DBSvc = Carolina.$("DB");
      expect(() => { DBSvc._fieldClass("Boolean") }).to.not.throw();
    });
    it("Contains included Field named Date", () => {
      let DBSvc = Carolina.$("DB");
      expect(() => { DBSvc._fieldClass("Date") }).to.not.throw();
    });
    it("Contains included Field named Email", () => {
      let DBSvc = Carolina.$("DB");
      expect(() => { DBSvc._fieldClass("Email") }).to.not.throw();
    });
    it("Contains included Field named Integer", () => {
      let DBSvc = Carolina.$("DB");
      expect(() => { DBSvc._fieldClass("Integer") }).to.not.throw();
    });
    it("Contains included Field named IPv4", () => {
      let DBSvc = Carolina.$("DB");
      expect(() => { DBSvc._fieldClass("IPv4") }).to.not.throw();
    });
    it("Contains included Field named Json", () => {
      let DBSvc = Carolina.$("DB");
      expect(() => { DBSvc._fieldClass("Json") }).to.not.throw();
    });
    it("Contains included Field named MultiRef", () => {
      let DBSvc = Carolina.$("DB");
      expect(() => { DBSvc._fieldClass("MultiRef") }).to.not.throw();
    });
    it("Contains included Field named Number", () => {
      let DBSvc = Carolina.$("DB");
      expect(() => { DBSvc._fieldClass("Number") }).to.not.throw();
    });
    it("Contains included Field named Ref", () => {
      let DBSvc = Carolina.$("DB");
      expect(() => { DBSvc._fieldClass("Ref") }).to.not.throw();
    });
    it("Contains included Field named String", () => {
      let DBSvc = Carolina.$("DB");
      expect(() => { DBSvc._fieldClass("String") }).to.not.throw();
    });
    it("Contains included Field named Text", () => {
      let DBSvc = Carolina.$("DB");
      expect(() => { DBSvc._fieldClass("Text") }).to.not.throw();
    });
  });
  
  describe("Fixture Path Library", () => {
    
    it("Contains included Fixture named PonyUsers", () => {
      let DBSvc = Carolina.$("DB");
      expect(() => { DBSvc._fixturePath("PonyUsers") }).to.not.throw();
    });
  });
  
  describe("Model Library", () => {
    
    it("Contains included Model named CronJob", () => {
      let DBSvc = Carolina.$("DB");
      expect(() => { DBSvc._modelClass("CronJob") }).to.not.throw();
    });
    it("Contains included Model named Fixture", () => {
      let DBSvc = Carolina.$("DB");
      expect(() => { DBSvc._modelClass("Fixture") }).to.not.throw();
    });
    it("Contains included Model named FixtureRef", () => {
      let DBSvc = Carolina.$("DB");
      expect(() => { DBSvc._modelClass("FixtureRef") }).to.not.throw();
    });
    it("Contains included Model named LogEntry", () => {
      let DBSvc = Carolina.$("DB");
      expect(() => { DBSvc._modelClass("LogEntry") }).to.not.throw();
    });
    it("Contains included Model named Role", () => {
      let DBSvc = Carolina.$("DB");
      expect(() => { DBSvc._modelClass("Role") }).to.not.throw();
    });
    it("Contains included Model named SessionInfo", () => {
      let DBSvc = Carolina.$("DB");
      expect(() => { DBSvc._modelClass("SessionInfo") }).to.not.throw();
    });
  });
  
  describe("Connections", () => {
    
    it("Default Connection exists.", () => {
      expect(Carolina.$('DB').connections.default).to.exist;
    });
    it("Can create an object.", async function () {
      let newId = await Carolina.$('DB').connections.default.create("user", {
        username: '__fake_user__'
      });
      expect(newId).to.not.be.null;
    });
    it("Can retrieve objects via query.", async function () {
      
      /**
      let newId = await Carolina.$('DB').connections.default.create("user", {
        username: '__fake_user__'
      }); */
      
      let user = await Carolina.$('DB').connections.default.query("user", {
        username: '__fake_user__'
      });
      
      expect(user.length).to.be.above(0);
    });
    it("Can retrieve a single object via query.", async function () {
      
      /**
      let newId = await Carolina.$('DB').connections.default.create("user", {
        username: '__fake_user__'
      }); */
      
      let user = await Carolina.$('DB').connections.default.get("user", {
        username: '__fake_user__'
      });
      
      expect(user.username).to.equal("__fake_user__");
    });
    it("Can retrieve a single object by ID.", async function () {
      
      let newId = await Carolina.$('DB').connections.default.create("user", {
        username: '__fake_user_2__'
      });
      let user = await Carolina.$('DB').connections.default.lookup('user',
        newId);
      
      expect(user.username).to.equal("__fake_user_2__");
    });
    it("Can update an object.", async function () {
      
      let newId = await Carolina.$('DB').connections.default.create("user", {
        username: '__fake_user_3__',
        emailAddress: "fakeuser@example.com"
      });
      await Carolina.$('DB').connections.default.update('user',
        { username: '__fake_user_3__' },
        { emailAddress: "fakeuser3@example.com" }
      );
      let user = await Carolina.$('DB').connections.default.lookup('user',
        newId);
      
      expect(user.emailAddress).to.equal("fakeuser3@example.com");
    });
    it("Can delete an object.", async function () {
      
      let newId = await Carolina.$('DB').connections.default.create("user", {
        username: '__fake_user_4__'
      });
      let user = await Carolina.$('DB').connections.default.lookup('user',
        newId);
        
      expect(user).to.not.be.null;
      
      await Carolina.$('DB').connections.default.delete('user', {
        username: "__fake_user_4__"
      });
      user = await Carolina.$('DB').connections.default.lookup('user',
        newId);
      
      expect(user).to.be.null;
    });
  });
  
  describe("Fields", () => {
    
    it("Admin editability is on by default.", () => {
      let f = new BaseField({});
      expect(f.adminEdit).to.be.true;
    });
    it("Allowed values is empty by default.", () => {
      let f = new BaseField({});
      expect(f.allowedValues.length).to.equal(0);
    });
    it("Banned values is empty by default.", () => {
      let f = new BaseField({});
      expect(f.bannedValues.length).to.equal(0);
    });
    it("Base data type is String by default.", () => {
      let f = new BaseField({});
      expect(f.baseDataType).to.equal('String');
    });
    it("Min and max are both null by default.", () => {
      let f = new BaseField({});
      expect(f.min).to.be.null;
      expect(f.max).to.be.null;
    });
    it("Name and verbose name are both null by default.", () => {
      let f = new BaseField({});
      expect(f.name).to.be.null;
      expect(f.verbose).to.be.null;
    });
    it("Required is false by default.", () => {
      let f = new BaseField({});
      expect(f.required).to.be.false;
    });
    it("Required field fails to validate on null value.", () => {
      let f = new BaseField({ required: true });
      expect(f.validate(null).success).to.be.false;
    });
    it("Array field enforces value to be an array.", () => {
      
      let ArrayField = Carolina.$('DB')._fieldClass('Array');
      let f = new ArrayField({});
      
      expect(f.validate("String").success).to.be.false;
      expect(f.validate([0]).success).to.be.true;
    });
    it("Array field enforces min and max constraints.", () => {
      
      let ArrayField = Carolina.$('DB')._fieldClass('Array');
      let f = new ArrayField({ min: 2, max: 5 });
      
      expect(f.validate([0]).success).to.be.false;
      expect(f.validate([0,1]).success).to.be.true;
      expect(f.validate([0,1,2,3,4]).success).to.be.true;
      expect(f.validate([0,1,2,3,4,5]).success).to.be.false;
    });
    it("Boolean field requires value to be true or false.", () => {
      
      let BooleanField = Carolina.$('DB')._fieldClass('Boolean');
      let f = new BooleanField({});
      
      expect(f.validate(true).success).to.be.true;
      expect(f.validate(false).success).to.be.true;
      expect(f.validate('true').success).to.be.false;
      expect(f.validate('false').success).to.be.false;
      expect(f.validate(10).success).to.be.false;
    });
    it("Boolean field enforces require true.", () => {
      
      let BooleanField = Carolina.$('DB')._fieldClass('Boolean');
      let f = new BooleanField({ requireTrue: true });
      
      expect(f.validate(true).success).to.be.true;
      expect(f.validate(false).success).to.be.false;
    });
    it("Date field enforces min and max.", () => {
      
      let DateField = Carolina.$('DB')._fieldClass('Date');
      let f = new DateField({
        min: moment().subtract({ minutes: 5 }),
        max: moment().add({ minutes: 5 })
      });
      
      expect(f.validate(moment().subtract({ minutes: 10 })).success).to.be.false;
      expect(f.validate(moment()).success).to.be.true;
      expect(f.validate(moment().add({ minutes: 10 })).success).to.be.false;
    });
    it("Email field enforces valid e-mail addresses.", () => {
      
      let EmailField = Carolina.$('DB')._fieldClass('Email');
      let f = new EmailField({});
      
      expect(f.validate("goodemail@example.com").success).to.be.true;
      expect(f.validate("bademail").success).to.be.false;
    });
    it("Integer field rejects non-integer floats.", () => {
      
      let IntegerField = Carolina.$('DB')._fieldClass('Integer');
      let f = new IntegerField({});
      
      expect(f.validate(1).success).to.be.true;
      expect(f.validate(1.0).success).to.be.true;
      expect(f.validate(1.5).success).to.be.false;
    });
    it("IPv4 field enforces valid IPv4 addresses.", () => {
      
      let IPv4Field = Carolina.$('DB')._fieldClass('IPv4');
      let f = new IPv4Field({});
      
      expect(f.validate('127.0.0.1').success).to.be.true;
      expect(f.validate('192.168.10.1').success).to.be.true;
      expect(f.validate('192.168.10.256').success).to.be.false;
      expect(f.validate('lol not an ip address').success).to.be.false;
    });
    it("Json field accepts array or object but nothing else.", () => {
      
      let JsonField = Carolina.$('DB')._fieldClass('Json');
      let f = new JsonField({});
      
      expect(f.validate('string').success).to.be.false;
      expect(f.validate(100).success).to.be.false;
      expect(f.validate([100]).success).to.be.true;
      expect(f.validate({ key: "value" }).success).to.be.true;
    });
    it("Number field enforces min and max constraints.", () => {
      
      let NumberField = Carolina.$('DB')._fieldClass('Number');
      let f = new NumberField({ min: 2, max: 5 });
      
      expect(f.validate(0.0).success).to.be.false;
      expect(f.validate(2.2).success).to.be.true;
      expect(f.validate(4.5).success).to.be.true;
      expect(f.validate(6.6).success).to.be.false;
    });
  });
});