var assert = require("assert");
var {get,set,modify} = require("deep-getter-setter");
var parse = require("../src/logotomy.js").parse;
var data = parse("Yo\n"
 + "	vi\n"
 + "		una vez\n"
 + "		 a un tipo\n"
 + "	 	 pero\n"
 + "					hacía\n"
 + "						cosas\n"
 + "					o\n"
 + "					intentaba\n"
 + "						hacer cosas\n"
 + ".");
console.log(JSON.stringify(data, null, 4));