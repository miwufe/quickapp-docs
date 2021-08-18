# Creating and building

1 Run the following command under any directory to establish the program template.

```
aiot init <ProjectName> -d <DeviceType>
e.g. aiot init my-project -d tv
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