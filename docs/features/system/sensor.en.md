# Sensors

## Interface declaration

```
{"name": "system.sensor"}
```

## Import module

```
import sensor from '@system.sensor' or var sensor = require("@system.sensor")
```

## Interface definition

### sensor.subscribeAccelerometer(OBJECT)

Monitor accelerometer data. If called more than once, only the last call takes effect

#### Parameters:

| Parameter name | Type     | Required | Description                              |
| -------------- | -------- | -------- | ---------------------------------------- |
| callback       | Function | Yes      | This function will be called back after there is a change in the accelerometer data, 5 times per second |

##### Callback return value:

| Parameter name | Type    | Description        |
| -------------- | ------- | ------------------ |
| x              | Integer | X-axis coordinates |
| y              | Integer | Y-axis coordinates |
| z              | Integer | Z-axis coordinates |

#### Example:

```
sensor.subscribeAccelerometer({
  callback:function(ret){console.log("handling callback");}
})
```

### sensor.unsubscribeAccelerometer()

Cancel monitoring accelerometer data

#### Parameters:

None

#### Example:

```
sensor.unsubscribeAccelerometer()
```

### sensor.subscribeCompass(OBJECT)

Monitor compass data. If it is called multiple times, only the last call will take effect

#### Parameters:

| Parameter name | Type     | Required | Description                              |
| -------------- | -------- | -------- | ---------------------------------------- |
| callback       | Function | Yes      | This function will be called back after there is a change in the accelerometer data, 5 times per second |

##### Callback return value:

| Parameter name | Type  | Description                |
| -------------- | ----- | -------------------------- |
| direction      | Float | Facing direction (degrees) |

#### Example:

```
sensor.subscribeCompass({
    callback:function(ret){console.log("handling callback");}
})
```

### sensor.unsubscribeCompass()

Cancel monitoring compass data

#### Parameters:

None

#### Example:

```
sensor.unsubscribeCompass()
```