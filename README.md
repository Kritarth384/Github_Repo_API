# starter-express-api

This is the simplest possible nodejs api using express that responds to [Github Repo](https://github-website.vercel.app/) website requests.

### Deploy it in 7 seconds: 
[![Deploy to Cyclic](https://deploy.cyclic.app/button.svg)](https://deploy.cyclic.app/)

### To use the API add the following in the end:

```
/api/${github_username}
```
or

```
/api/repos/${github_username}
```

or

```
/api/lang/${github_username}/${repo_name}
```



### Run on Local Machine

Install or Download all the files on your local machine
<br>

Step 1: Install all the npm packages

```
npm install
```
<br>

Step 2: Run the server using nodemon npm package

```
nodemon index.js
```
