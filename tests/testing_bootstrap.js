
const path = require('path');

require('dotenv').config();

let isInitialized = false;

async function main() {
  
  if (isInitialized) {
    return;
  }
  
  console.log("Initializing test environment...");
  console.log();
  
  const Application = require('carolina/main/application');
  
  const Carolina = new Application(path.resolve(__dirname, '..'));
  global.Carolina = Carolina;
  
  // override config with testing values
  const testingConfig = require('./testing.config');
  for (let key in testingConfig.configOverrides) {
    Carolina._conf[key] = {
      ...(Carolina._conf[key]),
      ...(testingConfig.configOverrides[key])
    };
  }
  
  let globalServices = Carolina.config('app.services');
  for (let serviceName in globalServices) {
    
    Carolina.setService(serviceName, globalServices[serviceName]);
    
    // open Service to speed up testing later
    Carolina.$(serviceName)
  }
  
  // apply fixtures
  for (let i = 0; i < testingConfig.fixtures.length; ++i) {
    await Carolina.$('DB').applyFixture(testingConfig.fixtures[i]);
  }
  
  isInitialized = true;
}

exports = module.exports = main;