# The first program

1 Run the following command under any directory to establish the program template.


```
aiot init <ProjectName>
```

2 Enter the root directory of the project and run the following command to install the dependency packages.

```
npm install
```

3 Run the following command under the project root directory to compile.

```
npm run build
```

The directory generated after compiling is saved to <ProjectName>/build. You can see the UX file by obtaining the JavaScript file after compiling.

The ZIP file generated after compiling is saved to <ProjectName>/dist/. Its filename extension is *.rpk.

4 Run the app to check the results.

You can run it by:

1) Installing the *.rpk file onto the Android phone's storage (connect the phone to computer via USB and copy the *.rpk file to the storage of the Android phone).

2) Scanning the QR code using the app (Back button menu → Settings → Scan QR code). You can get the QR code address by visiting [http://yourip:port](http://youripport/) after turning on the HTTP server.

```
// Default port: 12306
npm run server
// Specified port
npm run server -- --port 12300
```

5 Monitor source code updates and compile automatically.

You can monitor the source code file by running the following command. After source code updates, it will be recompiled automatically.

```
npm run watch
```

Note: "npm run watch" can only monitor source code files and can't offer HTTP Server services; therefore, if the phone app says it "Couldn't update", you need to run "npm run server" in a new command line at the same time.