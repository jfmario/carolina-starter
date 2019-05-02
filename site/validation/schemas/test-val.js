
const BaseSchema = require('carolina/main/db/schemas/base-schema');

class TestSchema extends BaseSchema {
  constructor() {
    
    // no auto date fields
    super(false);
    
    this.fields.name = { type: 'String', required: true };
    this.fields.accept = { type: 'Boolean', requireTrue: true };
    this.fields.currentDate = { type: 'Date', min: "2000-01-01" };
  }
}

exports = module.exports = TestSchema;