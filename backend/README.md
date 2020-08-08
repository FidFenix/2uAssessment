# Backend 2UAssesment

This file contains the server for the API invoice service

## End Points

<dl>
  <dt>This api could be seen at:</dt>
  <dd>
  ApiServer: http://localhost:3000/api2u/
  </dd>
</dl>

## Environment Set-up on your local

1. Clone the repository with `git clone https://github.com/FidFenix/2uAssessment.git`
2. Go inside backend directory `cd backend/`
3. Setup the database on `config/database.js`
4. Install the dependencies with `yarn` or `npm`
5. Create the development and test databases you have setup on `config/database.js` (only if you have other DB to connect)
6. Run the database migrations with `npm run sequelize db:migrate` (only if you have other DB to connect)
7. Run the application in development mode with `npm run dev`
8. Access `http://localhost:3000/api2u/invoice` and it is done!

## Scripts

The server comes with a collection of npm scripts, run them with `npm run <script name>` or `yarn run <script name>`:

- `dev`: Run the application in development mode
- `start`: Run the application in production mode (prefer not to do that in development) 
- `test`: Run the test suite
- `test:unit`: Run only the unit tests
- `test:features`: Run only the features tests
- `coverage`: Run only the unit tests and generate code coverage for them, the output will be on `coverage` folder
- `lint`: Lint the codebase
- `sequelize`: Alias to the [Sequelize CLI](https://github.com/sequelize/cli)
- `console`: Open the built-in console, you can access the DI container through the `container` variable once it's open, the console is promise-friendly. Click [here](https://github.com/talyssonoc/node-api-boilerplate/wiki/Application-console) to know more about the built-in console

## Tech

- [Node v7.6+](http://nodejs.org/)
- [Express](https://npmjs.com/package/express)
- [Sequelize](https://www.npmjs.com/package/sequelize)
- [Awilix](https://www.npmjs.com/package/awilix)
- [Structure](https://www.npmjs.com/package/structure)
- [HTTP Status](https://www.npmjs.com/package/http-status)
- [Log4js](https://www.npmjs.com/package/log4js)
- [Morgan](https://www.npmjs.com/package/morgan)
- [Express Status Monitor](https://www.npmjs.com/package/express-status-monitor)
- [Nodemon](https://www.npmjs.com/package/nodemon)
- [PM2](https://www.npmjs.com/package/pm2)
- [Mocha](https://www.npmjs.com/package/mocha)
- [Chai](https://www.npmjs.com/package/chai)
- [FactoryGirl](https://www.npmjs.com/package/factory-girl)
- [Istanbul](https://www.npmjs.com/package/istanbul) + [NYC](https://www.npmjs.com/package/nyc)
- [ESLint](https://www.npmjs.com/package/eslint)
