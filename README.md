# appengine-nodejs

An experimental set of node.js libraries for interacting with App Engine specific services from within [Google App Engine Managed VMs](https://developers.google.com/appengine/docs/managed-vms/).

## Usage

This library will only work inside App Engine Managed VMs, or with the Managed VM SDK.

Declare this library as a dependency in `package.json`:

~~~~
  "dependencies": {
    "appengine": "git://github.com:GoogleCloudPlatform/appengine-nodejs.git",
  }
~~~~

Add a `Dockerfile` to the application with the following contents:

~~~~
  FROM google/nodejs-runtime
~~~~

Then, before calling functions in this library, http handlers need to make sure to call the `appengine.middleware.base` function with three arguments: the node.js request, the node.js response and a callback.

Frameworks such as `express.js` do this automatically if you register that function as a middleware. Here's an example:

~~~~
  var appengine = require('appengine');
  var express = require('express');

  var app = express();
  app.use(appengine.middleware.base);
  // ... register any handlers...
  app.listen(8080, '0.0.0.0');
~~~~

## APIs

This library currently supports a subset of the App Engine APIs available to the official runtimes such as Java or Python.

An application may use any other Google APIs, such as Google Cloud Storage or Google Calendar, e.g. via the [googleapis][1] or [gcloud-node][2] libraries:

~~~~
  "dependencies": {
    "googleapis" : "0.7.0"
    "gcloud" : "git://github.com:GoogleCloudPlatform/gcloud-node.git"
  }
~~~~

All API functions provided by this library take as their last argument a callback, i.e. a function of the form `function(err, arg1, arg2, ...)`. The first argument is always an optional `Error` object (or `null` if there is no error). The subsequent arguments depend on the API function itself and are described below.

### Logging

~~~~
  appengine.logOneLine(request, message, function(err) { ... });
~~~~

Logs a message (a string).

### Memcache

~~~~
  appengine.memcache.get(request, key, function(err, value) { ... });
~~~~

Reads from memcache the value (a string) for a given key (also a string).

~~~~
  appengine.memcache.set(request, key, value, function(err) { ... });
~~~~

Writes to memcache a value (a string) for a given key (also a string).

### Task Queues

~~~~
  appengine.taskqueue.add(request, taskOptions, function(err) { ... });
~~~~

Add a task to a queue. `taskOptions` must be an object with the following properties:

* `url`: a string, url to dispatch to, required
* `queueName`: a string, queue name, optional
* `taskName`: a string, task name, optional
* `etaUsec`: a string, ETA in microseconds, e.g. `"1000"`, optional
* `method`: http method to use, one of `"get"`, `"post"`, `"put"`, or `"delete"`, optional, defaults to `"post"`
* `body`: a string, the body of the request, optional, for put and post methods only
* `headers`: optional, an object containing http headers as property/value pairs

### Modules

~~~~
  appengine.modules.getHostname(request, module, version, instance, function(err, hostname) { ... });
~~~~

Returns the hostname (a string) to use to talk to the given module/version/instance (all strings, all required).

### Auth

~~~~
  appengine.auth.withAccessToken(request, function(err, token) { ... });
~~~~

Returns the OAuth token provided by the VM metadata service. `token` is an object with two properties:

* `token`: a string, the token itself
* `tokenType`: a string, the type of token

### Metadata

~~~~
  appengine.metadata.getAttribute(request, name, function(err, value) { ... });
~~~~

Returns the value (a string) of the metadata attribute with the specified name (a string).
For example, to retrieve the `foo` instance attribute, the name to use is `"instance/attributes/foo"`.


### Middleware

~~~~
  appengine.middleware.base(request, response, function() { ... });
~~~~

A middleware function that extracts App Engine-specific information from request headers and environment properties and sets them into the request under `request.appengine`.
This function must be called by all http handlers that intend to make any App Engine API calls.

[1]: https://www.npmjs.org/package/googleapis
[2]: https://github.com/GoogleCloudPlatform/gcloud-node
