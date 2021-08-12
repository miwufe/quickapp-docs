# Page routing

## Interface declaration

No declaration required

## Import module

```
import router from '@system.router' or var router = require("@system.router")
```

## Interface definition

### router.push(OBJECT)

Jump to a page in the app

#### Parameters:

| Parameters | Type   | Required | Description                              |
| ---------- | ------ | -------- | ---------------------------------------- |
| uri        | String | Yes      | The URI you want to jump to can be in the following format:Complete URIs that contain "schema"; Using web paths in the app beginning with '/'; e.g.: /about.Using page names within the app that don't start with '/'; e.g.: About.Special format. When URI value is "/", the user will be redirected to the page with the path "/", and not the start page. Supports URI with "schema" elements. Here's how you process such URIs:Find all the page filters set under the app to choose a suitable page processing request (see [Manifest](../../framework/manifest.md)).If no suitable page can handle the request, then it will use default strategy to process the request. If the default strategy can't process the request, it will try to use an app in the system to process it.If there is no system app that can process the request, then it will discard the request.The processing logic for the default strategy:If the schema is internal (view [File organization](../../framework/file-organization.md)), it will determine the file type according to the URI file extension and then call the app in the system again to open the file. |
| params     | Object | No       | When the data has to be transferred while redirecting, the values can be used with the `this.param1`. "param1" is the name of the json parameter. The matching value of "param1" will be simultaneously converted to the string type. |

#### Example:

```
// open page by path
router.push({
  uri: '/about'
  params: {testId:'1'}
});
// open page by name
router.push({
  uri: 'About'
  params: {testId:'1'}
});
```

### router.replace(OBJECT)

Jump to a page in the app, the current page can't return

#### Parameters:

| Parameter | Type   | Required | Description                              |
| --------- | ------ | -------- | ---------------------------------------- |
| uri       | String | Yes      | The URI you want to jump to can be in the below format:The path of the page in the app starting with "/"; e.g.: /about.The name of the page in the app not starting with "/"; e.g.: About.Special format. When URI value is "/", the user will be redirected to the page with the path "/", and not the start page. |
| params    | Object | No       | When the data has to be transferred while redirecting, the values can be used with the `this.param1`. "param1" is the name of the json parameter. The matching value of "param1" will be simultaneously converted to the string type. |

#### Example:

```
router.replace({
  uri: '/test'
  params: {testId:'1'}
})
```

### router.back()

Go back to the previous page

#### Parameters:

None

#### Example:

```
// Page A
router.push({
  uri: 'B'
})

// Page B
router.push({
  uri: 'C'
})

// Page C will go back to page B through back
router.back();
// Page B will go back to page A through back
router.back();
```

### router.clear()

Clear all history, keep only the current page

#### Parameters:

None

#### Example:

```
router.clear()
```

### router.getLength()

Get the number of pages of the current page stack

#### Return value:

| Type   | Description     |
| ------ | --------------- |
| Number | Number of pages |

#### Example:

```
var length= router.getLength()
console.log("pages' length = "length);
```

### router.getState()

Get the status of the current page

#### Return parameters:

| Parameter name | Type   | Description                              |
| -------------- | ------ | ---------------------------------------- |
| index          | Number | The location of the current page in the page stack |
| name           | String | The name of the current page             |
| path           | String | The path of the current page             |

#### Example：

```
var page = router.getState()
console.log("page index = "+page.index);
console.log("page name = "+page.name);
console.log("page path = "+page.path);
```