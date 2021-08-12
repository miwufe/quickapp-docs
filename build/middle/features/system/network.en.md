# Network status

## Interface declaration

```
{"name": "system.network"}
```

## Import module

```
import network from '@system.network' or var network = require("@system.network")
```

## Interface definition

### network.getType(OBJECT)

Get network type

#### Parameters:

| Parameter name | Type     | Required | Description                              |
| -------------- | -------- | -------- | ---------------------------------------- |
| success        | Function | No       | Callback succeeded                       |
| fail           | Function | No       | Couldn't return callback, possibly due to lack of permission |
| complete       | Function | No       | The callback returned after the implementation finished |

##### Success return value:

| Parameter name | Type    | Description                              |
| -------------- | ------- | ---------------------------------------- |
| type           | String  | Network type, possible values are 2G, 3G, 4G, Wi-Fi, none |

#### Example:

```
network.getType({
  success:function(data){console.log("handling success: " + data.type);}
})
```

### network.subscribe(OBJECT)

Monitor network connection status. If called multiple times, it will only take effect the last time

#### Parameters:

| Parameter name | Type     | Required | Description                              |
| -------------- | -------- | -------- | ---------------------------------------- |
| callback       | Function | No       | Every time the network changes a callback will be returned |
| fail           | Function | No       | Couldn't return callback, possibly due to lack of permission |

##### Callback return value:

| Parameter name | Type    | Description                              |
| -------------- | ------- | ---------------------------------------- |
| metered        | Boolean | Whether it's billed according to the data plan |
| type           | String  | Network type, possible values are 2G, 3G, 4G, Wi-Fi, none |

#### Example:

```
network.subscribe({
  callback:function(data){console.log("handling callback");}
})
```

### network.unsubscribe()

Cancel monitoring network connection status

#### Parameters:

None

#### Example:

```
network.unsubscribe()
```