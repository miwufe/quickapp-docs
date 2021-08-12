# Home screen icons

## Interface declaration

```
{"name": "system.shortcut"}
```

## Import module

```
import shortcut from @system.shortcut or var shortcut = require("@system.shortcut")
```

## Interface definition

### shortcut.hasInstalled(OBJECT)

Get whether the Home screen icon has been created

#### Parameters:

| Parameter name | Type     | Required | Description                              |
| -------------- | -------- | -------- | ---------------------------------------- |
| success        | Function | No       | Callback succeeded. Parameters: true = has been created, false = hasn't been created |
| fail           | Function | No       | Couldn't return callback                 |
| complete       | Function | No       | The callback after the implementation finished |

#### Example:

```
shortcut.hasInstalled({
  success:function(){console.log("handling success");}
});
```

<!-- ### shortcut.install(OBJECT)

Create Home screen icons

#### Parameters:

| Parameter name | Type     | Required | Description                              |
| -------------- | -------- | -------- | ---------------------------------------- |
| success        | Function | No       | Callback succeeded                       |
| fail           | Function | No       | Couldn't return callback                 |
| complete       | Function | No       | The callback returned after the implementation finished |

##### Fail return error code `101+`

| Error code | Description                              |
| ---------- | ---------------------------------------- |
| 201        | User denied permission, couldn't get permission to get Home screen icon |

#### Example:

```
shortcut.install({
  success:function(){console.log("handling success");}
});
``` -->