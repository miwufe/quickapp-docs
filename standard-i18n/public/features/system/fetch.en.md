# Data request

## Interface declaration

```
{"name": "system.fetch"}
```

## Import module

```
import fetch from '@system.fetch' or var fetch = require("@system.fetch")
```

## Interface definition

### fetch.fetch(OBJECT)

Get network data

#### Parameters:

| Parameter name | Type          | Required | Description                              |
| -------------- | ------------- | -------- | ---------------------------------------- |
| url            | String        | Yes      | Resource URL                             |
| data           | String/Object | No       | The requested parameter, it can be a string or a JSON object. If it is a string, its value acts as the request's body, if a Content-Type hasn't been set for the header, then it will set as text/plain by default. If it's a JSON object, then all of its attributes will use urlencode to form a string to act as the request's body, the Content-Type requested will be forcibly set as application/x-www-form-urlencoded. Example: {"name": "abc","count": 2} |
| header         | Object        | No       | The header requested, all of its attributes will be set to the requested header section. Useragent settings are invalid. Example: {"Accept-Encoding": "gzip, deflate","Accept-Language": "zh-CN,en-US;q=0.8,en;q=0.6"} |
| method         | String        | No       | Default is GET, it can be: OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT |
| responseType   | String        | No       | Type of response, it can be: text, json, file, arraybuffer. The default type will be determined by the Content-Type in response header, see to `Success return value`. |
| timeout        | Number        | No       | Specifies the timeout period(in seconds) to wait for the server to respond. Default value is 10. |
| success        | Function      | No       | The callback returned successfully       |
| fail           | Function      | No       | Callback failed, possibly due to permissions failure |
| complete       | Function      | No       | Ended callback (implemented regardless of whether the call fails or succeeds) |

##### Success return value:

| Parameter name | Type    | Description                              |
| -------------- | ------- | ---------------------------------------- |
| code           | Integer | Server status code                       |
| data           | String  | If the type in the header returned by the server is text/* or application/json, application/javascript, application/xml, the value is the text content; otherwise, it is the URI temp file of the saved temp file. If the content is an image or video, then they can be set to be displayed to the image or video control |
| headers        | Object  | All headers of the server response       |

#### Example:

```
fetch.fetch({
  url:"http://www.example.com",
  success:function(data){
    console.log("title: " + JSON.parse(data.data).title);
  },
  fail: function(data, code) {
    console.log("handling fail, code=" + code);
  }
})
```