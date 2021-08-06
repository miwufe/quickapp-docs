# File storage `101+`

## Interface declaration

```
{"name": "system.file"}
```

## Import module

```
import file from '@system.file' or var file = require("@system.file")
```

## Interface definition

### file.move(OBJECT)

Move the source file to a specified location, for details on the URIs used in the interface, see [File organization](../../framework/file-organization.md)

#### Parameters:

| Parameter name | Type     | Required | Description                              |
| -------------- | -------- | -------- | ---------------------------------------- |
| srcUri         | String   | Yes      | The URI of the source file, it can't be an app source file path and tmp type URI |
| dstUri         | String   | Yes      | The URI of the target file, it can't be an app source file path and tmp type URI |
| success        | Function | No       | Successful callback, returns the URI of the target file |
| fail           | Function | No       | Couldn't return callback                 |
| complete       | Function | No       | The callback after the implementation finished |

##### Fail return error code

| Error code | Description     |
| ---------- | --------------- |
| 202        | Parameter error |
| 300        | I/O error       |

#### Example:

```
file.move({
  srcUri: "internal://cache/path/to/file",
  dstUri: "internal://files/path/to/file",
  success: function(uri) {
    console.log("move success: " + uri);
  },
  fail: function(data, code) {
    console.log("handling fail, code=" + code);
  }
})
```

### file.copy(OBJECT)

Make a copy of the source file and save it to a specified location, for details on the URIs used in the interface, see [File organization](../../framework/file-organization.md)

#### Parameters:

| Parameter name | Type     | Required | Description                              |
| -------------- | -------- | -------- | ---------------------------------------- |
| srcUri         | String   | Yes      | URI of the source file                   |
| dstUri         | String   | Yes      | The URI of the target file, it can't be an app source file path and tmp type URI |
| success        | Function | No       | Successful callback, returns the URI of the target file |
| fail           | Function | No       | Couldn't return callback                 |
| complete       | Function | No       | The callback after the implementation finished |

##### Fail return error code

| Error code | Description     |
| ---------- | --------------- |
| 202        | Parameter error |
| 300        | I/O error       |

#### Example:

```
file.copy({
  srcUri: "internal://cache/path/to/file",
  dstUri: "internal://files/path/to/file",
  success: function(uri) {
    console.log("copy success: " + uri);
  },
  fail: function(data, code) {
    console.log("handling fail, code=" + code);
  }
})
```

### file.list(OBJECT)

Get the file list in a specified directory, for details on the URIs used in the interface, see [File organization](../../framework/file-organization.md)

#### Parameters:

| Parameter name | Type     | Required | Description                              |
| -------------- | -------- | -------- | ---------------------------------------- |
| uri            | String   | Yes      | Directory URI, it can't be an app source file path and tmp type URI |
| success        | Function | No       | Successful callback, returns {filelist:[{uri:'file1',lastModifiedTime:1234456, length:123456} ...]} |
| fail           | Function | No       | Couldn't return callback                 |
| complete       | Function | No       | The callback after the implementation finished |

##### Success return value:

| Parameter name | Type  | Description                              |
| -------------- | ----- | ---------------------------------------- |
| fileList       | Array | File list, the format of each file is {uri:'file1',lastModifiedTime:1234456, length:123456} |

###### The meta information of every file

| Parameter name   | Type   | Description                              |
| ---------------- | ------ | ---------------------------------------- |
| uri              | String | The file URI, this URI can be accessed by other components or features |
| length           | Number | File size, unit B                        |
| lastModifiedTime | Number | The timestamp of the saved file, the number of milliseconds from 1970/01/01 00:00:00 GMT to the current time |

##### Fail return error code

| Error code | Description     |
| ---------- | --------------- |
| 202        | Parameter error |
| 300        | I/O error       |

#### Example:

```
file.list({
  uri: "internal://files/movies/"
  success: function(data) {
    console.log(data.fileList)
  },
  fail: function(data, code) {
    console.log("handling fail, code=" + code);
  }
})
```

### file.get(OBJECT)

Get the file information of a local file, for details on the URIs used in the interface, see [File organization](../../framework/file-organization.md)

#### Parameters:

| Parameter name | Type     | Required | Description                              |
| -------------- | -------- | -------- | ---------------------------------------- |
| uri            | String   | Yes      | The URI of the file, it can't be an app source file path and tmp type URI |
| success        | Function | No       | Successful callback, returns {uri:'file1', length:123456, lastModifiedTime:1233456} |
| fail           | Function | No       | Couldn't return callback                 |
| complete       | Function | No       | The callback after the implementation finished |

##### Success return value:

| Parameter name   | Type   | Description                              |
| ---------------- | ------ | ---------------------------------------- |
| uri              | String | The file URI, this URI can be accessed by other components or features |
| length           | Number | File size, unit B                        |
| lastModifiedTime | Number | The timestamp of the saved file, the number of seconds from 1970/01/01 08:00:00 to the current time |

##### Fail return error code

| Error code | Description     |
| ---------- | --------------- |
| 202        | Parameter error |
| 300        | I/O error       |

#### Example:

```
file.get({
  uri: 'internal://files/path/to/file',
  success: function(data) {
    console.log(data.uri);
    console.log(data.length);
    console.log(data.lastModifiedTime);
  },
  fail: function(data, code) {
    console.log("handling fail, code=" + code);
  }
})
```

### file.delete(OBJECT)

Delete a locally saved file, for details on the URIs used in the interface, see [File organization](../../framework/file-organization.md)

#### Parameters:

| Parameter name | Type     | Required | Description                              |
| -------------- | -------- | -------- | ---------------------------------------- |
| uri            | String   | Yes      | The file URI that needs to be deleted, it can't be an app source file path and tmp type URI |
| success        | Function | No       | Callback succeeded                       |
| fail           | Function | No       | Couldn't return callback                 |
| complete       | Function | No       | The callback after the implementation finished |

##### Fail return error code

| Error code | Description     |
| ---------- | --------------- |
| 202        | Parameter error |
| 300        | I/O error       |

#### Example:

```
file.delete({
  uri: 'internal://files/path/to/file',
  success: function(data) {
    console.log("handling success");
  },
  fail: function(data, code) {
    console.log("handling fail, code=" + code);
  }
})
```