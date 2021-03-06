# Alipay

## Interface declaration

```
{"name": "service.alipay"}
```

## Import module

```
import alipay from '@service.alipay' or var alipay = require("@service.alipay");
```

## Interface definition

### alipay.pay(OBJECT)

Use Alipay to complete payment

#### Parameters:

| Parameter name | Type     | Required | Description                              |
| -------------- | -------- | -------- | ---------------------------------------- |
| orderInfo      | String   | Yes      | The order information generated by the server, see Alipay's [request parameters instructions](https://doc.open.alipay.com/doc2/detail.htm?spm=a219a.7629140.0.0.x7kkCI&treeId=204&articleId=105465&docType=1) |
| callback       | Function | No       | Payment callback, view Alipay's [documentation of notification parameters](https://doc.open.alipay.com/doc2/detail.htm?spm=a219a.7629140.0.0.xN1NnL&treeId=204&articleId=105302&docType=1) for details |

#### Example:

```
alipay.pay({
  orderInfo:"order1",
  callback:function(ret){console.log("handling callback");}
})
```