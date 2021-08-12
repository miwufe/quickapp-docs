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

### file.writeText(OBJECT)

Write text to file

#### Parameters.

| Parameter name| Types| Required| Description
|----------|----------|----------|----------
| uri| String| Yes| Local file paths, resource file paths and tmp partitions are not supported, files will be created if they do not exist
| text| String| Yes| String to be written
| encoding| String| No| Encoding format, default UTF-8
| append | Boolean| No| Append mode or not, default false
| success| Function| No| Successful callback
| fail| Function| No| Failure to callback
| complete| Function| No| Callback at the end of execution

##### fail returns the error code.

| Error code| Description
|----------|----------
| 202| Parameter error
| 300| I/O errors

#### Example:

```javascript
file.writeText({
  uri: 'internal://files/work/demo.txt',
  text: 'test',
  success: function() {
    console.log('handling success')
  },
  fail: function(data, code) {
    console.log(`handling fail, code = ${code}`)
  }
})
```

### file.writeArrayBuffer(OBJECT)

Write Buffer to File

#### Parameters.

| Parameter name| Types| Required| Description
|----------|----------|----------|----------
| uri| String| Yes| Local file paths, resource file paths and tmp partitions are not supported, files will be created if they do not exist
| buffer| Uint8Array| Yes| Buffer to be written
| position| Number| No| Offset pointing to the location where the file starts writing data, default 0
| append | Boolean| No| Whether it is append mode, default false. When true, the position parameter is invalid
| success| Function| No| Successful callback
| fail| Function| No| Failure to callback
| complete| Function| No| Callback at the end of execution

##### fail returns the error code.

| Error code| Description
|----------|----------
| 202| Parameter error
| 300| I/O errors

#### Example:

```javascript
file.writeArrayBuffer({
  uri: 'internal://files/work/demo',
  buffer: buffer,
  success: function() {
    console.log('handling success')
  },
  fail: function(data, code) {
    console.log(`handling fail, code = ${code}`)
  }
})
```

### file.readText(OBJECT)

Reading text from a file

#### Parameters.

| Parameter name| Types| Required| Description
|----------|----------|----------|----------
| uri| String| Yes| Local file path
| encoding| String| No| Encoding format, default UTF-8
| success| Function| No| Successful callback
| fail| Function| No| Failure to callback
| complete| Function| No| Callback at the end of execution

##### success Return value:

| Parameter name| Types| Description
|----------|----------|----------
| text| String| Text to be read

##### fail returns the error code.

| Error code| Description
|----------|----------
| 202| Parameter error
| 300| I/O errors
| 301| File does not exist

#### Example:

```javascript
file.readText({
  uri: 'internal://files/work/demo.txt',
  success: function(data) {
    console.log('text: ' + data.text)
  },
  fail: function(data, code) {
    console.log(`handling fail, code = ${code}`)
  }
})
```

### file.readArrayBuffer(OBJECT)

Read Buffer from file

#### Parameters.

| Parameter name| Types| Required| Description
|----------|----------|----------|----------
| uri| String| Yes| Local file path
| position| Number| No| The default value is the starting position of the file to be read
| length| Number| No| The length of the read, or the end of the file is read if not filled in
| success| Function| No| Successful callback
| fail| Function| No| Failure to callback
| complete| Function| No| Callback at the end of execution

##### success Return value:

| Parameter name| Types| Description
|----------|----------|----------
| buffer| Uint8Array| Contents of the file to be read

##### fail returns the error code.

| Error code| Description
|----------|----------
| 202| Parameter error
| 300| I/O errors
| 301| File does not exist

#### Example:

```javascript
file.readArrayBuffer({
  uri: 'internal://files/work/demo',
  position: 100,
  length: 100,
  success: function(data) {
    console.log('buffer.length: ' + data.buffer.length)
  },
  fail: function(data, code) {
    console.log(`handling fail, code = ${code}`)
  }
})
```

### file.access(OBJECT)

Determine if a file or directory exists

#### Parameters.

| Parameter name| Types| Required| Description
|----------|----------|----------|----------
| uri| String| Yes| Directory or file uri, cannot be an application resource path and tmp type uri. Support for application resource paths
| success| Function| No| Successful callback
| fail| Function| No| Failure to callback
| complete| Function| No| Callback at the end of execution

##### fail returns the error code.

| Error code| Description
|----------|----------
| 202| Parameter error
| 300| I/O errors

#### Example:

```javascript
file.access({
  uri: 'internal://files/test',
  success: function(data) {
    console.log(`handling success`)
  },
  fail: function(data, code) {
    console.log(`handling fail, code = ${code}`)
  }
})
```

### file.mkdir(OBJECT)

Create a directory

#### Parameters.

| Parameter name| Types| Required| Description
|----------|----------|----------|----------
| uri| String| Yes| directory uri, not uri of application resource paths and type tmp
| recursive| Boolean| No| Whether to recursively create the directory after creating the directory's parent directory. Default false
| success| Function| No| Successful callback
| fail| Function| No| Failure to callback
| complete| Function| No| Callback at the end of execution

##### fail returns the error code.

| Error code| Description
|----------|----------
| 202| Parameter error
| 300| I/O errors

#### Example:

```javascript
file.mkdir({
  uri: 'internal://files/dir/',
  success: function(data) {
    console.log(`handling success`)
  },
  fail: function(data, code) {
    console.log(`handling fail, code = ${code}`)
  }
})
```

### file.rmdir(OBJECT)

Delete Directory

#### Parameters.

| Parameter name| Types| Required| Description
|----------|----------|----------|----------
| uri| String| Yes| directory uri, not uri of application resource paths and type tmp
| recursive| Boolean| No| Whether to recursively delete subfiles and subdirectories. Default false
| success| Function| No| Successful callback
| fail| Function| No| Failure to callback
| complete| Function| No| Callback at the end of execution

##### fail returns the error code.

| Error code| Description
|----------|----------
| 202| Parameter error
| 300| I/O errors

#### Example:

```javascript
file.rmdir({
  uri: 'internal://files/dir/',
  success: function(data) {
    console.log(`handling success`)
  },
  fail: function(data, code) {
    console.log(`handling fail, code = ${code}`)
  }
})
```