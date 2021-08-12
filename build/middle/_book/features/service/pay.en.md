# Payments

## Interface declaration

```
{"name": "service.pay"}
```

## Import module

```
import pay from '@service.pay' or var pay = require("@service.pay")
```

## Interface definition

### pay.pay(OBJECT)

Use pay to complete a payment

#### Parameters:

| Parameter name | Type     | Required | Description                              |
| -------------- | -------- | -------- | ---------------------------------------- |
| orderInfo      | String   | Yes      | Order information                        |
| success        | Function | No       | Callback succeeded                       |
| fail           | Function | No       | Couldn't return callback                 |
| complete       | Function | No       | The callback returned after the implementation finished |

##### Success return value:

| Parameter name | Type    | Description        |
| -------------- | ------- | ------------------ |
| code           | Integer | Return status code |
| message        | String  | Message content    |
| result         | String  | Pay result         |

#### Example:

```
pay.pay({
  orderInfo:"order1",
  success:function(data){console.log("handling success: " + data.code);},
  fail: function(data, code) {
    console.log("handling fail, code=" + code);
  }
})
```