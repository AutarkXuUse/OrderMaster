'use strict'
var serverName='OrderMaster';
process.title=serverName;

const Hapi=require('hapi');
const ServerConfig=require('./config/server');
const Logger=require('./utils/logger');

const server=new Hapi.Server();

server.connection({host:'localhost',port:ServerConfig.serverPort});

server.route({
	path:'/',
	method:'GET',
	handler:function (res,reply) {
		return reply('OrderMaster is developing');
	}
});

server.start((err)=>{
	if(err){
		Logger.error('Server start failed,errMsg:'+err);
		return;
	}
	Logger.info("Server start successfully.");
	Logger.info("Server listening"+JSON.stringify(server.info));
})