![](hersh.gif)
> *Note*: currenty in early development

## Branch Status

master | staging 
--- | --- 
[![CircleCI](https://circleci.com/gh/acidjazz/hersh/tree/master.svg?style=shield)](https://circleci.com/gh/acidjazz/hersh/tree/master) | [![CircleCI](https://circleci.com/gh/acidjazz/hersh/tree/staging.svg?style=shield)](https://circleci.com/gh/acidjazz/hersh/tree/staging)

## Local Build Setup
* Clone this repository 
```bash
git clone git@github.com:acidjazz/hersh.git
```
* Install dependencies
```bash
yarn install
```
* Serve your dev environment with [HMR](https://webpack.github.io/docs/hot-module-replacement.html) at http://localhost:3000
```bash
yarn dev
```
> To serve to other machines via your IP address run `yarn dev-public`

## Deployment
Continuous Deployment is setup using the [git-flow](http://nvie.com/posts/a-successful-git-branching-model/) workflow with [aeonian](https://github.com/acidjazz/aeonian) via [Circle-CI](https://circleci.com/gh/acidjazz/hersh)
* Branch [staging](https://github.com/acidjazz/hersh/tree/staging) merges deploy to http://staging.catherinekwong.com/
* Branch [master](https://github.com/acidjazz/hersh/tree/master) merges deploy to http://catherinekwong.com/


