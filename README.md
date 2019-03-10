# PassportExpress
Passport is authentication middleware for Node.js. Extremely flexible and modular, Passport can be unobtrusively dropped in to any Express-based web application. A comprehensive set of strategies support authentication using a username and password, Facebook, Twitter, and more.

## installation
###### create `keys.js` inside `config` directory.
###### create a app in google and enable google+ api
###### then create credentials for api
###### create a mongodb database in mlab
###### insert `clientID` and `clientSecret` as following
###### keys .js 
```
module.exports = {
        google: {
            clientID: '<>',
            clientSecret: '<>'
        },
        mongodb: {
            dbURI: 'mongodb://<user>:<pwd>@<>'
        }
};
```
###### run `npm install`
###### run `nodemon`