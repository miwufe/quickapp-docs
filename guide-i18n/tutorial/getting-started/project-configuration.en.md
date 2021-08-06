# Project configuration

> Get familiar with the files that describe the whole project (`<ProjectName>/src/manifest.json`) and learn about router and UI display.

In this section, you will learn about:

- Configuring basic app information
- Configuring page router
- Configuring page UI display

## Configuring basic app information

Each app should have an exclusive name, icon, etc. Such information should be configured in `manifest.json`. View details in the `Manifest` chapter.

#### App package name (package)

App package name is the unique identifier that distinguishes it from other apps.

After the app package is released, access `http://hybrid.miui.com/app/<package>` in your mobile browser to switch to the app.

It's recommended to use the com.company.module format, for example:

```
{
  "package": "com.example.demo"
}
```

#### App name (name)

An app name can contain up to 6 Chinese characters, and be consistent with that in the app store. Our framework allows creating a Home screen shortcut for the app. The app name is displayed below the shortcut.

Example:

```
{
  "name": "Camera"
}
```

#### App icon (icon)

Keep icon corners square (not rounded). There should be no white margins.

Example:


```
{
  "icon": "/Common/logo.png"
}
```

Note:

Use **absolute path**, in which `/` corresponds to the `<ProjectName>/src/`.

#### App version name and version code (versionName, versionCode)

App version name and number are maintained by the developer and saved to the app package.

App version name should use the `main version.sub version` format.

App version number is an integer, it starts from `1`, and increases by 1 with each release.

Example:

```
{
  "versionName": "1.0",
  "versionCode": 1
}
```

#### Lowest platform version (minPlatformVersion)

The lowest supported platform version number is not required, and the default value is 100, which identifies the minimum platform version that is compatibly supported by the developer's RPK package.

When using new features of the platform's version 1.1 or later (`101+` will be marked in the file), make sure the platform version is the earliest `minPlatformVersion`, in order to avoid errors after being released and running on earlier versions.

Example:

```
{
  "minPlatformVersion": "101"
}
```

#### Interface configuration list (features)

Before using an interface, you need to declare it in your Manifest first. At the top of each interface document, the configuration code that declares the interface is attached.

Take the Fetch network request as an example:

```
{
  "features": [
    { "name": "system.fetch" }
  ]
}
```

## Configuring page router (router)

A router defines the page's actual address and the address to be switched to. If routing wasn't configured for the ux page, it won't participate in the project's compilation. Only one home page file (excluding component files) can exist in a directory.

#### Home page name (router.entry)

Home page is opened by default when the app platform launches. The first page needs to be configured with the name of a page in the app, that is, the **relative path of the page directory** in the directory of `<ProjectName>/src`.

Example:

Let's assume your project's root directory looks like this:

```
└── src
    └── Demo                  Page directory: Stores page resources and component files
        └── index.ux          Page files: Filename doesn't have to be the same as the parent folder (index.ux is recommended)
```

If the home page is the index.ux file in the Demo directory, the page name corresponding to the home page will be `Demo`.

```
{
  "router": {
    "entry": "Demo"
  }
}
```

#### Page routing object (router.pages)

For the page routing object, key is the page name (**relative path of the page directory** in the `<ProjectName>/src` directory), and value is the specific page routing configuration. Don't use the key repeatedly.

The specific page routing configuration (router.pages value) includes:

- **component**: File's corresponding ux file name
- **path**: Page path, use the page name if it's left blank (page directory's **relative path** in the `<ProjectName>/src` directory)

Example:

Let's assume your project's root directory looks like this:

```
└── src
    |── Demo                  Page directory: Stores page resources and component files
    |   └── index.ux          Page files: Filename doesn't have to be the same as the parent folder (index.ux is recommended)
    └── Doc
        └── Layout            Page directory: Stores page resources and component files
            └── index.ux      Page files: Filename doesn't have to be the same as the parent folder (index.ux is recommended)
```

If the page name (router.pages key) is `Demo`, the corresponding page configuration (router.pages value) will include:

- **component**: File's corresponding ux file name `index`
- **path**: Page path, which is the page name by default `Demo`

```
{
  "router": {
    "pages": {
      "Demo": {
        "component": "index"
      },
      "Doc/Layout": {
        "component": "index"
      }
    }
  }
}
```

Now, developers can access the index.ux page in the Demo directory via `/Demo`.

## Configuring page UI (display)

UI display is used to define the UI display related configuration. Supported: Common default page UI display, and Private page UI display.

#### Common default page UI display

Common default page UI display is shared by all pages.

Take the configuration of the title bar text as an example:

```
{
  "display": {
    "titleBarText": "Common default title on the page"
  }
}
```

For a page not configured with private title, `Common default title on the page` will be used as its title.

#### Private page UI display

Private page UI display is configured in the object of `display.pages`: Key is the page name (keep consistent with the name in the router page), and value is the private page UI display.

Take the configuration of the title bar text as an example:

```
{
  "display": {
    "pages": {
      "Demo": {
        "titleBarText": "Demo page title"
      }
    }
  }
}
```

## Summary

Now you can configure page routing, UI display, and other items.