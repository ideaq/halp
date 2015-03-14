## Research

### Articles

+ Comparing Winston and Bunyan Node.js Logging:
https://strongloop.com/strongblog/compare-node-js-logging-winston-bunyan/
+ (Not so) Advanced logging with NodeJs:
http://tostring.it/2014/06/23/advanced-logging-with-nodejs/
+ Nodejitsu logging article: https://docs.nodejitsu.com/articles/intermediate/how-to-log
+ Mastering Node Logging: http://devgigs.blogspot.co.uk/2014/01/mastering-nodejs-logging.html
+ SOQ: http://stackoverflow.com/questions/12016474/node-js-logging
+ Joyent blog on loggin in prod: https://www.joyent.com/blog/node-js-in-production-runtime-log-snooping


### Logging-as-a-Service (Third-Party) Providers

+ RayGun: https://raygun.io/pricing
+ Log4stuff: http://log4stuff.com/
+ LogEntries: https://logentries.com/doc/nodejs/ &
https://www.npmjs.com/package/le_node
+ Loggly: https://www.loggly.com/docs/nodejs-logs/
+ Splunk: https://www.splunk.com/en_us/products/pricing.html


### Useful

+ Node **util**: https://nodejs.org/api/all.html#all_util_log_string
+ Node **console**: https://nodejs.org/api/console.html
+ Line numbers in Node/JS: 
http://stackoverflow.com/questions/11386492/accessing-line-number-in-v8-javascript-chrome-node-js
+ V8 stack traces (felixg): https://github.com/felixge/node-stack-trace
+ StatsD sample config:
https://github.com/etsy/statsd/blob/master/exampleConfig.js
JS Arguments: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments
+ Path of caller function in Node:
http://stackoverflow.com/questions/13227489/how-can-one-get-the-file-path-of-the-caller-function-in-node-js
Node **process** module: https://github.com/bpaquet/node-logstash

### Existing Modules

+ Leg: https://github.com/deoxxa/leg
+ Winston: https://github.com/winstonjs/winston
+ Node Logstash: https://github.com/bpaquet/node-logstash
(steep learning curve)
+ **StatsD**: https://github.com/etsy/statsd/

### Other

+ grunt-env: https://github.com/jsoverson/grunt-env
+ hubot ("hew-bot"): https://hubot.github.com/
+ logstash: http://logstash.net/

## Name of the Module

Obviously I would prefer to have the name log,
but TJ has that: https://www.npmjs.com/package/log


## process.env output

When we `node` then `console.log(process.env);` (in Apple Terminal) we get:

```js
{ TERM_PROGRAM: 'Apple Terminal',
  TERM: 'xterm-256color',
  SHELL: '/bin/bash',
  TMPDIR: '/var/folders/kj/7xfhyhrf6sz5w4mr7s6c0000gn/T/',
  Apple_PubSub_Socket_Render: '/private/tmp/com.apple.launchd.yNZYD1S/Render',
  TERM_PROGRAM_VERSION: '342.1',
  OLDPWD: '/Users/me/code/halp',
  TERM_SESSION_ID: '8ED14D42-7323-405A-BC61-01F783F7CA56',
  USER: 'me',
  PATH: '/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin:/usr/local/git/bin',
  LANG: 'en_GB.UTF-8',
  XPC_FLAGS: '0x0',
  XPC_SERVICE_NAME: '0',
  HOME: '/Users/n',
  SHLVL: '1',
  LOGNAME: 'me',
  _: '/usr/local/bin/node' }
```
running the *same* console.log() from **iTerm** yields:
```js

{ TERM_PROGRAM: 'iTerm.app',
  TERM: 'xterm',
  SHELL: '/bin/bash',
  TMPDIR: '/var/folders/kj/7xfhyhrj6t5f6sz5w4mr7s6c0000gn/T/',
  Apple_PubSub_Socket_Render: '/private/tmp/com.apple.launchd.yNZYD1/Render',
  OLDPWD: '/Users/n/code/hapi-auth-jwt',
  USER: 'me',
  COMMAND_MODE: 'unix2003',
  SSH_AUTH_SOCK: '/private/tmp/com.apple.launchd.ccnWktOTO3/Listeners',
  __CF_USER_TEXT_ENCODING: '0x1F5:0x0:0x0',
  ES_HOST: '127.0.0.1',
  PATH: '/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin:/usr/local/git/bin',
  PWD: '/Users/me/code/time',
  LANG: 'en_GB.UTF-8',
  ITERM_PROFILE: 'Default',
  XPC_FLAGS: '0x0',
  XPC_SERVICE_NAME: '0',
  SHLVL: '1',
  HOME: '/Users/n',
  COLORFGBG: '7;0',
  ITERM_SESSION_ID: 'w0t0x4',
  LOGNAME: 'me',
  ES_PORT: '9200',
  JWT_SECRET: 'NeverShareYourSecret',
  SECURITYSESSIONID: '186a5',
  _: '/usr/local/bin/node' }
```

As we can see, the output is different depending on which terminal
application we use (i.e. *inconsisten) ... #interesting ...
