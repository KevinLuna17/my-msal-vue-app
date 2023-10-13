import { UserAgentApplication } from 'msal';

const config = {
  auth: {
    clientId: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
    authority: 'https://login.microsoftonline.com/XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
    redirectUri: 'http://localhost:8080', // Update with your redirect URI
  },
  cache: {
    cacheLocation: 'sessionStorage',
    storeAuthStateInCookie: false
  },
  loginscope: {
    scope: ["User.Read"]
  }
};

const msalApp = new UserAgentApplication(config);

export default msalApp;
