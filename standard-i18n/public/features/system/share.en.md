# Sharing

## Interface declaration

```
{"name": "system.share"}
```

## Import module

```
import share from '@system.share' or var share = require("@system.share")
```

## Interface definition

### share.share(OBJECT)

Share data with other apps

#### Parameters:

| Parameter name | Type     | Required | Description                              |
| -------------- | -------- | -------- | ---------------------------------------- |
| type           | String   | Yes      | Data mime type, all lowercase letters required |
| data           | String   | Yes      | Shared data: 1. If the type is a mime type that starts with text/ (such as text/plain), then the data is the text content to be shared; 2. If the type is a different value, then the data is the file path to be shared. There are three file paths that are supported: 1. The file path downloaded through fetch.fetch; 2. The file path gotten through file.save or list; 3. Internal source files of the app starting with '/'. |
| success        | Function | No       | Callback successful. As the majority of Android apps don't have correct return sharing statuses, even if it was successfully shared, the cancel callback may be implemented instead of the success callback. |
| fail           | Function | No       | Couldn't return callback                 |
| cancel         | Function | No       | Cancel callback                          |
| complete       | Function | No       | The callback after the implementation finished |

#### Example:

```
share.share({
  type:"text/html",
  data:"<b>bold</b>",
  success:function(data){console.log("handling success");}
  fail: function(data, code) {
    console.log("handling fail, code=" + code);
  }
});
```