
const path = require('path');

/**
 * Configuration for the Files services and its drivers.
 */
exports = module.exports = {
  
  /**
   * List any number of file drivers here, along with their configurations.
   * MUST have the drives temp, public, and private
   */
  fileDrives: {
    temp: {
      driver: "LocalFileDriver",
      basepath: path.join(process.cwd(), ".tmp")
    },
    'public': {
      driver: "LocalFileDriver",
      basepath: path.join(process.cwd(), "public", "files"),
      isPublic: true,
      // this should match
      publicPrefix: "/files/"
    },
    'private': {
      driver: "LocalFileDriver",
      basepath: path.join(process.cwd(), "storage", "files")
    }
  }
};