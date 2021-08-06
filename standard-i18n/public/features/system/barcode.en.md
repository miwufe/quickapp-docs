# QR codes

## Interface declaration

```
{"name": "system.barcode"}
```

## Import module

```
import barcode from '@system.barcode' or var barcode = require("@system.barcode")
```

## Interface definition

### barcode.scan(OBJECT)

Scan QR code

#### Parameters:

| Parameter name | Type     | Required | Description                              |
| -------------- | -------- | -------- | ---------------------------------------- |
| success        | Function | No       | Callback succeeded                       |
| fail           | Function | No       | Couldn't return callback                 |
| cancel         | Function | No       | Cancel callback                          |
| complete       | Function | No       | The callback after the implementation finished |

##### Success return value:

| Parameter name | Type   | Description    |
| -------------- | ------ | -------------- |
| result         | String | Parsed content |

##### Fail return error code `101 +`

| Error code | Description                              |
| ---------- | ---------------------------------------- |
| 201        | User denied, couldn't get camera permissions |

#### Example:

```
barcode.scan({
  success:function(data){
    console.log("handling success: " + data.result);
  },
  fail: function(data, code) {
    console.log("handling fail, code=" + code);
  }
})
```