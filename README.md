# TinyURL

Intro
-----

A self-hostable link shortening web application written in TypeScript on top of [Restify](restify.com).

This backend system is a RESTful service built upon Restify while the frontend is written in React with ES6.

Usage
-----

1. Clone the repo
2. Run `npm install`
3. Rename `db.sample.ts` into `db.ts` and add your MySQL crendentials into the file.
4. Run `gulp compile-all` to transpile your TypeScript code into Node.js.
5. Run the `index.js` file with `node dist/index.js` or using `nodemon`, `pm2`, etc to execute it.
