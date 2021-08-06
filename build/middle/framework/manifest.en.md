
# Manifest

The manifest.json file contains the app description, interface declaration, and web page routing info.

## Manifest

| Attribute          | Type    | Default value | Required | Description                              |
| ------------------ | ------- | ------------- | -------- | ---------------------------------------- |
| package            | String  | -             | Yes      | App package name. **It must be different from the package name of the native app**. We recommend using the com.company.module format, e.g.: com.example.demo |
| name               | String  | -             | Yes      | App name, **6 characters or less, must be consistent with the name in the app market**. It's used for displaying the app name under the Home screen icon, pop-up windows, etc. |
| icon               | String  | -             | Yes      | App icon, 192×192 pixels                 |
| versionName        | String  | -             | No       | App version name, e.g.: `"1.0"`          |
| versionCode        | Integer | -             | Yes      | App version number. Starting from `1`, **we recommend you to re-upload packages every time and change the version code: versionCode+1** |
| minPlatformVersion | Integer | 100           | No       | The lowest platform version number supported. The principle is the same as Android API Level. **Check compatibility to avoid running on a low version and causing it to be incompatible when going online** |
| features           | Array   | -             | No       | Interface list, the vast majority of interfaces must be declared here, otherwise, they can't be called. View each interface instructions document for details |
| config             | Object  | -             | Yes      | System configuration information, see below for details |
| router             | Object  | -             | Yes      | Routing information, see below for details |
| display            | Object  | -             | No       | UI display related configuration, see below for details |

### config

Used to define system configuration and global data.

| Attribute   | Type    | Default value | Description                              |
| ----------- | ------- | ------------- | ---------------------------------------- |
| logLevel    | String  | log           | Print log levels (off, error, warn, info, log, debug) |
| designWidth | Integer | 750           | The page is designed with a standard width, you can resize the element size according to the actual screen width of the device |
| data        | Object  | -             | Global object target, the attribute name can't start with $ or _, you can visit it through "this" on the web page. If the name of the global data attribute and the data attribute in the web page is repeated, then when the web page is initializing, the global data will cover the corresponding attribute value on the web page |

### router

Used to define the constitution of the web page and related configuration information. If the routing information isn't configured for the web page, then it will be skipped during compiling.

| Attribute | Type   | Default value | Description                              |
| --------- | ------ | ------------- | ---------------------------------------- |
| entry     | String | -             | Homepage name                            |
| pages     | Object | -             | Page configuration list, the key value is the page name (the corresponding web page directory name, e.g. Hello corresponds to the 'Hello' directory), and the value is the web page detailed configuration page, see below for details |

#### router.page

Used to define single web page router information.

| Attribute     | Type   | Default value | Required | Description                              |
| ------------- | ------ | ------------- | -------- | ---------------------------------------- |
| component     | String | -             | Yes      | The component name corresponding to the web page, must be consistent with the UX file name, e.g. 'hello.ux' corresponds to 'hello' |
| path          | String | /<页面名称>       | No       | Web page route, e.g. "/user", if you don't fill it in the default will be <web page name>. The path must be unique, it can't be the same as other web page paths.As the the below path is missing, it will be set as "/Index": `"Index": {"component": "index"}` |
| filter `101+` | Object | -             | No       | Declare that the web page can process a request |

#### router.page.filter `101+`

Declare that a web page can process some request, the web page can be obtained from $page and opening the web page parameters, view [script](script.md). The filter structure is as follows:

```
"filter": {
"<action>": {
"uri": "<pattern>"
}
}
```

| Attribute | Type    | Default value | Required | Description                              |
| --------- | ------- | ------------- | -------- | ---------------------------------------- |
| action    | String  | -             | Yes      | Requested action, currently only supports "view" |
| URI       | Pattern | -             | Yes      | The matching rule for the requested data. It must be a regular expression. E.g. `https?://.*` can match all http and https type web pages |

The filter definition that can process all http and https requests is as follows:

```
"filter": {
"view": {
"uri": "https?://.*"
}
}
```

### display

Used to define configuration related to the UI display

| Attribute               | Type    | Default value | Description                              |
| ----------------------- | ------- | ------------- | ---------------------------------------- |
| backgroundColor         | String  | #ffffff       | Window background color                  |
| fullScreen              | Boolean | false         | Whether or not it is in full screen, the default can't be acted on titleBar at the same time, titleBar must continue to be controlled through titleBar |
| titleBar                | Boolean | true          | Whether or not to display titleBar       |
| titleBarBackgroundColor | String  | -             | Title bar background color               |
| titleBarTextColor       | String  | -             | Title bar text color                     |
| titleBarText            | String  | -             | Title bar text (you can also skip and transmit the parameter (titleBarText) settings through the web page) |
| menu `101+`             | Boolean | false         | Whether the menu button is displayed in the top right-hand corner of the title bar |
| pages                   | Object  | -             | Display style of each web page, the key is the web page name (consistent with the web page name in the router) |

### Example:

```
{
  "package": "com.company.unit",
  "name": "appName",
  "icon": "/Common/icon.png",
  "versionName": "1.0",
  "versionCode": 1,
  "minPlatformVersion": 100,
  "features": [
    { "name": "system.network" }
  ],
  "permissions": [
    { "origin": "*" }
  ],
  "config": {
    "logLevel": "off"
  },
  "router": {
    "entry": "Hello",
    "pages": {
      "Hello": {
        "component": "hello",
        "path": "/",
        "filter": {
          "view": {
            "uri": "https?://.*"
          }
        }
      }
    }
  },
  "display": {
    "backgroundColor": "#ffffff",
    "fullScreen": false,
    "titleBar": true,
    "titleBarBackgroundColor": "#000000",
    "titleBarTextColor": "#fffff",
    "pages": {
      "Hello": {
        "backgroundColor": "#eeeeee",
        "fullScreen": true,
        "titleBarBackgroundColor": "#0000ff",
        "titleBarText": "Hello"
      }
    }
  }
}
```