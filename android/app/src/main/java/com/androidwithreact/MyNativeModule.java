
package com.androidwithreact;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.Promise; // Import the Promise class

public class MyNativeModule extends ReactContextBaseJavaModule {
    public MyNativeModule(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    public String getName() {
        return "MyNativeModule";
    }

    @ReactMethod
    public void sayHelloFromAndroid(String message, Promise promise) {
        String helloMessage = "Hello from Android: " + message;
        for(int i=0;i<2000;i++)
        {
            helloMessage=helloMessage+" "+i;
        promise.resolve(helloMessage);
        }
    }
}
