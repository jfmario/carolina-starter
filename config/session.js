
/**
 * Configuration for the Session core service
 */
exports = module.exports = {

  /**
   * Path within project to store session JSON files.
   * Only used by JsonFilesSessionService.
   */
  sessionFilesDir: "storage/session/",
  
  /**
   * Host and port for redis server.
   * Only used by RedisSessionService.
   */
  redisHost: process.env.REDIS_HOST || "127.0.0.1",
  redisPort: parseInt(process.env.REDIS_PORT) || 6379
  
};