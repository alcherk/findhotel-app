(function (global) {
	var AppsFlyer;
	AppsFlyer = function () {
	};

	function isString(value) {
		return (typeof value !== 'undefined') && (typeof value === 'string');
	}

	AppsFlyer.prototype.notifyAppID = function (appId, devKey, eventName, eventValue) {
		if (isString(appId) &&
				isString(devKey)) {
			if (isString(eventName) &&
					eventName.length > 0) {
				cordova.exec(null, null, "AppsFlyerPlugin", "notifyAppID", [appId, devKey, eventName, eventValue]);
			} else {
				cordova.exec(null, null, "AppsFlyerPlugin", "notifyAppID", [appId, devKey]);
			}
		}
	};

	global.cordova.addConstructor(function() {
		if (!global.Cordova) {
			global.Cordova = global.cordova;
		};

		if (!global.plugins) {
			global.plugins = {};
		}

		global.plugins.appsFlyer = new AppsFlyer();
	});
}(window));