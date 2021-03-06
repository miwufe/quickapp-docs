# WeChat Pay `101+`

## Interface declaration

```
{"name": "service.wxpay", "params": {"package": "com.your.package", "sign": "abcdefg", "url": "http://your.domain/page"}}
```

## Import module

```
import wxpay from '@service.wxpay' or var wxpay = require("@service.wxpay")
```

## Interface definition

### wxpay.getType()

Get the currently available WeChat Pay call method

#### Parameters:

None

#### Return value：

| Return value | Notes                                    |
| ------------ | ---------------------------------------- |
| none         | WeChat hasn't been installed             |
| APP          | WeChat app call method, when the service is placing the order to WeChat, the trade_type needs the app, see [WeChat Pay (app)](https://pay.weixin.qq.com/wiki/doc/api/app/app.php?chapter=9_1) |
| MWEB         | WeChat web page call method, when the server is placing the order to WeChat, trade_type needs MWEB, see [WeChat Pay (web)](https://pay.weixin.qq.com/wiki/doc/api/H5.php?chapter=9_20) |

### wxpay.pay(OBJECT)

Launch WeChat Pay

#### Parameters:

| Parameter name | Type     | Required | Description                              |
| -------------- | -------- | -------- | ---------------------------------------- |
| prepayid       | String   | Yes      | The prepaid order ID generated by the WeChat server, see [WeChat Pay (app)](https://pay.weixin.qq.com/wiki/doc/api/app/app.php?chapter=9_1) and [WeChat Pay (web)](https://pay.weixin.qq.com/wiki/doc/api/H5.php?chapter=9_20) |
| extra          | Object   | Yes      | The current payment method, must fill in extra order information, for specifics, see the extra parameters description below |
| success        | Function | No       | The callback function after the user has paid. With the app method, the callback happens after the user has completed the payment, with the web page method, the callback happens after the order has been submitted to the WeChat app |
| fail           | Function | No       | Couldn't return callback                 |
| cancel         | Function | No       | Cancel callback                          |

#### Extra parameters:

##### App payments

| Field name    | Required | Description                              |
| ------------- | -------- | ---------------------------------------- |
| app_id        | Yes      | The app_id in the WeChat Pay order       |
| partner_id    | Yes      | The partner_id in the WeChat Pay order   |
| package_value | Yes      | The package_value in the WeChat Pay order |
| nonce_str     | Yes      | The nonce_str in the WeChat Pay order    |
| time_stamp    | Yes      | The time_stamp in the WeChat Pay order   |
| order_sign    | Yes      | The order_sign in the WeChat Pay order   |

##### Web payments

| Field name  | Required | Description                              |
| ----------- | -------- | ---------------------------------------- |
| mweb_url    | No       | When a payment action has been completed by WeChat server, the MWEB_URL in the result will be used as the"Get" parameter to be passed to the WeChat H5 payment webpage. |
| custome_key | No       | Other custom key values, you can add other key names and values you think you need according to your own requirements |

#### Success return value:

| Parameter name | Type   | Description                              |
| -------------- | ------ | ---------------------------------------- |
| prepayid       | String | Only appears in the app payment method, the prepay ID of the WeChat Pay order |
| final_url      | String | Only appears in the web page method, after joining the parameters, it will be used to open the web page URL |

#### Fail return error code:

| Error code | Description                              |
| ---------- | ---------------------------------------- |
| 900        | Error in the app signature configured in the manifest.json, can't be parsed |
| 901        | Error in the package name configured in the manifest.json |
| 1000       | WeChat hasn't been installed             |
| 1001       | Used for when the URL configuration of the WeChat web page payment method can't be found |
| 2001       | The order has already been submitted to WeChat, but WeChat returned an error, possible reasons are: signature error, unregistered appID, incorrect project appID set, registered appID and set appID mismatch, other abnormalities etc. |

#### Example

```
useWxpay: function() {
    var payType = wxpay.getType();
    if (payType == 'APP') {
        wxpay.pay({
            //Prepay ID of WeChat app payment
            prepayid: 'your order prepayid,eg: wx20170101abcdef1234567890',
            extra: {
                app_id: 'your app_id',
                partner_id: 'your partner_id',
                package_value: 'your package_value',
                nonce_str: 'your nonce_str',
                time_stamp: 'your time_stamp',
                order_sign: 'your order sign'
            },
            fail: function(data, code) {
                console.log("WX PAY failed, code=" + code);
            },
            cancel: function(data) {
                console.log("WX PAY cancelled by user");
            },
            success: function(data) {
                console.log("WX PAY success");
            }
        })
    } else if (payType == 'MWEB') {
        wxpay.pay({
            //Prepay ID of the WeChat web page payment
            prepayid: 'your order prepayid,eg: wx20170101abcdef1234567890',
            extra: {
                //Custom parameters transmitted to the pay page, set up as required, after it has been urlEncode it will be joined to the end of the configured URL
                mweb_url: 'https://wx.tenpay.com/cgi-bin/mmpayweb-bin',
                customeKey1: 'customeValue1',
                customeKey2: 'customeValue2'
            },
            fail: function(data, code) {
                console.log("WX H5 PAY handling fail, code=" + code);
            },
            cancel: function(data) {
                console.log("WX H5 PAY handling cancel");
            },
            success: function(data) {
                //In the H5 method, the pay success callback only signifies that the order has been submitted to WeChat and doesn't mean that the payment has completed
                console.log("WX H5 PAY handling success");
            }
        })
    } else {
        console.log("wx pay not avaliable.");
    }
}
```

## Access description

### Method selection

The app payment method is only supported on some phone systems, whereas the web page method is supported by all phone systems. However, the the web page payment produces a pay callback after the order has been submitted to WeChat, unlike like the app method, which does it when the payment produces a result. We recommend that the CP supports both of these access payment methods.

### App payment access

1. See [WeChat Pay (app)](https://pay.weixin.qq.com/wiki/doc/api/app/app.php?chapter=9_1) to complete WeChat Pay server access
2. Add a new app to the WeChat Pay background. This app must have a new package name and can't conflict with your own app's package name. It doesn't need to be released, but you must submit an APK to register the app signature corresponding to the new package name
3. Add the values of the newly registered app package name and app signature to the 'package' and 'sign' fields of the manifest.json WeChat Pay interface declaration respectively (you can get the signature value by using [this tool](AppSignGetter.apk) after installing the newly registered APK), as is shown in the interface declaration

### Web page payment access

1. See [WeChat Pay (web)](https://pay.weixin.qq.com/wiki/doc/api/H5.php?chapter=9_20) to complete WeChat Pay server access
2. Provide an H5 page that launches payment to the server, this page reads the imported MWEB_URL and will then automatically skip to MWEB_URL
3. Write the URL corresponding to the payment H5 page from step 2 into the URL field of the manifest.json WeChat Pay interface declaration, as shown in the interface declaration