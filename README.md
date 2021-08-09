## 安装编译工具
使用 gitbook 作为文档编译工具，在使用之前需要安装 node.js、npm 和 gitbook-cli

node.js、npm安装方法网上有很多教程，不再赘述。

gitbook-cli 安装方法：

    npm install gitbook-cli -g

## 编译文档

在tools目录下执行下面命令，安装依赖并执行gulp命令，即可编译文档

    npm install && npx gulp

## 预览文档

    进入build/middle/_book， 执行 npx http-server 即可

## 部署：
    编译文档后，会在docs/目录下生成文件，将该文件上传的到web服务器即可
