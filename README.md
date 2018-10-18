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

### Run one of the examples:

#### Password Credentials Flow

```
yarn password_credentials
```

#### Authorization Code Flow

```
yarn authorization_code
```
