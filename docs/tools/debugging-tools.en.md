# Debugging tools

The features currently supported on the debugging tools are:

- Remote debugging
- Preview on mobile devices
- Viewing error messages
- Viewing logs

## Remote debugging

We provided Debug Server for remote debugging of mobile apps. After starting up the Debug Server, register the mobile app on its main page, and open the debugging page to conduct remote debugging.

Currently the debugging tool provides basic debugging functions in 4 tabs:

- Element: Shows the user VDOM page structure and style;
- Console: Basic console outputs and CLI interaction with the JavaScript engine;
- Source: The user's source code debugging;
- Network: Shows user's network requests.

### Start the Debug Server

Execute in the project directory:

```
npm run debug
```

### Register mobile app and start debugging

1. After you start using the Debug Server, access the `http://localhost:8081` according to the command prompts, then the QR code will be displayed.
2. Tap the Back button on the home page of the debugging app on the user's phone to make the app menu appear, and go to Settings > > "Scan QR code" to register the debugging app on the Debug Server.
3. After registration, you will see a link which says "Open the debugging page". Click it to enter the debugging page.

The usage of the debugging page is exactly the same as that of Chrome's remote debugging tools.

## Preview on mobile devices

When you write code on your PC, the mobile terminal can be easily configured to show how the app runs after the code is changed.

### Start the debugging environment

Run the following command in the project's root directory to launch the local server (default port number is 12306)

```
npm run server
```

Custom port

```
npm run server -- --port XXX
```

### Mobile terminal configuration

There are two ways to configure the mobile terminal

Tap the Back button in the debugging app to open the menu, and tap "Settings"

\1. Directly configure the server's IP address and port

\2. Tap to scan the QR code. Enter [http://localhost:12306](http://localhost:12306/) in the PC browser to show a debugging QR code, scan it to complete configuration

After everything is configured, there are 3 ways to preview changes in the mobile terminal

### 1. Manual compilation + manual refresh

Run the following command to complete the compilation, and tap "Update online" in the debugging app to preview how current code runs

```
npm run build
```

### 2. Manual compilation + auto refresh

Run the following command to complete the compilation and auto refresh of the mobile terminal with just one step

```
npm run build && npm run notify
```

### 3. Auto compilation + auto refresh

Run the following command to launch the file monitor. Every time you modify the project file, the changes will be compiled automatically and refreshed on the mobile terminal

```
npm run watch
```

## Viewing error messages

If an error occurs while the code is running, the debugging app will show a dialog displaying the stack of errors for your analysis

## Viewing logs

### Debugging app

Turn on the "Display logs" feature (it's off by default) in the Settings. A "Display logs" button will appear in the main interface. Tap it to display the current log

### Command line

You need to install the ADB tool first, refer to the instructions on the [Official web site](https://developer.android.com/studio/releases/platform-tools.html). The directory can be added to the system path for later use.

In any directory of the PC terminal, run the following command to view the developer's printing logs and other error logs

```
adb logcat -s JsConsole
```