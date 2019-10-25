
const BaseModel = require('carolina/main/db/models/base-model');
const BaseSchema = require('carolina/main/db/schemas/base-schema');

class TestModelSchema extends BaseSchema {
  
  constructor() {
    
    super();
    
    this.table = 'test_model';
    
    this.fields.name = { type: 'String' };
    this.fields.expression = { type: 'Regex' };
  }
}

const SchemaInstance = new TestModelSchema();

class TestModel extends BaseModel {
  constructor(obj={}) {
    super(obj);
  }
}

TestModel.prototype.schema = SchemaInstance;

exports = module.exports = TestModel;