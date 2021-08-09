# Toolkit tools

In order to facilitate the development, aiot-toolkit is provided to help developers to create projects and complete other work using command line tools.

## Create new projects

Used to create a project template

```
aiot init <ProjectName>
```


Enter the root directory of the project and run the following command to install the dependency packages

```
npm install
```

## Update projects

Used to update the regular project directory structure and dependencies

Enter the project directory that has been built

```
aiot update
```


Command parameters:

-- force: Forced update (Update current project to the aiot-toolkit version. It should be noted that this action may downgrade the version.)

After updating, run the "npm install" command in the project directory to install the dependency library

## Command help


```
aiot -h
```


## Update tools

Currently, you can only update the aiot-toolkit manually. Remove the old aiot-toolkit from the directory, and refer to [Building environment](../) to install aiot-toolkit again. After the installation, update the project following the steps above.