# Geolocation

## Interface declaration

```
{"name": "system.geolocation"}
```

## Import module

```
import geolocation from '@system.geolocation' or var geolocation = require("@system.geolocation")
```

## Interface definition

### geolocation.getLocation(OBJECT)

Get geolocation

#### Parameters:

| Parameter name | Type     | Required | Description                              |
| -------------- | -------- | -------- | ---------------------------------------- |
| timeout        | Long     | No       | Set timeout time, unit in ms, the default is 1000. When permission has been denied by the system or the location settings aren't suitable, a result may never be returned, therefore a timeout must be set. After timing out, it will use the fail callback |
| success        | Function | Yes      | Callback succeeded                       |
| fail           | Function | No       | Couldn't return callback, possibly because the user denied permission |
| complete       | Function | No       | The callback returned after the implementation finished |

##### Success return value:

| Parameter name | Type  | Description |
| -------------- | ----- | ----------- |
| longitude      | Float | Longitude   |
| latitude       | Float | Latitude    |

##### Fail return error code `101+`

| Error code | Description                              |
| ---------- | ---------------------------------------- |
| 201        | User denied, couldn't get location permission |

#### Example:

```
geolocation.getLocation({
  success:function(data){
    console.log("handling success: longitude=" + data.longitude + ", latitude=" + data.latitude);
  },
  fail: function(data, code) {
    console.log("handling fail, code=" + code);
  }
})
```

<!-- ### geolocation.subscribe(OBJECT)

Monitor geolocation. If called multiple times, it will only take effect the last time

#### Parameters:

| Parameter name | Type     | Required | Description                              |
| -------------- | -------- | -------- | ---------------------------------------- |
| callback       | Function | Yes      | Every time there is a change in location information, it will return a callback |
| fail           | Function | No       | Couldn't return callback, possibly because the user denied permission |

##### Callback return value:

| Parameter name | Type  | Description |
| -------------- | ----- | ----------- |
| longitude      | Float | Longitude   |
| latitude       | Float | Latitude    |

##### Fail return error code `101+`

| Error code | Description                              |
| ---------- | ---------------------------------------- |
| 201        | User denied, couldn't get location permission |

#### Example:

```
geolocation.subscribe({
  callback:function(data) {
    console.log("handling success: longitude=" + data.longitude + ", latitude=" + data.latitude);
  },
  fail: function(data, code) {
    console.log("handling fail, code=" + code);
  }
})
```

### geolocation.unsubscribe()

Cancel monitoring geolocation

#### Parameters:

None

#### Example:

```
geolocation.unsubscribe()
``` -->