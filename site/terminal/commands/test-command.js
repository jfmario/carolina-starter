
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
    
    console.log("This is a test command.");
  }
}

exports = module.exports = TestCommand;