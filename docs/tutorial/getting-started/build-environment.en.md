# Building environment

## Install Node.js

You need to install **6.0** or later versions of Node.js. Download it from the [Node.js official website](https://nodejs.org/en/). We recommend downloading `v6.11.3 LTS`.

Important: Don't use the 8.0* version. The ZipStream implementation within this version is not compatible with the node-archive package, and will lead to an error.

## Install aiot-toolkit

You can't install it using the npm package at the moment. Download the latest version manually from [our website](http://dev.hybrid.xiaomi.com/tools/). Unzip the file and install the npm dependent libraries in the root directory and implement the following command:

```
npm install
```

Then add `/path/to/your/aiot-toolkit/bin` to the system PATH and implement `aiot` in the command line. An output message will appear expressing that the `aiot-toolkit` has been installed and configured. The command will be shown as follows:

```
# Linux
aiot

# Windows
node /path/to/your/aiot-toolkit/bin/aiot

# Output as follows:
Usage: aiot <command>
Args:
    -v:       -- Print version
Commands:
    init      -- Initialize project
    update    -- Update project to newer version
    debug     -- Start the remote debug server
    help      -- Print help
```

