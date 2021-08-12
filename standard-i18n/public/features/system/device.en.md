# Device information

## Interface declaration

```
{"name": "system.device"}
```

## Import module

```
import device from '@system.device' or var device = require("@system.device")
```

## Interface definition

### device.getInfo(OBJECT)

Get device information

#### Parameters:

| Parameter name | Type     | Required | Description                              |
| -------------- | -------- | -------- | ---------------------------------------- |
| success        | Function | No       | Callback succeeded                       |
| fail           | Function | No       | Couldn't return callback                 |
| complete       | Function | No       | The callback returned after the implementation finished |

##### Success return value:

| Parameter value     | Type    | Description                   |
| ------------------- | ------- | ----------------------------- |
| brand               | String  | Device brand                  |
| manufacturer        | String  | Device manufacturer           |
| model               | String  | Device model number           |
| product             | String  | Device code name              |
| osType              | String  | Operating system name         |
| osVersionName       | String  | Operating system version name |
| osVersionCode       | Integer | Operating system version code |
| platformVersionName | String  | Running platform version name |
| platformVersionCode | Integer | Running platform version code |
| language            | String  | System language               |
| region              | String  | System region                 |
| screenWidth         | Integer | Screen width                  |
| screenHeight        | Integer | Screen height                 |

#### Example:

```
device.getInfo({
  success:function(ret){console.log("handling success");}
})
```

<!-- ### device.getId(OBJECT)

Get device ID

#### Parameters:

| Parameter name | Type     | Required | Description                              |
| -------------- | -------- | -------- | ---------------------------------------- |
| type           | Array    | Yes      | Supports device, mac, and user, you can provide multiple ones at the same time, provide at least one |
| success        | Function | No       | Callback succeeded, the parameters are: {"device":"1234567890","mac":"abcdef123456","user":"abcdef123456"} Every result will only return MAC when there is a corresponding type in the type, in Android M and later versions, a fixed value is returned: 02:00:00:00:00:00 |
| fail           | Function | No       | Couldn't return callback                 |
| complete       | Function | No       | The callback returned after the implementation finished |

##### Success return value:

| Parameter name | Type   | Description               |
| -------------- | ------ | ------------------------- |
| device         | String | Device unique identifier  |
| mac            | String | MAC address of the device |
| user           | String | User unique identifier    |

##### Fail return error code `101+`

| Error code | Description                              |
| ---------- | ---------------------------------------- |
| 201        | User denied permission, couldn't get call status permission |

#### Example:

```
device.getId({
  type: ["device", "mac"],
  success:function(data) {
    console.log("handling success: " + data.device);
  },
  fail: function(data, code) {
    console.log("handling fail, code=" + code);
  }
})
``` -->