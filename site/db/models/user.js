
const crypto = require('crypto');

const BaseModel = require('carolina/main/db/models/base-model');
const BaseSchema = require('carolina/main/db/schemas/base-schema');

/**
 * class UserSchema
 * Represents the schema for any User object.
 */
class UserSchema extends BaseSchema {
  
  constructor() {
    
    super();
    
    this.table = "user";
    this.fields.username = { type: "String", name: "Username", required: true };
    this.fields.emailAddress = { type: "Email", name: "E-Mail Address" };
    this.fields.password = { type: "String", name: "Password", adminEdit: false };
    this.fields.salt = { type: "String", adminEdit: false };
    this.fields.forgotPasswordToken = { type: "String", adminEdit: false };
    this.fields.emailVerificationToken = { type: "String", adminEdit: false };
    this.fields.emailVerified = { type: "Boolean", name: "E-Mail Verified?", defaultValue: false };
    this.fields.isAdmin = { type: "Boolean", name: "Is Admin?", defaultValue: false };
    this.fields.roles = { type: 'MultiRef', name: "Role", model: 'Role', defaultValue: [] };
    // add more fields here

    this.adminFields = ['emailAddress', 'isAdmin'];
  }

  getLabel(obj) {
    return obj.username;
  }
}

const UserSchemaInstance = new UserSchema();

/**
 * class User
 * Represents the User object.
 */
class User extends BaseModel {
  
  constructor(obj={}) {
    // console.log(obj);
    super(obj);
  }
  
  setPassword(newPassword) {
    
    let salt = crypto.randomBytes(16).toString('hex');
    let hash = crypto.pbkdf2Sync(newPassword, salt, 2048, 32,
      'sha512').toString('hex');
    this.salt = salt;

    this.password = hash;
    this.forgotPasswordToken = null;
  }

  checkPassword(password) {

    let testPassword = crypto.pbkdf2Sync(password, this.salt, 2048, 32,
      'sha512').toString('hex');
    if (testPassword == this.password) { return true; }

    return false;
  }

  resetPasswordAndGetToken() {
    this.password = null;
    this.salt = null;
    this.forgotPasswordToken = crypto.randomBytes(16).toString('hex');
    return this.forgotPasswordToken;
  }

  // add methods here
}

User.prototype.schema = UserSchemaInstance;

exports = module.exports = User;