# App context

## Interface declaration

No declaration required

## Import module

```
import app from '@system.app' or var app = require("@system.app")
```

## Interface definition

### app.getInfo()

Get current app information

#### Parameters:

None

#### Return value：

| Parameter name | Type    | Description        |
| -------------- | ------- | ------------------ |
| packageName    | String  | App package name   |
| icon           | String  | File path of app's icon   |
| name           | String  | App name           |
| versionName    | String  | App version name   |
| versionCode    | Integer | App version number |
| logLevel       | String  | Log level          |
| source         | Object  | App source         |

##### source

| Parameter name | Type   | Description                              |
| -------------- | ------ | ---------------------------------------- |
| packageName    | String | Source app package name, first level source |
| type           | String | Source type, second level source, the values are `shortcut`, `push`, `url`, `barcode`, `nfc`, `bluetooth`, `other` |
| extra          | Object | Other source-related information related to the type. Extras will be different for different types |

###### extra

- type=shortcut
  - Scene: third level source, means a scene of a shortcut created, the values are `dialog` (created a platform internal strategy dialog pop-up window), `API` ([created an API interface call](shortcut.md)), `web` (H5 station access traffic switch, created when browsing), `other`
  - original: original source, means the source when shortcut is created

#### Example:

```
console.log(JSON.stringify(app.getInfo()))
```
