# Oauth2 nodeJS examples with Stormz

**An easy way to try OAuth2 with Stormz**

## Install

First ensure to have nodeJS (and yarn) installed

### Get node packages

```
yarn
```

### Add configuration

```
cp test_conf.sample.json test_conf.json
```

And edit `test_conf.json` with your oauth2 applications and account informations.

## Examples

All examples are runnables and output to the console your user informations.

#### Password Credentials Flow

```
yarn password_credentials
```

[[src: password_credentials_flow.js]](password_credentials_flow.js)

#### Authorization Code Flow

```
yarn authorization_code
```

[[src: authorization_code_flow.js]](authorization_code_flow.js)

#### Implicit Grant Flow

```
yarn implicit_grant
```

[[src: implicit_grant_flow.js]](implicit_grant_flow.js)
