// console.log("hello");
// console.log("     "); // empty line
// console.log("world");

// see: http://stackoverflow.com/questions/11386492/accessing-line-number-in-v8-javascript-chrome-node-js
Object.defineProperty(global, '__stack', {
  get: function(){
    var orig = Error.prepareStackTrace;
    Error.prepareStackTrace = function(_, stack){ return stack; };
    var err = new Error;
    Error.captureStackTrace(err, arguments.callee);
    var stack = err.stack;
    Error.prepareStackTrace = orig;
    return stack;
  }
});

Object.defineProperty(global, '__line', {
  get: function(){
    return __stack[1].getLineNumber();
  }
});

function halp() {
	console.log("Argument Count: "+arguments.length)
	console.log(arguments);
	console.log(" - - - - - - - -")
	var keys = Object.keys(arguments);
	console.log(keys)
	console.log(" - - - - - - - -")
	keys.map(function(a){
		console.log(arguments[a]);
	})
	console.log(arguments.callee.caller.name)
	var caller = arguments.callee.caller.toString()
	console.log(caller)
	clines = caller.split('\n');
	console.log("Caller Lines:"+clines.length)
	console.log(" ")
	console.log(" - - - - - - - -")
	for (var i = 1; i < clines.length - 1; i++) {
		console.log(i + ' ' + clines[i]);
	};
	console.log(" - - - - - - - -")
	console.log(" ")
	// clines.map(function(line){
	// 	if(line.indexOf('halp') > -1) {

	// 	}
	// })


}

function myfunk() {
	var obj = {
		"foo":"bar",
		"this":"that"
	}
	halp('hello', "red", obj, __line);
}

// myfunk();

// console.log(__line);
module.exports = halp;