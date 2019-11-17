
/* global Carolina */

const expect = require('chai').expect;

const moment = require('moment');

describe("Cron Service", () => {
  
  it("Service exists.", () => {
    expect(Carolina.$("Cron")).to.exist;
  });
  it("Respects config value cron.isActive.", async () => {
    
    let CronSvc = Carolina.$("Cron");
    await CronSvc.stopService();
    await CronSvc.startService();
    
    if (Carolina.config("cron.isActive")) {
      expect(CronSvc.intervalId).to.not.be.null;
    }
    else {
      expect(CronSvc.intervalId).to.be.null;
    }
    
    await CronSvc.stopService();
  });
  
  describe("Job Library", () => {
    
    it("Contains included Job named ClearTmpJob.", () => {
      let CronSvc = Carolina.$("Cron");
      expect(() => { CronSvc._job("ClearTmpJob") }).to.not.throw();
    });
  });
  
  describe("Schedule Library", () => {
    
    it("Contains included Schedule named DaySchedule.", () => {
      let CronSvc = Carolina.$("Cron");
      expect(() => { CronSvc._schedule("DaySchedule") }).to.not.throw();
    });
    it("Contains included Schedule named MinuteSchedule.", () => {
      let CronSvc = Carolina.$("Cron");
      expect(() => { CronSvc._schedule("MinuteSchedule") }).to.not.throw();
    });
    it("Contains included Schedule named HourSchedule.", () => {
      let CronSvc = Carolina.$("Cron");
      expect(() => { CronSvc._schedule("HourSchedule") }).to.not.throw();
    });
    it("Contains included Schedule named MonthSchedule.", () => {
      let CronSvc = Carolina.$("Cron");
      expect(() => { CronSvc._schedule("MonthSchedule") }).to.not.throw();
    });
    it("Contains included Schedule named WeekSchedule.", () => {
      let CronSvc = Carolina.$("Cron");
      expect(() => { CronSvc._schedule("WeekSchedule") }).to.not.throw();
    });
  });
  
  describe("Schedules", () => {
    
    describe("DaySchedule" , () => {
      it("Schedules next run time properly.", () => {
        
        let DaySchedule = Carolina.$("Cron")._schedule('DaySchedule');
        let nextRunTime = DaySchedule.nextRunTime(moment(), { every: 5 });
        
        expect(nextRunTime.isAfter(moment().add({ days: 4 }))).to.be.true;
        expect(nextRunTime.isBefore(moment().add({ days: 6 }))).to.be.true;
      });
    });
    
    describe("HourSchedule" , () => {
      it("Schedules next run time properly.", () => {
        
        let HourSchedule = Carolina.$("Cron")._schedule('HourSchedule');
        let nextRunTime = HourSchedule.nextRunTime(moment(), { every: 5 });
        
        expect(nextRunTime.isAfter(moment().add({ hours: 4 }))).to.be.true;
        expect(nextRunTime.isBefore(moment().add({ hours: 6 }))).to.be.true;
      });
    });
    
    describe("MinuteSchedule" , () => {
      it("Schedules next run time properly.", () => {
        
        let MinuteSchedule = Carolina.$("Cron")._schedule('MinuteSchedule');
        let nextRunTime = MinuteSchedule.nextRunTime(moment(), { every: 5 });
        
        expect(nextRunTime.isAfter(moment().add({ minutes: 4 }))).to.be.true;
        expect(nextRunTime.isBefore(moment().add({ minutes: 6 }))).to.be.true;
      });
    });
    
    describe("MonthSchedule" , () => {
      it("Schedules next run time properly.", () => {
        
        let MonthSchedule = Carolina.$("Cron")._schedule('MonthSchedule');
        let nextRunTime = MonthSchedule.nextRunTime(moment(), { every: 5 });
        
        expect(nextRunTime.isAfter(moment().add({ months: 4 }))).to.be.true;
        expect(nextRunTime.isBefore(moment().add({ months: 6 }))).to.be.true;
      });
    });
    
    describe("WeekSchedule" , () => {
      it("Schedules next run time properly.", () => {
        
        let WeekSchedule = Carolina.$("Cron")._schedule('WeekSchedule');
        let nextRunTime = WeekSchedule.nextRunTime(moment(), { every: 5 });
        
        expect(nextRunTime.isAfter(moment().add({ weeks: 4 }))).to.be.true;
        expect(nextRunTime.isBefore(moment().add({ weeks: 6 }))).to.be.true;
      });
    });
  });
});
