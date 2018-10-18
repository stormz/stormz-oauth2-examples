const Stormz = require('stormz');
const { credentials, tokenConfigPassword } = require('./test_conf.json');
const oauth2 = require('simple-oauth2').create(credentials);

function main() {
  oauth2.ownerPassword.getToken(tokenConfigPassword)
    .then((result) => {
      console.log("access token : \n", result);
      const accessToken = oauth2.accessToken.create(result);

      const stormz = new Stormz(accessToken.token.access_token);
      stormz.baseURL = "http://api.storm.localhost";

      stormz.get('/v1/user/me').on('complete', function(data, response) {
        console.log('\ncomplete', response.statusCode, ":\n", data);
      });
    }).catch((error) => {
      console.log("\nAccess Token Error: ", error);
    });
};

main();
