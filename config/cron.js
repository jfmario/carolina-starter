
/**
 * Configuration for the Cron Service
 */
exports = module.exports = {
  
  // whether or not the schedule should run
  isActive: true,
  
  // when to run jobs
  schedule: {
    'clearTmpDaily': {
      job: 'ClearTmpJob',
      args: { hours: 24 },
      when: {
        schedule: 'DaySchedule'
      }
    } 
  }
};