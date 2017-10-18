'use strict'
var Logger = require('../utils/logger')

exports.genApisConfArray4Route = function (confData) {
	if (confData.length < 1) {
		Logger.error("No api configed");
		return;
	}

	var routerArr=[]
	for (var v of confData) {
		var routeOne={};
		routeOne['method']=v['method'];
		routeOne['path']=v['path'];
		routeOne['handler'];
		//TODO handler register
	}
}