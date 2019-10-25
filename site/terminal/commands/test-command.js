
/* global Carolina */

const fs = require('fs-extra');

const generateId = require('carolina/_lib/generate-id');

const BaseCommand = require('carolina/main/terminal/commands/base-command');

const timeout = ms => new Promise(res => setTimeout(res, ms))

class TestCommand extends BaseCommand {

  constructor() {

    super();

    this.commandName = 'test';
    this.description = "test";

    this.args = [];
  }

  async handle(args) {
    
    // console.log("This is a test command.");
    
    const DBSvc = Carolina.$('DB')
    const TestModel = DBSvc._modelClass('TestModel');
    
    let tm = new TestModel({
      name: "name",
      expression: /[a-z]/
    });
    
    console.log(tm);
    console.log(tm._toJSON())
    console.log(tm._toDb());
  }
}

exports = module.exports = TestCommand;