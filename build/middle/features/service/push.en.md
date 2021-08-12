# Push

## Interface declaration

```
{"name": "service.push"}
```

## Import module

```
import push from '@service.push' or var push = require("@service.push")
```

## Interface definition

### push.getProvider(OBJECT)

Get the provider of push service.

#### Parameters:

| Parameter name | Type     | Required | Description                              |
| -------------- | -------- | -------- | ---------------------------------------- |
| success        | Function | No       | Callback succeeded, returns the name of provider.   |
| fail           | Function | No       | Couldn't return callback, reason it couldn't return |
| complete       | Function | No       | The callback returned after the implementation finished |

#### Example:

```
push.getProvider({
  success: function(data) {
    console.log("push.subscribe succeeded, result data=" + JSON.stringify(data));
  },
  fail: function(data, code) {
    console.log("push.subscribe failed, result data=" + JSON.stringify(data) + ", code=" + code);
  },
  complete: function() {
    console.log("push.subscribe completed");
  }
});
```
<!-- ### push.subscribe(OBJECT)

Subscribe to push to receive push messages (generally it can be called where the app is initialized, e.g., call in the app's onCreate method)

#### Parameters:

| Parameter name | Type     | Required | Description                              |
| -------------- | -------- | -------- | ---------------------------------------- |
| success        | Function | No       | Callback succeeded, returns `regID`, used to send messages |
| fail           | Function | No       | Couldn't return callback, reason it couldn't return |
| complete       | Function | No       | The callback returned after the implementation finished |

#### Example:

```
push.subscribe({
  success: function(data) {
    console.log("push.subscribe succeeded, result data=" + JSON.stringify(data));
  },
  fail: function(data, code) {
    console.log("push.subscribe failed, result data=" + JSON.stringify(data) + ", code=" + code);
  },
  complete: function() {
    console.log("push.subscribe completed");
  }
});
```

### push.unsubscribe(OBJECT)

Unsubscribe (generally not recommended, after calling the regID will be invalidated and you need to subscribe again to get a new regID)

#### Parameters:

| Parameter name | Type     | Required | Description                              |
| -------------- | -------- | -------- | ---------------------------------------- |
| success        | Function | No       | Callback succeeded                       |
| fail           | Function | No       | Couldn't return callback, reason it couldn't return |
| complete       | Function | No       | The callback returned after the implementation finished |

#### Example:

```
push.unsubscribe({
  success: function(data) {
    console.log("push.unsubscribe succeeded, result data=" + JSON.stringify(data));
  },
  fail: function(data, code) {
    console.log("push.unsubscribe failed, result data=" + JSON.stringify(data) + ", code=" + code);
  },
  complete: function() {
    console.log("push.unsubscribe completed");
  }
});
```

### push.on(OBJECT)

Add push event callback (the payload content of transparent messages can be obtained in this callback)

#### Parameters:

| Parameter name | Type     | Required | Description                    |
| -------------- | -------- | -------- | ------------------------------ |
| callback       | Function | Yes      | Push event callback processing |

##### Callback return value:

| Parameter name | Type   | Description             |
| -------------- | ------ | ----------------------- |
| messageId      | String | Message ID              |
| data           | String | Message content payload |

#### Example:

```
push.on({
  callback: function(ret) {
    console.log("received pass through message, ret=" + JSON.stringify(ret));
  }
});
```

### push.off(OBJECT)

Remove push event callback, the `callback` in the `push.on` won't receive transparently transmitted content again

#### Parameters:

None

#### Example:

```
push.off();
``` -->

## Sending messages

### Sending from the operating platform

Operating platform address: <http://admin.xmpush.xiaomi.com>

### Sending from a server

#### Steps:

1. Server import: <mipush-server-java-for-hybrid-20170927.zip>, includes `json-simple-1.1.1.jar` and `xmpush-server-api-1.0.3.jar`

2. Register using `appID` and `appKey` allocated by Mi Server. After registering, a `regID` will be allocated to every device.

3. Send push messages through the

    

   ```
   appSecret 
   ```

   allocated by the Mi server (note: use the

    

   ```
   debug 
   ```

   mode for the app loader test).

   - To send to a single user: to send using `regID`, call the `sendHybridMessageByRegId` interface.
   - To send to all users: call the `broadcastHybridAll` interface.

4. Supports notification shade messages and transparent messages

   - Notification shade messages: a notification will appear on the phone's Notification shade, only when there is an icon on the Home screen will these notifications be received.
   - Transparent messages: You can send data transparently to an app, and it won't appear on the notification, set the callback through the `push.on` interface, only when the app is active can the `payload` content be received.

#### Example:

```
public class ServerDemoForHybrid {
    private static final String APP_SECRET = "The app's AppSecret";
    private static final String PACKAGE_NAME = "The app's package name";
    private static final String REGID = "The regID allocated after registering the app";

    private static final String HYBRID_PATH = "hybrid_pn";

    public static void main(String[] args) throws Exception {
        // Send notification shade message
        testSendNotificationMessage();

        // Send transparent transmission message
        testSendPassThroughMessage();
    }

    /**
     * Send notification shade message
     */
    public static void testSendNotificationMessage() throws Exception {
        List<String> list = new ArrayList<>();
        list.add(REGID);

        Sender sender = new Sender(APP_SECRET);
        Message message = new Message.Builder()
                .restrictedPackageName(PACKAGE_NAME)
                .passThrough(0)
                .notifyType(1) // Notification shade message notification type
                .notifyId(11) // NotifyID of the notification shade message, the message content will be changed when it's the same
                .title("Test regId message title sdk") // Title of the notification shade message
                .description("Test regId message desc12") // The desc of the notification message
                .extra(HYBRID_PATH, "/?x=aaa") // Open the app page path after tapping the notification shade,
 e.g.: /Detail?xxx=111 & yyy=222
                .build();
        // Result result = sender.sendHybridMessageByRegId(message, list, 0); // Use this interface when officially online
        Result result = sender.sendHybridMessageByRegId(message, list, true, 0);  // Use this interface when using outgoing app loader test
        System.out.println(result);
    }

    /**
     * Send transparent message
     */
    public static void testSendPassThroughMessage() throws Exception {
        List<String> list = new ArrayList<>();
        list.add(REGID);

        Sender sender = new Sender(APP_SECRET);
        Message message = new Message.Builder()
                .restrictedPackageName(PACKAGE_NAME)
                .passThrough(1)
                .payload("Test regId message payload sdk") // Data of the transparent message
                .build();
        // Result result = sender.sendHybridMessageByRegId(message, list, 0); // Use this interface when officially online
        Result result = sender.sendHybridMessageByRegId(message, list, true, 0);  // Use this interface when using outgoing app loader test
        System.out.println(result);
    }
}
```