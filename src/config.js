export const { NODE_ENV } = process.env;

let apiurl;
if (NODE_ENV == 'development') {
  apiurl = 'http://localhost:3005/api/';
} else {
  apiurl = 'https://.herokuapp.com/api/';
}
export const API_URL = apiurl;
