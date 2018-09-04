# `angularjs-form-generator` — Generates forms on the fly :)

This project is derived from angular-js seed project. This simply generates a form at runtime by reading from a configuration. Backed up by unit tests(in-progress).

## Getting Started

To get you started you can simply clone the `angularjs-form-generator` repository and install the dependencies:

### Prerequisites

You need git to clone the `angularjs-form-generator` repository. You can get git from [here][git].

We also use a number of Node.js tools to initialize and test `angularjs-form-generator`. You must have Node.js
and its package manager (npm) installed. You can get them from [here][node].

### Clone `angularjs-form-generator`

Clone the `angularjs-form-generator` repository using git:

```
git clone https://github.com/bvallambhotla/angularjs-form-generator.git
```


### Install Dependencies

We have two kinds of dependencies in this project: tools and Angular framework code. The tools help
us manage and test the application.

* We get the tools we depend upon via `npm`, the [Node package manager][npm].
* We get the Angular code via `bower`, a [client-side code package manager][bower].
* No e2e test are adde for now.

We have preconfigured `npm` to automatically run `bower` so we can simply do:
```
npm install
```

Behind the scenes this will also call `bower install`. After that, you should find out that you have
two new folders in your project.

* `node_modules` - contains the npm packages for the tools we need
* `app/bower_components` - contains the Angular framework files

*Note that the `bower_components` folder would normally be installed in the root folder but
this changes this location through the `.bowerrc` file. Putting it in the `app` folder
makes it easier to serve the files by a web server.*

### Run the Application

We have preconfigured the project with a simple development web server. The simplest way to start
this server is:

```
npm start
```

Now browse to the app at [`localhost:8000/index.html`][local-app-url].


## Directory Layout

```
app/                    --> all of the source files for the application
  app.css               --> default stylesheet
  components/           --> all app specific components
    autocomplete/              --> A very capable dropdown
      directive.js               --> source for directive
      directive_test.js          --> unit test file(in-progress)
      styles.css                 --> component specific styles(will be migrated to less in future)
    formGenerator/             --> Component which generates forms from configuration
      directive.js               --> source for directive
      directive_test.js          --> unit test file(in-progress)
      styles.css                 --> component specific styles(will be migrated to less in future)
    helpers/                   --> All the helpers for components
      httpHelper.js              --> A service to help in making http-calls
  directives/          --> Re-useable HTML enhancers
    validator/               --> Can be added to existing HTML elements (for custom validations)
  app.js                --> main application module
  index.html            --> app layout file (the main html template file of the app)

karma.conf.js         --> config file for running unit tests with Karma
```


## Testing

Unit tests 

### Running Unit Tests

The `angularjs-form-generator` app comes preconfigured with unit tests. These are written in [Jasmine][jasmine],
which we run with the [Karma][karma] test runner. We provide a Karma configuration file to run them.

* The configuration is found at `karma.conf.js`.
* The unit tests are found next to the code they are testing and have an `_test.js` suffix (e.g.
  `view1_test.js`).

The easiest way to run the unit tests is to use the supplied npm script:

```
npm test
```

This script will start the Karma test runner to execute the unit tests. Moreover, Karma will start
watching the source and test files for changes and then re-run the tests whenever any of them
changes.
This is the recommended strategy; if your unit tests are being run every time you save a file then
you receive instant feedback on any changes that break the expected code functionality.

You can also ask Karma to do a single run of the tests and then exit. This is useful if you want to
check that a particular version of the code is operating as expected. The project contains a
predefined script to do this:

```
npm run test-single-run
```


<a name="e2e-testing"></a>

## Serving the Application Files

While Angular is client-side-only technology and it is possible to create Angular web apps that
do not require a backend server at all, we recommend serving the project files using a local
web server during development to avoid issues with security restrictions (sandbox) in browsers. The
sandbox implementation varies between browsers, but quite often prevents things like cookies, XHR,
etc to function properly when an HTML page is opened via the `file://` scheme instead of `http://`.

### Running the App during Development

The `angular-seed` project comes preconfigured with a local development web server. It is a Node.js
tool called [http-server][http-server]. You can start this web server with `npm start`, but you may
choose to install the tool globally:

```
sudo npm install -g http-server
```

Then you can start your own development web server to serve static files from a folder by running:

```
http-server -a localhost -p 8000
```

Alternatively, you can choose to configure your own web server, such as Apache or Nginx. Just
configure your server to serve the files under the `app/` directory.

### Running the App in Production

This really depends on how complex your app is and the overall infrastructure of your system, but
the general rule is that all you need in production are the files under the `app/` directory.
Everything else should be omitted.

Angular apps are really just a bunch of static HTML, CSS and JavaScript files that need to be hosted
somewhere they can be accessed by browsers.

If your Angular app is talking to the backend server via XHR or other means, you need to figure out
what is the best way to host the static files to comply with the same origin policy if applicable.
Usually this is done by hosting the files by the backend server or through reverse-proxying the
backend server(s) and web server(s).


## Contact


[angularjs]: https://angularjs.org/
[bower]: http://bower.io/
[git]: https://git-scm.com/
[http-server]: https://github.com/indexzero/http-server
[jasmine]: https://jasmine.github.io/
[jdk]: https://wikipedia.org/wiki/Java_Development_Kit
[jdk-download]: http://www.oracle.com/technetwork/java/javase/downloads
[karma]: https://karma-runner.github.io/
[local-app-url]: http://localhost:8000/index.html
[node]: https://nodejs.org/
[npm]: https://www.npmjs.org/