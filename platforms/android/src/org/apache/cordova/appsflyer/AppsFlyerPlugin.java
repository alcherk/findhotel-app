package org.apache.cordova.appsflyer;

import org.apache.cordova.CallbackContext;
import org.apache.cordova.CordovaPlugin;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import com.appsflyer.AppsFlyerLib;

import android.provider.Settings;
import android.util.Log;

public class AppsFlyerPlugin extends CordovaPlugin {
	
	@Override
	public boolean execute(String action, JSONArray args, CallbackContext callbackContext) throws JSONException {
		if ("notifyAppID".equals(action)) {
			notifyAppID(args);
			return true;
		}
		
		return false;
	}
	
	private void notifyAppID(JSONArray parameters) {	
		String appId = null;
		String devKey = null;
		String eventName = null;
		String eventValue = null;
		String uuid = Settings.Secure.getString(this.cordova.getActivity().getContentResolver(), android.provider.Settings.Secure.ANDROID_ID);
		
		try {
			appId = parameters.getString(0);
		} catch (JSONException e) {
			e.printStackTrace();
			return;
		}
		
		try {
			devKey = parameters.getString(1);
		} catch (JSONException e) {
			e.printStackTrace();
			return;
		}
		
		try {
			uuid = parameters.getString(2);
		} catch (JSONException e) {
			e.printStackTrace();
			return;
		}

		try {
			if (parameters.length() > 3) {
				eventName = parameters.getString(3);
				eventValue = parameters.getString(4);
			}
		} catch (JSONException e) {
			e.printStackTrace();
		}
		
		AppsFlyerLib.setAppUserId(uuid); 
		
		if (eventName != null && eventName != "null" && eventName.length() > 0) {
			AppsFlyerLib.sendTrackingWithEvent(this.cordova.getActivity().getApplicationContext(), devKey, eventName, eventValue);
		} else {
			AppsFlyerLib.sendTracking(this.cordova.getActivity().getApplicationContext(), devKey);
		}
	}
}
