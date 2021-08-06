# Sharing to a third party platform `101+`

## Interface declaration

```
{"name": "service.share","params": {"appSign": "abcdefg...","qqKey":"1234567","wxKey":"wx1234","sinaKey":"1234"}}
```

## Import module

```
import share from '@service.share' or var share = require("@service.share")
```

## Interface definition

### share.share(OBJECT)

Content of the shared message

#### Parameters:

| Parameter | Type     | Required                             | Description                              |
| --------- | -------- | ------------------------------------ | ---------------------------------------- |
| shareType | int      | Yes                                  | Types of shared items. By default, 0 indicates the text and image, 1 - text only, 2 - image only, 3 - music, and 4 - video. |
| title     | String   | Types of 0, 1, 3, and 4 are required | Title of the shared message              |
| summary   | String   | No                                   | Summary of the shared message            |
| targetUrl | String   | Types of 0, 3, and 4 are required    | The URL to be switched to after tapping  |
| imagePath | String   | Types of 2, 3, and 4 are required    | Local address of shared images/thumbnails |
| mediaUrl  | String   | Types of 3 and 4 are required        | URL of shared music/video data           |
| success   | Function | No                                   | Callback succeeded (temporarily not supported) |
| fail      | Function | No                                   | Couldn't return callback                 |
| cancel    | Function | No                                   | Cancel callback                          |

#### Example：

```
share.share({
    shareType:0,
    title:"I'm a title",
    summary:"I'm an abstract",
    imagePath:"xxx/xxx/xxx/share.jpg",
    targetUrl:"http://www.example.com",
    success:function(data){console.log("handling success");}，
    fail: function(data, code) {
        console.log("handling fail, code=" + code);
    }
})
```

### Access

1. To arrange access, refer to the documents of the third party platforms [WeChat Open Platform](https://open.weixin.qq.com/)/[Tencent Open Platform](http://open.qq.com/)/[Weibo Open Platform](http://open.weibo.com/)
2. Add a new app in the background of the third party platform, make sure its package name is consistent with that of the package in the manifest.json.
3. Fill the value of app signature (Obtaining appSign: Build an APK, and make sure the signature of this APK is consistent with that registered on the third party background. After you install the APK, get the appSign by [this tool](AppSignGetter.apk)) and the app IDs that obtained from various platforms in the appSign declared by the sharing interface of the manifest.json and corresponding xxKey fields, refer to the text above.
4. Mobile QQ, WeChat, and Weibo sharing are supported. Can't get sharing results currently.
5. It's recommended to share with image & text type. Other types may not be supported on some platforms, therefore image & text type should be used for sharing.
6. Image sharing only supports local images