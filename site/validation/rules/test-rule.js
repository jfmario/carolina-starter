
const BaseRule = require('carolina/main/validation/rules/base-rule');

/**
 * Rule TestRule
 * Defines a schema validation rule to apply against entire object.
 */
class TestRule extends BaseRule {
  
  constructor() {
    super();
  }
  
  validate(config, obj) {
    return {
      success: true
    };
  }
}

exports = module.exports = TestRule;