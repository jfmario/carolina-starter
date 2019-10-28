
const BaseModel = require('carolina/main/db/models/base-model');
const BaseSchema = require('carolina/main/db/schemas/base-schema');

class TestModelSchema extends BaseSchema {
  
  constructor() {
    
    super();
    
    this.table = 'test_model';
    
    // value must be something with a simple value that will pass an equality test
    let rpsChoices = [
      { name: 'Rock', value: 1 },
      { name: 'Paper', value: 2 },
      { name: 'Scissors', value: 3 }
    ];
    
    this.fields.name = { type: 'String' };
    this.fields.expression = { type: 'Regex' };
    this.fields.choice = { type: 'Integer', choices: rpsChoices };
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