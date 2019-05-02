
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
    
    let S3FileDriver = require('carolina/plugins/aws/plugin/files/file-drivers')['Carolina/AWS/S3FileDriver'];
    
    let driver = new S3FileDriver();
    driver.configure({ profile: 'default', bucketName: 'johnfmarion' });
    
    // let results1 = await driver.writeFile("trainpavach/text/Homework06.txt", "ok");
    // console.log(results1);
    
    let results2 = await driver.deleteFile("test.txt");
    console.log(results2);
  }
}

exports = module.exports = TestCommand;