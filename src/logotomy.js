var {get,set,modify} = require("deep-getter-setter");
/**
 *
 *
 *
 */
function createTreeFromList(list) {
	var tree = {};
	var curStack = [];
	var curLevel = 0;
	for(var a=0; a<list.length; a++) {
		var level = list[a][0];
		var item = list[a][1];
		if(level > curLevel) {
			curLevel = level;
			curStack.push(item);
			set(tree, curStack, {});
		} else if(level === curLevel) {
			curLevel = level;
			curStack[curStack.length-1] = item;
			set(tree, curStack, {});
		} else if(level < curLevel) {
			curLevel = level;
			curStack.pop();
		}
	}
	return tree;
};
/**
 *
 *
 *
 */
function parse(text) {
 text = text.replace(/^\n*|\n*$/g, "");
 text = ":0:" + text;
 text = text.replace(/\n+([\t ]*)/g, function(item, group1) {
 	return "\n:" + group1.length + ":";
 });
 var listOfProperties = text.split("\n").map(function(item) {
 	return item.replace(/^:/g, "").split(":")
 });
	return {
		list: listOfProperties,
		tree: createTreeFromList(listOfProperties)
	};
};
/**
 *
 *
 *
 */
module.exports = {
	parse: parse
};