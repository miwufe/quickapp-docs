# Uploading and downloading `101+`

## Interface declaration

```
{"name": "system.request"}
```

## Import module

```
import request from '@system.request' or var request = require("@system.request")
```

## Interface definition

### request.upload(OBJECT)

Upload files

#### Parameters:

| Parameter name | Type     | Required | Description                              |
| -------------- | -------- | -------- | ---------------------------------------- |
| url            | String   | Yes      | Resource URL                             |
| header         | Object   | No       | The header requested, all its attributes will be set to the requested header's section. The useragent setting is invalid |
| method         | String   | No       | The default is POST, it can be: POST, PUT |
| files          | Array    | Yes      | The file list that needs to be uploaded, submitted using the "multipart/form-data" method |
| success        | Function | No       | The callback returned successfully       |
| fail           | Function | No       | Failed callback                          |
| complete       | Function | No       | Ended callback (implemented whether the call fails or succeeds) |

##### Files parameters:

The files parameter is an array of the file target, the file target structure is as follows:

| Parameter name | Type   | Required | Description                              |
| -------------- | ------ | -------- | ---------------------------------------- |
| filename       | String | No       | The file name in the header when multipart is submitted |
| name           | String | No       | The form's project name when the multipart is submitted, default file |
| uri            | String | Yes      | Local address of the file                |
| type           | String | No       | The content-type format of the file, by default it is obtained according to the suffix of the filename or URI |

##### Success return value:

| Parameter name | Type    | Description                              |
| -------------- | ------- | ---------------------------------------- |
| code           | Integer | Server status code                       |
| data           | String  | If the type in the header returned by the server is text/* or application/json, application/javascript, application/xml, the value is the text content; otherwise, it is the URI temp file of the saved temp file. If the content is an image or video, then they can be set to be displayed to the image or video control |
| headers        | Object  | All headers of the server response       |

#### Example:

```
request.upload({
    "url": "http://www.example.com",
    "files": [
        {
            "uri": "internal://xxx/xxx/test",
            "name": "file1",
            "filename": "test.png"
        }
    ],
  　success:function(data){console.log("handling success");}
    fail: function(data, code) {
      console.log("handling fail, code=" + code);
    }
})
```

### request.download(OBJECT)

Download files

#### Parameters:

| Parameter name | Type     | Required | Description                              |
| -------------- | -------- | -------- | ---------------------------------------- |
| url            | String   | Yes      | Resource URL                             |
| header         | String   | No       | The header requested, all its attributes will be set to the requested header's section. The useragent setting is invalid |
| success        | Function | No       | The callback returned successfully       |
| fail           | Function | No       | Failed callback                          |
| complete       | Function | No       | Ended callback (implemented whether the call fails or succeeds) |

##### Success return value:

| Parameter name | Type   | Description                              |
| -------------- | ------ | ---------------------------------------- |
| token          | String | The downloaded token, get the download status according to this token |

#### Example:

```
request.download({
    "url": "http://www.example.com",
  　 success:function(data){console.log("handling success" + data.token);}
    fail: function(data, code) {
      console.log("handling fail, code=" + code);
    }
})
```

### request.onDownloadComplete(OBJECT)

Monitor download tasks

#### Parameters:

| Parameter name | Type     | Required | Description                              |
| -------------- | -------- | -------- | ---------------------------------------- |
| token          | String   | Yes      | Token returned by the download interface |
| success        | Function | No       | The callback returned successfully       |
| fail           | Function | No       | Failed callback                          |
| complete       | Function | No       | Ended callback (implemented regardless of whether the call fails or succeeds) |

##### Success return value:

| Parameter name | Type   | Description                |
| -------------- | ------ | -------------------------- |
| uri            | String | URI of the downloaded file |

##### Fail return error code:

| Error code | Description                 |
| ---------- | --------------------------- |
| 1000       | Download failed             |
| 1001       | Download task doesn't exist |

#### Example:

```
request.onDownloadComplete({
    "token": "123",
  　 success:function(data){
      console.log("handling success" + data.uri);
    }
    fail: function(data, code) {
      console.log("handling fail, code=" + code);
    }
})
```