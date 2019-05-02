
const path = require('path');

exports = module.exports = {
  
  fixtures: ["Test"],
  
  configOverrides: {
    
    db: {
      connections: {
        "default": {
          driver: "JsonConnection",
          path: "./data/test/"
        }
      },
      connectionMap: {}
    },
    email: {
      mailers: {
        
        // default mailer must FileMailer for Carolina testing to success
        'default': {
          driver: 'FileMailer',
          defaultFrom: "webmaster@example.com"
        }
      }
    },
    files: {
      fileDrives: {
        temp: {
          driver: "LocalFileDriver",
          basepath: path.join(process.cwd(), ".tmp")
        },
        'public': {
          driver: "LocalFileDriver",
          basepath: path.join(process.cwd(), ".tmp", "public"),
          isPublic: true,
          publicPrefix: "/files/"
        },
        'private': {
          driver: "LocalFileDriver",
          basepath: path.join(process.cwd(), ".tmp", "private")
        }
      }
    },
    logger: {
      logChannels: {

        main: {
          driver: 'FileLogger',
          level: 5,
          subDir: "testing",
          filePattern: "[].log"
        }
      }
    }
  }
};