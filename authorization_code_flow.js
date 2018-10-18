const Stormz = require('stormz');
const readline = require('readline');
const { credentials, authorizationConfig } = require('./test_conf.json');
const oauth2 = require('simple-oauth2').create(credentials);

function main() {
  const rl = readline.createInterface({ input: process.stdin, output: process.stdout});
  const authorizationUri = oauth2.authorizationCode.authorizeURL(authorizationConfig);

  console.log("Visit : \n", authorizationUri);
  rl.question("\n And type the params part `code` of redirected url here : \n", (code) => {
    code = code.trim();
    rl.close();
   
    oauth2.authorizationCode.getToken({ code, ...authorizationConfig })
      .then((result) => {
        const accessToken = oauth2.accessToken.create(result);

        console.log("\naccess token : \n", result);

        const stormz = new Stormz(accessToken.token.access_token);
        stormz.baseURL = "http://api.storm.localhost";

        stormz.get('/v1/user/me').on('complete', function(data, response) {
          console.log("\ncomplete", response.statusCode, ":\n", data);
        });
      })
      .catch((error) => {
        console.log("\nAccess Token Error: ", error);
      });
  });
}

main();
