const Stormz = require('stormz');
const readline = require('readline');
const { credentials, authorizationConfig } = require('./test_conf.json');
const oauth2 = require('simple-oauth2').create(credentials);

function main() {
  const rl = readline.createInterface({ input: process.stdin, output: process.stdout});
  let authorizationUri = oauth2.authorizationCode.authorizeURL({
    response_type: "token",
    ...authorizationConfig
  });

  console.log("Visit : \n", authorizationUri);
  rl.question("\n And type the params part `access_token` of redirected url here : \n", (access_token) => {
    access_token = access_token.trim();
    rl.close();

    const stormz = new Stormz(access_token);
    stormz.baseURL = "http://api.storm.localhost";

    stormz.get('/v1/user/me').on('complete', function(data, response) {
      console.log("\ncomplete", response.statusCode, ":\n", data);
    });
  });
}

main();
