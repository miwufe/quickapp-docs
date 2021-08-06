# Pop-up window

## Interface declaration

```
{"name": "system.prompt"}
```

## Import module

```
import prompt from '@system.prompt' or var prompt = require("@system.prompt")
```

## Interface definition

### prompt.showToast(OBJECT)

Show toast

#### Parameters:

| Parameter name | Type   | Required | Description                              |
| -------------- | ------ | -------- | ---------------------------------------- |
| message        | String | Yes      | Text to display                          |
| duration       | Number | No       | 0 is short-term, 1 is long-term, default is 0 |

#### Example:

```
prompt.showToast({
  message:'message'
})
```

### prompt.showDialog(OBJECT)

Show dialog box

#### Parameters:

| Parameter name | Type     | Required | Description                              |
| -------------- | -------- | -------- | ---------------------------------------- |
| title          | String   | No       | Title                                    |
| message        | String   | No       | Content                                  |
| buttons        | Array    | No       | Data array of the button, button structure: {text:'text',color:'#333333'}, color is optional: the first item of the button is positive button; the second (if present) is negative button; the third (if present) is neutral button. Supports up to 3 buttons. |
| success        | Function | No       | Callback succeeded                       |
| cancel         | Function | No       | Cancel callback                          |
| complete       | Function | No       | The callback after the implementation finished |

##### Success return value:

| Parameter name | Type    | Description                              |
| -------------- | ------- | ---------------------------------------- |
| index          | Integer | Select the sequence number of the button in the button's array |

#### Example:

```
prompt.showDialog({
  title: 'title',
  message: 'message',
  buttons: [
    {
      text: 'btn',
      color: '#33dd44'
    }
  ],
  success: function(data) {
    console.log("handling callback");
  },
  cancel: function(data) {
    console.log("handling cancel");
  },
  fail: function(data, code) {
    console.log("handling fail, code=" + code);
  }
})
```

### prompt.showContextMenu(OBJECT)

Show context menu

#### Parameters:

| Parameter name | Type     | Required | Description                              |
| -------------- | -------- | -------- | ---------------------------------------- |
| itemList       | Array    | Yes      | The text array of the button             |
| itemColor      | HexColor | No       | Button color                             |
| success        | Function | No       | Callback succeeded                       |
| cancel         | Function | No       | Cancel callback                          |
| complete       | Function | No       | The callback after the implementation finished |

##### Success return value:

| Parameter name | Type    | Description                              |
| -------------- | ------- | ---------------------------------------- |
| index          | Integer | Select the serial number of the button in the itemList array |

#### Example:

```
prompt.showContextMenu({
  itemList: ['item1', 'item2'],
  itemColor: '#ff33ff',
  success: function(data) {
    console.log("handling callback");
  },
  cancel: function(data) {
    console.log("handling cancel");
  },
  fail: function(data, code) {
    console.log("handling fail, code=" + code);
  }
})
```