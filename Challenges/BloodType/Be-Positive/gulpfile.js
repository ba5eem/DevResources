(function (console) { "use strict";
var $estr = function() { return js_Boot.__string_rec(this,''); };
function $extend(from, fields) {
	function Inherit() {} Inherit.prototype = from; var proto = new Inherit();
	for (var name in fields) proto[name] = fields[name];
	if( fields.toString !== Object.prototype.toString ) proto.toString = fields.toString;
	return proto;
}
var HxOverrides = function() { };
HxOverrides.__name__ = true;
HxOverrides.cca = function(s,index) {
	var x = s.charCodeAt(index);
	if(x != x) return undefined;
	return x;
};
HxOverrides.substr = function(s,pos,len) {
	if(pos != null && pos != 0 && len != null && len < 0) return "";
	if(len == null) len = s.length;
	if(pos < 0) {
		pos = s.length + pos;
		if(pos < 0) pos = 0;
	} else if(len < 0) len = s.length + len - pos;
	return s.substr(pos,len);
};
var Std = function() { };
Std.__name__ = true;
Std.parseInt = function(x) {
	var v = parseInt(x,10);
	if(v == 0 && (HxOverrides.cca(x,1) == 120 || HxOverrides.cca(x,1) == 88)) v = parseInt(x);
	if(isNaN(v)) return null;
	return v;
};
var js_Node = function() { };
js_Node.__name__ = true;
js_Node.get_assert = function() {
	return js_Node.require("assert");
};
js_Node.get_child_process = function() {
	return js_Node.require("child_process");
};
js_Node.get_cluster = function() {
	return js_Node.require("cluster");
};
js_Node.get_crypto = function() {
	return js_Node.require("crypto");
};
js_Node.get_dgram = function() {
	return js_Node.require("dgram");
};
js_Node.get_dns = function() {
	return js_Node.require("dns");
};
js_Node.get_fs = function() {
	return js_Node.require("fs");
};
js_Node.get_http = function() {
	return js_Node.require("http");
};
js_Node.get_https = function() {
	return js_Node.require("https");
};
js_Node.get_net = function() {
	return js_Node.require("net");
};
js_Node.get_os = function() {
	return js_Node.require("os");
};
js_Node.get_path = function() {
	return js_Node.require("path");
};
js_Node.get_querystring = function() {
	return js_Node.require("querystring");
};
js_Node.get_repl = function() {
	return js_Node.require("repl");
};
js_Node.get_tls = function() {
	return js_Node.require("tls");
};
js_Node.get_url = function() {
	return js_Node.require("url");
};
js_Node.get_util = function() {
	return js_Node.require("util");
};
js_Node.get_vm = function() {
	return js_Node.require("vm");
};
js_Node.get_zlib = function() {
	return js_Node.require("zlib");
};
js_Node.get___filename = function() {
	return __filename;
};
js_Node.get___dirname = function() {
	return __dirname;
};
js_Node.get_json = function() {
	return JSON;
};
js_Node.newSocket = function(options) {
	return new js.Node.net.Socket(options);
};
js_Node.isNodeWebkit = function() {
	return (typeof process == "object");
};
var Gulpfile = function() { };
Gulpfile.__name__ = true;
Gulpfile.main = function() {
	Gulpfile.gulp.task("default",["connect","watch"]);
	Gulpfile.gulp.task("watch",Gulpfile.watch_task);
	Gulpfile.gulp.task("connect",Gulpfile.connect_task);
	Gulpfile.gulp.task("release",Gulpfile.release_task);
};
Gulpfile.release_task = function(cb) {
	Gulpfile.gulp.src("" + "./bin/html5" + "/bin/lib/*").pipe(Gulpfile.gulp.dest("" + "./Be-Positive" + "/js/lib/"));
	Gulpfile.gulp.src("" + "./bin/html5" + "/Be-Positive.js").pipe(Gulpfile.gulp.dest("" + "./Be-Positive" + "/js/"));
	Gulpfile.gulp.src(["" + "./bin/html5" + "/index.html","" + "./bin/html5" + "/bin/{font,graphics}/**/*"]).pipe(Gulpfile.gulp.dest("" + "./Be-Positive" + "/"));
	Gulpfile.gulp.src("" + "./bin/html5" + "/bin/Main.js").pipe(Gulpfile.uglify({ mangle : false})).pipe(Gulpfile.gulp.dest("" + "./Be-Positive" + "/js/lib/"));
};
Gulpfile.connect_task = function(cb) {
	Gulpfile.connect.server({ root : "./", livereload : true});
};
Gulpfile.watch_task = function(cb) {
	Gulpfile.gulp.watch(["" + "./" + "/js/*.js"],Gulpfile.reload);
};
Gulpfile.reload = function(event) {
	console.log("Reloading... " + event.path);
	haxe_Timer.delay(function() {
		Gulpfile.gulp.src(event.path).pipe(Gulpfile.connect.reload());
		console.log("Reloaded");
	},StringTools.endsWith(event.path,"Be-Positive.js")?0:3000);
};
Math.__name__ = true;
var StringTools = function() { };
StringTools.__name__ = true;
StringTools.endsWith = function(s,end) {
	var elen = end.length;
	var slen = s.length;
	return slen >= elen && HxOverrides.substr(s,slen - elen,elen) == end;
};
var haxe_Timer = function(time_ms) {
	var me = this;
	this.id = setInterval(function() {
		me.run();
	},time_ms);
};
haxe_Timer.__name__ = true;
haxe_Timer.delay = function(f,time_ms) {
	var t = new haxe_Timer(time_ms);
	t.run = function() {
		t.stop();
		f();
	};
	return t;
};
haxe_Timer.prototype = {
	stop: function() {
		if(this.id == null) return;
		clearInterval(this.id);
		this.id = null;
	}
	,run: function() {
	}
};
var haxe_io_Bytes = function(length,b) {
	this.length = length;
	this.b = b;
};
haxe_io_Bytes.__name__ = true;
haxe_io_Bytes.alloc = function(length) {
	return new haxe_io_Bytes(length,new Buffer(length));
};
haxe_io_Bytes.ofString = function(s) {
	var nb = new Buffer(s,"utf8");
	return new haxe_io_Bytes(nb.length,nb);
};
haxe_io_Bytes.ofData = function(b) {
	return new haxe_io_Bytes(b.length,b);
};
haxe_io_Bytes.prototype = {
	get: function(pos) {
		return this.b[pos];
	}
	,set: function(pos,v) {
		this.b[pos] = v;
	}
	,blit: function(pos,src,srcpos,len) {
		if(pos < 0 || srcpos < 0 || len < 0 || pos + len > this.length || srcpos + len > src.length) throw new js__$Boot_HaxeError(haxe_io_Error.OutsideBounds);
		src.b.copy(this.b,pos,srcpos,srcpos + len);
	}
	,sub: function(pos,len) {
		if(pos < 0 || len < 0 || pos + len > this.length) throw new js__$Boot_HaxeError(haxe_io_Error.OutsideBounds);
		var nb = new Buffer(len);
		var slice = this.b.slice(pos,pos + len);
		slice.copy(nb,0,0,len);
		return new haxe_io_Bytes(len,nb);
	}
	,compare: function(other) {
		var b1 = this.b;
		var b2 = other.b;
		var len;
		if(this.length < other.length) len = this.length; else len = other.length;
		var _g = 0;
		while(_g < len) {
			var i = _g++;
			if(b1[i] != b2[i]) return b1[i] - b2[i];
		}
		return this.length - other.length;
	}
	,getString: function(pos,len) {
		if(pos < 0 || len < 0 || pos + len > this.length) throw new js__$Boot_HaxeError(haxe_io_Error.OutsideBounds);
		var s = "";
		var b = this.b;
		var fcc = String.fromCharCode;
		var i = pos;
		var max = pos + len;
		while(i < max) {
			var c = b[i++];
			if(c < 128) {
				if(c == 0) break;
				s += fcc(c);
			} else if(c < 224) s += fcc((c & 63) << 6 | b[i++] & 127); else if(c < 240) {
				var c2 = b[i++];
				s += fcc((c & 31) << 12 | (c2 & 127) << 6 | b[i++] & 127);
			} else {
				var c21 = b[i++];
				var c3 = b[i++];
				s += fcc((c & 15) << 18 | (c21 & 127) << 12 | c3 << 6 & 127 | b[i++] & 127);
			}
		}
		return s;
	}
	,readString: function(pos,len) {
		return this.getString(pos,len);
	}
	,toString: function() {
		return this.getString(0,this.length);
	}
	,toHex: function() {
		var s_b = "";
		var chars = [];
		var str = "0123456789abcdef";
		var _g1 = 0;
		var _g = str.length;
		while(_g1 < _g) {
			var i = _g1++;
			chars.push(HxOverrides.cca(str,i));
		}
		var _g11 = 0;
		var _g2 = this.length;
		while(_g11 < _g2) {
			var i1 = _g11++;
			var c = this.b[i1];
			s_b += String.fromCharCode(chars[c >> 4]);
			s_b += String.fromCharCode(chars[c & 15]);
		}
		return s_b;
	}
	,getData: function() {
		return this.b;
	}
};
var haxe_io_Error = { __ename__ : true, __constructs__ : ["Blocked","Overflow","OutsideBounds","Custom"] };
haxe_io_Error.Blocked = ["Blocked",0];
haxe_io_Error.Blocked.toString = $estr;
haxe_io_Error.Blocked.__enum__ = haxe_io_Error;
haxe_io_Error.Overflow = ["Overflow",1];
haxe_io_Error.Overflow.toString = $estr;
haxe_io_Error.Overflow.__enum__ = haxe_io_Error;
haxe_io_Error.OutsideBounds = ["OutsideBounds",2];
haxe_io_Error.OutsideBounds.toString = $estr;
haxe_io_Error.OutsideBounds.__enum__ = haxe_io_Error;
haxe_io_Error.Custom = function(e) { var $x = ["Custom",3,e]; $x.__enum__ = haxe_io_Error; $x.toString = $estr; return $x; };
var js__$Boot_HaxeError = function(val) {
	Error.call(this);
	this.val = val;
	this.message = String(val);
	if(Error.captureStackTrace) Error.captureStackTrace(this,js__$Boot_HaxeError);
};
js__$Boot_HaxeError.__name__ = true;
js__$Boot_HaxeError.__super__ = Error;
js__$Boot_HaxeError.prototype = $extend(Error.prototype,{
});
var js_Boot = function() { };
js_Boot.__name__ = true;
js_Boot.__string_rec = function(o,s) {
	if(o == null) return "null";
	if(s.length >= 5) return "<...>";
	var t = typeof(o);
	if(t == "function" && (o.__name__ || o.__ename__)) t = "object";
	switch(t) {
	case "object":
		if(o instanceof Array) {
			if(o.__enum__) {
				if(o.length == 2) return o[0];
				var str2 = o[0] + "(";
				s += "\t";
				var _g1 = 2;
				var _g = o.length;
				while(_g1 < _g) {
					var i1 = _g1++;
					if(i1 != 2) str2 += "," + js_Boot.__string_rec(o[i1],s); else str2 += js_Boot.__string_rec(o[i1],s);
				}
				return str2 + ")";
			}
			var l = o.length;
			var i;
			var str1 = "[";
			s += "\t";
			var _g2 = 0;
			while(_g2 < l) {
				var i2 = _g2++;
				str1 += (i2 > 0?",":"") + js_Boot.__string_rec(o[i2],s);
			}
			str1 += "]";
			return str1;
		}
		var tostr;
		try {
			tostr = o.toString;
		} catch( e ) {
			if (e instanceof js__$Boot_HaxeError) e = e.val;
			return "???";
		}
		if(tostr != null && tostr != Object.toString && typeof(tostr) == "function") {
			var s2 = o.toString();
			if(s2 != "[object Object]") return s2;
		}
		var k = null;
		var str = "{\n";
		s += "\t";
		var hasp = o.hasOwnProperty != null;
		for( var k in o ) {
		if(hasp && !o.hasOwnProperty(k)) {
			continue;
		}
		if(k == "prototype" || k == "__class__" || k == "__super__" || k == "__interfaces__" || k == "__properties__") {
			continue;
		}
		if(str.length != 2) str += ", \n";
		str += s + k + " : " + js_Boot.__string_rec(o[k],s);
		}
		s = s.substring(1);
		str += "\n" + s + "}";
		return str;
	case "function":
		return "<function>";
	case "string":
		return o;
	default:
		return String(o);
	}
};
var js_NodeC = function() { };
js_NodeC.__name__ = true;
String.__name__ = true;
Array.__name__ = true;
if(Array.prototype.map == null) Array.prototype.map = function(f) {
	var a = [];
	var _g1 = 0;
	var _g = this.length;
	while(_g1 < _g) {
		var i = _g1++;
		a[i] = f(this[i]);
	}
	return a;
};
js_Node.console = console;
js_Node.process = process;
js_Node.require = require;
js_Node.setTimeout = setTimeout;
js_Node.clearTimeout = clearTimeout;
js_Node.setInterval = setInterval;
js_Node.clearInterval = clearInterval;
js_Node.setImmediate = (function($this) {
	var $r;
	var version = HxOverrides.substr(js_Node.process.version,1,null).split(".").map(Std.parseInt);
	$r = version[0] > 0 || version[1] >= 9?js_Node.isNodeWebkit()?global.setImmediate:setImmediate:null;
	return $r;
}(this));
js_Node.clearImmediate = (function($this) {
	var $r;
	var version = HxOverrides.substr(js_Node.process.version,1,null).split(".").map(Std.parseInt);
	$r = version[0] > 0 || version[1] >= 9?js_Node.isNodeWebkit()?global.clearImmediate:clearImmediate:null;
	return $r;
}(this));
js_Node.global = global;
js_Node.module = js_Node.isNodeWebkit()?global.module:module;
js_Node.stringify = JSON.stringify;
js_Node.parse = JSON.parse;
Gulpfile.WEBROOT = "./bin/html5";
Gulpfile.RELEASE_WEBROOT = "./";
Gulpfile.RELEASE_BUILD_TASK = "./Be-Positive";
Gulpfile.gulp = js_Node.require("gulp");
Gulpfile.connect = js_Node.require("gulp-connect");
Gulpfile.uglify = js_Node.require("gulp-uglify");
js_NodeC.UTF8 = "utf8";
js_NodeC.ASCII = "ascii";
js_NodeC.BINARY = "binary";
js_NodeC.BASE64 = "base64";
js_NodeC.HEX = "hex";
js_NodeC.EVENT_EVENTEMITTER_NEWLISTENER = "newListener";
js_NodeC.EVENT_EVENTEMITTER_ERROR = "error";
js_NodeC.EVENT_STREAM_DATA = "data";
js_NodeC.EVENT_STREAM_END = "end";
js_NodeC.EVENT_STREAM_ERROR = "error";
js_NodeC.EVENT_STREAM_CLOSE = "close";
js_NodeC.EVENT_STREAM_DRAIN = "drain";
js_NodeC.EVENT_STREAM_CONNECT = "connect";
js_NodeC.EVENT_STREAM_SECURE = "secure";
js_NodeC.EVENT_STREAM_TIMEOUT = "timeout";
js_NodeC.EVENT_STREAM_PIPE = "pipe";
js_NodeC.EVENT_PROCESS_EXIT = "exit";
js_NodeC.EVENT_PROCESS_UNCAUGHTEXCEPTION = "uncaughtException";
js_NodeC.EVENT_PROCESS_SIGINT = "SIGINT";
js_NodeC.EVENT_PROCESS_SIGUSR1 = "SIGUSR1";
js_NodeC.EVENT_CHILDPROCESS_EXIT = "exit";
js_NodeC.EVENT_HTTPSERVER_REQUEST = "request";
js_NodeC.EVENT_HTTPSERVER_CONNECTION = "connection";
js_NodeC.EVENT_HTTPSERVER_CLOSE = "close";
js_NodeC.EVENT_HTTPSERVER_UPGRADE = "upgrade";
js_NodeC.EVENT_HTTPSERVER_CLIENTERROR = "clientError";
js_NodeC.EVENT_HTTPSERVERREQUEST_DATA = "data";
js_NodeC.EVENT_HTTPSERVERREQUEST_END = "end";
js_NodeC.EVENT_CLIENTREQUEST_RESPONSE = "response";
js_NodeC.EVENT_CLIENTRESPONSE_DATA = "data";
js_NodeC.EVENT_CLIENTRESPONSE_END = "end";
js_NodeC.EVENT_NETSERVER_CONNECTION = "connection";
js_NodeC.EVENT_NETSERVER_CLOSE = "close";
js_NodeC.FILE_READ = "r";
js_NodeC.FILE_READ_APPEND = "r+";
js_NodeC.FILE_WRITE = "w";
js_NodeC.FILE_WRITE_APPEND = "a+";
js_NodeC.FILE_READWRITE = "a";
js_NodeC.FILE_READWRITE_APPEND = "a+";
Gulpfile.main();
})(typeof console != "undefined" ? console : {log:function(){}});
