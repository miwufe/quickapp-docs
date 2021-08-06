# Development and debugging

> Here we describe the development and debugging methods which will help you locate and solve problems.

Here's what you'll be able to do after reading:

- Use log output
- Debug remotely
- Debug browser rendering

## Using log output

**1. Change log level**

Open the manifest.json file in the "src" folder of the project's root directory. Locate the configuration ("config"), and modify "logLevel" to the lowest level of `debug`. This will allow all levels of log output.

Here's how the code in `<projectname>/src/manifest.json` will look like after you do this:

```
{
　"config": {
  　　"logLevel": "debug"
  }
}
```

**2. Generate logs in JS**

If the JS code doesn't run as required, generating logs can help developers quickly locate the problem. To be consistent with the traditional front-end development, use the `console` object to generate logs:

```
console.debug('debug')
console.log('log')
console.info('info')
console.warn('warn')
console.error('error')
```

**3. View logs**

Open the running platform. You'll see the `Show logs` button in the lower right corner. Tap it to view logs. You can also use the `Android Monitor` output of `Android Studio` to view logs.

## Remote debugging

You can open the `Debugging page` in Chrome to debug the app on your phone.

Here are the steps:

- Run the following command in the root directory, start the HTTP debug server, and provide debug page requests:

```
npm run debug
```

- Open `http://localhost:8081` in your browser, and you'll see the QR code.
- `Go to app platform --> Menu --> tap "Settings" --> tap "Scan the QR code"`. After scanning, the browser will show this link: `Enter the debugging page`.
- Click this link to enter the debugging page.

Note:

If the version of node you're using is 8.x.x, you'll have to do the following: after running the `hap update --force` for the first time, delete the package-lock.json file, run `npm install` and `hap update --force` once; after that, start the debug server by `npm run debug`.

## Debug browser rendering

The page effects that developers will see in the app platform are rendered by `Native`, and not by `WebView`. Browser rendering debugging refers to the rendering that is done by the `Browser's WebKit engine`. Whenever a rendering effect is inconsistent with `Native`, `Native` should prevail.

Run the following command in the project's root directory:

```
# Default port: 8080 
npm run test:h5
```

Go to `http://localhost:8080/webpack-dev-server` in Chrome. You'll see the structure similar to the "src" folder. Each ux file here corresponds to an HTML file.

Click on the HTML file to debug it. You can preview the page rendered by the browser. The debugging method is the same as that for the regular web pages.

## Summary

So far you've learned how projects are debugged and run. In the next chapters, we'll describe more details. You can skip the sections you're already familiar with and focus on the information you need most in your work.