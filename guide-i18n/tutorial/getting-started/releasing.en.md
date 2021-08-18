# Releasing

Before publishing the application officially, we need to build a releasing package.

## Generate signature file

Generate signature files `private.pem` and `certificate.pem` using tools such as openssl command line, for example:

```shell
openssl req -newkey rsa:2048 -nodes -keyout private.pem -x509 -days 3650 -out certificate.pem
```

Create a `release` directory under the `sign` directory of the project, and copy the private key file `private.pem` and the certificate file `certificate.pem` into it.

## Build the releasing package

Run the following cmmond in the root directory of the project:

```shell
npm run release
```

It will generate a rpk file in this path: /<ProjectName>/dist/<ProjectPackage>.release.rpk

## Publish the releasing package

Log on http://developer.hybrid.xiaomi.com/ to publish your releasing package generated following previous steps.