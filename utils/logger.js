//临时日志输出, TODO

/*
 {
 "type": "file",//输出类型
 "filename": "./logs/test.log",//输出文件路径
 "pattern": "-yyyy-MM-dd-hh.log",//输出文件名格式，接在filename后面
 "category":"game"  //日志tag
 }

 文件日志等级：
 由低到高：ALL->TRACE->DEBUG->INFO->WARN->ERROR->FATAL->OFF

 * */

var log4js = require('log4js');

var logAppenders = {
    OrderMaster: {
        "type": "dateFile",
        "filename": "./logs/persistence",
        "pattern": "_yyyy_MM_dd.log",
        "alwaysIncludePattern": true,
        "category": "OrderMaster"
    },

};

var logLevels = {
    OrderMaster: "ALL",
};

var logAppender = logAppenders[process.title];
if (!logAppender) {
    console.error('!logConfig:', process.title);
    process.exit(1);
    return;
}
if (process.argv.length >= 2 && parseInt(process.argv[2])) {
    logAppender['filename'] = logAppender['filename'] + '_' + process.argv[2];
}
var logLevel = logLevels[process.title];
if (!logLevel) {
    console.error('!logLevel, default to ALL:', process.title);
    logLevel = "ALL";
}

log4js.configure({
    "replaceConsole": true,

    "appenders": {
        fileLog: {
            "type": "dateFile",
            "filename": "./logs/ordermaster",
            "pattern": "_yyyy_MM_dd.log",
            "alwaysIncludePattern": true,
            "category": "GM"
        },
        out: {type: 'console'}
    },
    "categories": {
        fileLog: {appenders: ['fileLog'], level: 'info'},
        out: {appenders: ['out'], level: 'info'},
        default: {appenders: ['out', 'fileLog'], level: 'info'}
    }

});
var logger = log4js.getLogger(process.title);
//logger.setLevel(logLevel);

console.log('log level:', logLevel);

module.exports = logger;