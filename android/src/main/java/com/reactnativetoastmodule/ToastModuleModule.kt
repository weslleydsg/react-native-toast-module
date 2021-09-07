package com.reactnativetoastmodule

import android.widget.Toast
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import com.facebook.react.bridge.Promise

class ToastModuleModule(reactContext: ReactApplicationContext) : ReactContextBaseJavaModule(reactContext) {
    override fun getName(): String {
        return "ToastModule"
    }

    @ReactMethod
    fun show(message: String, promise: Promise) {
      if (message.isEmpty())
        promise.reject("EmptyMessage", "A Toast Message must be not empty")
      else {
        promise.resolve(null)
        Toast.makeText(this.reactApplicationContext, message, Toast.LENGTH_SHORT).show()
      }
    }
}
