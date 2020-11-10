# Node.js Google Authentication with Passport 

In here, I have created Google authentication with Passport and Node.js. 

## Requirements

* Node.js

## Credentials

Google Credentials can be obtained from the Google Developer Dashboard.

* Visit https://console.developers.google.com/apis/dashboard in your browser
* Click on the "Select a Project" dropdown in the header bar
* Click the "Create Project" button
* Create a new Project
* Open the Library page from the sidebar
* Select the "Google+ API" entry and ensure that this is enabled. You might also need to enable the "Google+ Domains * API" entry as well
* Open the Credentials page from the sidebar
* Open the "OAuth Consent Screen" tab and fill it out
* Click the "Create credentials" button and select "OAuth client ID"
* Select an Application Type of "Web application"
* Fill in the "Authorized JavaScript origins" as being "http://localhost:3000" and the "Authorized redirect URIs" as being "http://localhost:3000/api/authentication/google/redirect"
* Create your credentials, and write down the Client ID and Client Secret

When you run the application, you will first need to set the environment variables GOOGLE_CLIENTID and GOOGLE_CLIENTSECRET to the Client ID and Client Secret you have just obtained.

## Run this Application

To run this application, 

* clone this repository `git clone https://github.com/dinushchathurya/expressjs-login-with-google` 

* Then `cd expressjs-login-with-google`

* Run `npm install`

* Then goto ".env"

* Paste your IDs on their

* Then run `node server.js`

* Then visit "http://localhost:3000"

## Contact

For further more clarifications or regarding any issues, please contact me via my E-Mail.

## License

Copyright (c) 2020 <a href="https://dinushchathurya.github.io/">Dinush Chathurya</a> and <a href="https://codingtricks.io/">codingtricks.io</a>

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

## Blog

https://codingtricks.io/

## 

<p ><h2 align="center">Happy<i class="fa fa-heart" style="color:red;"></i> Coding<i class="fa fa-code" style="color:orange;"> </i></h2></p>
