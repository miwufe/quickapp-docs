# Multimedia

## Interface declaration

```
{"name": "system.media"}
```

## Import module

```
import media from '@system.media' or var media = require("@system.media")
```

## Interface definition

### media.takePhoto(OBJECT)

Take a photo

#### Parameters:

| Parameter name | Type     | Required | Description                              |
| -------------- | -------- | -------- | ---------------------------------------- |
| cancel         | Function | No       | Cancel callback                          |
| success        | Function | No       | Callback succeeded                       |
| fail           | Function | No       | Couldn't return callback                 |
| complete       | Function | No       | The callback returned after the implementation finished |

##### Success return value:

| Parameter name | Type   | Description        |
| -------------- | ------ | ------------------ |
| uri            | String | Selected file path |

##### Fail return error code `101+`

| Error code | Description                              |
| ---------- | ---------------------------------------- |
| 201        | User denied, couldn't get camera permissions |

#### Example:

```
media.takePhoto({
  success:function(data){console.log("handling success: " + data.uri);}
})
```

### media.takeVideo(OBJECT)

Take a video

#### Parameters:

| Parameter name | Type     | Required | Description                              |
| -------------- | -------- | -------- | ---------------------------------------- |
| cancel         | Function | No       | Cancel callback                          |
| success        | Function | No       | Callback succeeded, the parameter is {uri: '<file:///video.avi>'} |
| fail           | Function | No       | Couldn't return callback                 |
| complete       | Function | No       | The callback returned after the implementation finished |

##### Success return value:

| Parameter name | Type   | Description        |
| -------------- | ------ | ------------------ |
| uri            | String | Selected file path |

##### Fail return error code `101+`

| Error code | Description                              |
| ---------- | ---------------------------------------- |
| 201        | User denied, couldn't get camera permissions |

#### Example:

```
media.takeVideo({
  success:function(data){console.log("handling success: " + data.uri);},
  fail: function(data, code) {
    console.log("handling fail, code=" + code);
  }
})
```

### media.pickImage(OBJECT)

Select an image

#### Parameters:

| Parameter name | Type     | Required | Description                              |
| -------------- | -------- | -------- | ---------------------------------------- |
| cancel         | Function | No       | Cancel callback                          |
| success        | Function | No       | Callback succeeded                       |
| fail           | Function | No       | Couldn't return callback                 |
| complete       | Function | No       | The callback returned after the implementation finished |

##### Success return value:

| Parameter name | Type   | Description        |
| -------------- | ------ | ------------------ |
| uri            | String | Selected file path |

#### Example:

```
media.pickImage({
    success:function(data){console.log("handling success: " + data.uri);}
})
```

### media.pickVideo(OBJECT)

Select a video

#### Parameters:

| Parameter name | Type     | Required | Description                              |
| -------------- | -------- | -------- | ---------------------------------------- |
| cancel         | Function | No       | Cancel callback                          |
| success        | Function | No       | Callback succeeded                       |
| fail           | Function | No       | Couldn't return callback                 |
| complete       | Function | No       | The callback returned after the implementation finished |

##### Success return value:

| Parameter name | Type   | Description        |
| -------------- | ------ | ------------------ |
| uri            | String | Selected file path |

#### Example:

```
media.pickVideo({
  success:function(data){console.log("handling success: " + data.uri);},
  fail: function(data, code) {
    console.log("handling fail, code=" + code);
  }
})
```