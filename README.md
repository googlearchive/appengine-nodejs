# appengine-nodejs

An experimental set of node.js libraries for interacting with App Engine specific services from within [Google App Engine Managed VMs](https://developers.google.com/appengine/docs/managed-vms/) using Custom Runtimes.

To get started, clone the [quickstart][3] project and follow the instructions there.

## Usage

This library will only work inside App Engine Managed VMs, or with the Managed VM SDK.

Declare this library as a dependency in `package.json`:

~~~~
  "dependencies": {
    "appengine": "git://github.com/GoogleCloudPlatform/appengine-nodejs.git",
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
    "googleapis" : "latest"
    "gcloud" : "latest"
  }
~~~~

All API functions provided by this library take as their last argument a callback, i.e. a function of the form `function(err, arg1, arg2, ...)`. The first argument is always an optional `Error` object (or `null` if there is no error). The subsequent arguments depend on the API function itself and are described below.

### Logging

##### appengine.logOneLine

~~~~
  appengine.logOneLine(request, message, level, function(err) { ... });
~~~~

Logs a message (a string) at the specified log level.

Log records are buffered by default. They are flushed when `request.end()` is called or when the buffer grows too big or after a certain amount of time (currently, after 60 seconds).

Two caveats:

 - log flushes are never asynchronous, so for a flush to happen after 60 seconds your application must regularly call `appengine.logOneLine`
 - the `request.end()` method is never called on background requests

The `appengine.flushLogs` method can be used to flush the buffered logs at any time.

Valid log levels are:
~~~~
  appengine.LogLevel.DEBUG
  appengine.LogLevel.INFO
  appengine.LogLevel.WARNING
  appengine.LogLevel.ERROR
  appengine.LogLevel.CRITICAL
~~~~

The callback is optional. Note that while most calls to `logOneLine` will return immediately, some may result in the buffer being flushed.

The following code snippet logs at the `INFO` level and ignores any logging errors:
~~~~
  appengine.logOneLine(request, 'this is a test', appengine.LogLevel.INFO);
~~~~

For backward compatibility, the same function can be invoked without a log level, with or without a callback:

~~~~
  appengine.logOneLine(request, message, function(err) { ... });

  appengine.logOneLine(request, message);
~~~~

In this case, it logs the given message at the DEBUG log level.

##### appengine.flushLogs

~~~~
  appengine.flushLogs(request, function(err) { ... });
~~~~

Flushes any buffered log records.

### Memcache

##### appengine.memcache.get

~~~~
  appengine.memcache.get(request, key, function(err, value) { ... });
~~~~

Reads from memcache the value (a string) for a given key (also a string).

##### appengine.memcache.set

~~~~
  appengine.memcache.set(request, key, value, function(err) { ... });
~~~~

Writes to memcache a value (a string) for a given key (also a string).

### Task Queues

##### appengine.taskqueue.add

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

##### appengine.modules.getHostname

~~~~
  appengine.modules.getHostname(request, module, version, instance, function(err, hostname) { ... });
~~~~

Returns the hostname (a string) to use to talk to the given module/version/instance (all strings, all required).

### System

##### appengine.system.getBackgroundRequest

~~~~
  appengine.system.getBackgroundRequest(request, function(err, backgroundRequest) { ... });
~~~~

Returns a new request-like object that can be used to make App Engine API calls in the background, i.e. outside a request handler.

A common pattern is to call this API during a start request and store the returned request object for later use.

Application code should not assume any specific properties to be defined on the returned background request object.

### Auth

##### appengine.auth.getServiceAccountToken

~~~~
  appengine.auth.getServiceAccountToken(request, function(err, token) { ... });
~~~~

Returns an OAuth token for the service account for the VM as provided by the metadata server. `token` is an object with three properties:

* `accessToken`: a string, the access token itself
* `tokenType`: a string, the type of token returned, e.g. `"Bearer"`
* `expiresIn`: a number, the time to expiration in seconds

### Metadata

##### appengine.metadata.getAttribute

~~~~
  appengine.metadata.getAttribute(request, name, function(err, value) { ... });
~~~~

Returns the value (a string) of the metadata attribute with the specified name (a string).
For example, to retrieve the `foo` instance attribute, the name to use is `"instance/attributes/foo"`.


### Middleware

##### appengine.middleware.base

~~~~
  appengine.middleware.base(request, response, function() { ... });
~~~~

A middleware function that extracts App Engine-specific information from request headers and environment properties and sets them into the request under `request.appengine`.
This function must be called by all http handlers that intend to make any App Engine API calls.

[1]: https://www.npmjs.org/package/googleapis
[2]: https://github.com/GoogleCloudPlatform/gcloud-node
[3]: https://github.com/GoogleCloudPlatform/appengine-nodejs-quickstart
