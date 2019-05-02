/**
 * initialize/app.js
 * Loads environment variables from .env and initializes the global
 * Carolina object.
 */


const path = require('path');

require('dotenv').config();

const Application = require('carolina/main/application');

const Carolina = new Application(path.resolve(__dirname, '..'));
global.Carolina = Carolina;

let globalServices = Carolina.config('app.services');
for (let serviceName in globalServices) {
  Carolina.setService(serviceName, globalServices[serviceName]);
}

// always load the Events Service first
const Events = Carolina.$("Events");

// callback function for system shutdown
async function onShutdown(obj, final=false) {
  if (final) {
    
    // let SystemShutdownEvent = Events._eventClass("SystemShutdownEvent");
    // let e = new SystemShutdownEvent(obj);
    
    // Events.fireEvent(e);

    for (let serviceName in Carolina.servicePaths) {
      let Service = Carolina.$(serviceName);
      await Service.onShutdown();
    }

    process.exit();
  }
  if (!final) {
    process.exit();
  }
}

// handle process.exit
process.on("exit", async () => { 
  await onShutdown({ reason: "process exit" }, true);
});

// handle Ctrl+C
process.on("SIGINT", async () => { 
  await onShutdown({ reason: "user interrupt" }, true);
});

// handle process kill
process.on("SIGTERM", async () => { 
  await onShutdown({ reason: "user interrupt" }, true);
});

// handle process kill
process.on("SIGUSR1", async () => { 
  await onShutdown({ reason: "kill process" }, true);
});

// handle uncaught exception
process.on("uncaughtException", () => {
  onShutdown({ reason: "uncaught exception", err: true });
});

exports = module.exports = Carolina;
