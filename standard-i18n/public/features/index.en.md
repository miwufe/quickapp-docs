# Features overview

There are 4 types of interface methods: synchronous, asynchronous, callback, and asynchronous callback. The abilities offered by the different interface methods aren't the same.

## Synchronous

A synchronous interface will directly return a call result, the result can be of any type, see the relevant interface document.

### Example of usage:

```
console.log(JSON.stringify(app.getInfo()))
```

## Asynchronous

An asynchronous interface will not immediately return a call result, developers must provide a suitable callback function. The asynchronous interface will call the corresponding callback function when the task has ended.

### The callback functions asynchronous interfaces support are:

| Callback function | Parameter name | Type   | Required                                 | Description                              |
| ----------------- | -------------- | ------ | ---------------------------------------- | ---------------------------------------- |
| success           | data           | Any    | Call result, can be any type, see interface usage document | Callback returned when call succeeds     |
| fail              | data           | Any    | Error message, in general it's a string that describes the error message but may also be a different type, see the interface usage document | Callback returned when call fails        |
|                   | code           | Number | Error code, if the document hasn't specifically described it, then it will return 200. If other error codes are returned, then you need to list the instructions in the document | Callback returned when call fails        |
| cancel            | data           | Any    | Call results, generally has no content, see interface usage document | Callback returned when a user cancels. This callback supported may be provided in some interface calls that require user interaction |
| complete          | None           | None   | None                                     | Callback returned when call is completed |

The 3 callback functions (success, fail, and cancel) are mutually exclusive. Each time the interface calls it will and can only call 1 of these 3 callback functions, after that it will call the complete callback once more.

### Example of usage:

```
prompt.showContextMenu({
  itemList: ['item1', 'item2'],
  itemColor: '#ff33ff',
  success: function(data) {
    console.log("handling callback");
  },
  fail: function(data, code) {
    console.log("handling fail, code=" + code);
  },
  cancel: function(data) {
    console.log("handling cancel");
  },
  complete: function() {
    console.log("handling complete");
  },
})
```

## Callback

Like the asynchronous interface, the callback interface won't immediately return a call result. Developers must provide a suitable callback function and the callback interface will then call the corresponding callback function. Unlike the asynchronous interface, the callback interface may call the callback function multiple times to return a result.

### The callback functions callback interfaces support are:

| Callback function | Parameter name | Type   | Required                                 | Description                              |
| ----------------- | -------------- | ------ | ---------------------------------------- | ---------------------------------------- |
| callback          | data           | Any    | Call result, can be any type, see interface usage document | Callback returned every time a result is obtained, it may call multiple times |
| fail              | data           | Any    | Error message, in general it's a string that describes the error message but may also be a different type, see the interface usage document | Callback returned when call fails. Once this callback is called, the callback call can't be called again, and the interface call ends |
|                   | code           | Number | Error code, if the document hasn't specifically described it, then it will return 200. If other error codes are returned, then you need to list the instructions in the document | Callback returned when call fails. Once this callback is called, the callback call can't be called again, and the interface call ends |

Take the geolocation interface (system.geolocation) as an example:

- If you call geolocation.subscribe to monitor changes in a geographical location, then each time there is a change in the geographical location, it will call the imported callback and return the new location information.
- If a call results in a fail callback and ends the interface call because a user has refused to grant permission, then the callback will never be called again.

### Example of usage:

```
geolocation.subscribe({
  callback:function(ret){console.log("handling callback");},
  fail: function(data, code) {
    console.log("handling fail, code=" + code);
  }
})
```

## Asynchronous callback

Like asynchronous interfaces, asynchronous callback interfaces won't immediately return a call result, instead developers must provide a suitable callback function. When the interface has finished implementing, it will call the callback to return a result.

Unlike asynchronous interfaces, this type of interface only accepts 1 callback. Whether or not the call has succeeded must be determined by evaluating the results returned in the callback. The callback can only be returned once.

### The callbacks supported by the the asynchronous interface are:

| Callback function | Parameter name | Type | Required                                 | Description                              |
| ----------------- | -------------- | ---- | ---------------------------------------- | ---------------------------------------- |
| callback          | data           | Any  | Call result, can be any type, see interface usage document | Callback when getting the result, can only be returned once |

### Example of usage:

```
alipay.pay({
  orderInfo:"order1",
  callback:function(ret){console.log("handling callback");}
})
```

## Implement callback function correctly

Apart from the synchronous interface, none of the interfaces can immediately return a result after invoking a call. Instead, the callback is implemented after a period of time and the return result carried acts as the parameter. At the same time, the web page that is in the interface callback and the final implementation callback web page may be two different web pages.

Assuming that the page implementing the interface call is A, then when the callback is implemented at the end, it may be in one of the following 3 states:

1. Web page A is still in the display.
2. Web page A has been switched to the background, the page currently displayed is page B.
3. Page A has already been destroyed.

The callback must evaluate the state of the web page, and process it correctly according to its state. The web page has $valid and $visible `101+` attributes. For the Boolean value, to simply evaluate the page status, use:

```
//Whether the web page is valid (hasn't been destroyed)
this.$valid
// Whether the page is in the background
this.$visible
```

For example: You want a page to display the business listings of a user's current geographical position, first, you must call `geolocation.getLocation()` interface to get the current location information, and then call the `fetch.fetch()` interface to get the service list. When implementing the `geolocation.getLocation()` callback, then you must evaluate the different states of the current web page to carry out different operations:

- If the page is still in the display, continue to call the fetch interface to get the service list.
- If the page has been switched to the background, then cache the current geographical position.
- If the page has already been destroyed, then don't do any processing.

**Code example:**

```
geolocation.getLocation({
  success:function(data){
    if (this.$valid && this.$visible) {
      // The page is in the current display
    }
    else if (this.$valid && !this.$visible) {
      // The page is in the background
    }
    else {
      // The page has been destroyed
    }
  }.bind(this),
  fail: function(data, code) {
    console.log("handling fail, code=" + code);
  }
})
```

Pay particular attention to the fact that the callback function of the callback interface can be called multiple times. If after the page has switched to the background or has been destroyed the callback is still returned multiple times, it will affect the reaction speed of the app, and will also cause memory leaks. Therefore we strongly recommend you use any of the following methods to cancel the callback interface calls:

1. Cancel the callback interface call in the web page's onHide or onDestroy function.
2. Evaluate the current status of the page in the callback function, cancel the callback interface call after discovering that the page has switched to the background or has been destroyed.

We recommend you use the first method because it can cancel the call more promptly and better avoids additional consumption.

For example, a web page calls geolocation.subscribe to record a user's exercise trail.

To use the first method to cancel the callback interface call logic, do as follows:

- Call geolocation.unsubscribe in the onDestroy function to unsubscribe
- Evaluate the state of the current page in the callback and process as appropriate.

**Code example:**

```
export default {
  onDestroy () {
    geolocation.unsubscribe()
  },
  record() {
    geolocation.getLocation({
      success:function(data){
        if (this.$valid && this.$visible) {
          //Page is in the current display, record trail
        }
        else if (this.$valid && !this.$visible) {
          // Page is in the background, record trail
        }
        else {
          // Page has been destroyed, don't process
        }
      }.bind(this),
      fail: function(data, code) {
        console.log("handling fail, code=" + code);
      }
    })
  }
}
```

To use the second method to cancel the callback interface call, do as follows:

- In the success callback imported by the geolocation.subscribe call, first evaluate the state of the page.
- If the page has already been destroyed, call geolocation.unsubscribe to unsubscribe.

**Code example:**

```
geolocation.getLocation({
  success:function(data){
    if (this.$valid && this.$visible) {
      // Page is in the current display, record trail
    }
    else if (this.$valid && !this.$visible) {
      // Page is in the background, record trail
    }
    else {
      // The page has been destroyed
      geolocation.unsubscribe()
    }
  }.bind(this),
  fail: function(data, code) {
    console.log("handling fail, code=" + code);
  }
})
```

`101+` can call the interface method in the app lifecycle callback. This kind of call interface method has nothing to do with the web page, as long as the app is still running, all the interface calls are valid. However, even if that is the case, we still strongly recommend to cancel the call interface call when deciding that the call interface isn't needed.

## Common error codes

| Code | Meaning               |
| ---- | --------------------- |
| 200  | General error         |
| 201  | User rejection        |
| 202  | Illegal parameter     |
| 203  | Service not available |
| 204  | Request timed out     |