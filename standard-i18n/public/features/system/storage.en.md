# Data storage

## Interface declaration

```
{"name": "system.storage"}
```

## Import module

```
import storage from '@system.storage' or var storage = require("@system.storage")
```

## Interface definition

### storage.get(OBJECT)

Read stored content

#### Parameters:

| Parameter name | Type     | Required | Description                              |
| -------------- | -------- | -------- | ---------------------------------------- |
| key            | String   | Yes      | Index                                    |
| default        | String   | No       | If there is no key, default will be returned. If the default hasn't been specified, an empty string with a length of 0 will be returned |
| success        | Function | No       | Callback succeeded                       |
| fail           | Function | No       | Couldn't return callback                 |
| complete       | Function | No       | The callback after the implementation finished |

##### Success return value:

The stored content corresponding to the key

#### Example:

```
storage.get({
  key: 'A1',
  success:function(data){console.log("handling success");},
  fail: function(data, code) {
    console.log("handling fail, code=" + code);
  }
})
```

### storage.set(OBJECT)

Modify stored content

#### Parameters:

| Parameter name | Type     | Required | Description                              |
| -------------- | -------- | -------- | ---------------------------------------- |
| key            | String   | Yes      | Index                                    |
| value          | String   | No       | New value. If the new value is an empty string with a length of 0, it will delete items of data that has the key as its index |
| success        | Function | No       | Callback succeeded                       |
| fail           | Function | No       | Couldn't return callback                 |
| complete       | Function | No       | The callback after the implementation finished |

#### Example:

```
storage.set({
  key: 'A1',
  value: 'V1',
  success:function(data){console.log("handling success");},
  fail: function(data, code) {
    console.log("handling fail, code=" + code);
  }
})
```

### storage.clear(OBJECT)

Clear stored data

#### Parameters:

| Parameter name | Type     | Required | Description                              |
| -------------- | -------- | -------- | ---------------------------------------- |
| success        | Function | No       | Callback succeeded                       |
| fail           | Function | No       | Couldn't return callback                 |
| complete       | Function | No       | The callback after the implementation finished |

#### Example:

```
storage.clear({
  success:function(data){console.log("handling success");},
  fail: function(data, code) {
    console.log("handling fail, code=" + code);
  }
})
```

### storage.delete(OBJECT)

Delete stored content

#### Parameters:

| Parameter name | Type     | Required | Description                              |
| -------------- | -------- | -------- | ---------------------------------------- |
| key            | String   | Yes      | Index                                    |
| success        | Function | No       | Callback succeeded                       |
| fail           | Function | No       | Couldn't return callback                 |
| complete       | Function | No       | The callback after the implementation finished |

#### Example:

```
storage.delete({
  key: 'A1',
  success:function(data){console.log("handling success");},
  fail: function(data, code) {
    console.log("handling fail, code=" + code);
  }
})
```

#### storage.keys(OBJECT)

Returns the key names in the store

##### Parameters.

| Parameter name| Types| Required| Description
|----------|----------|----------|----------
| success| Function| No| Successful callback
| fail| Function| No| Failure to callback
| complete| Function| No| Callback at the end of execution

##### success Return value:

| Parameter name   | Type  | Description  |
| -------- | ----- | -------------------------------------- |
| data | Array<string> | An array of key names in the store |

##### Example:

```javascript
storage.keys({
  success: function(data) {
    console.log(`handling success, keys = ${JSON.stringify(data)}`)
  },
  fail: function(data, code) {
    console.log(`handling fail, code = ${code}`)
  }
})
```