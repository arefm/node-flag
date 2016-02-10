'use strict'

const path = require('path'),
	cmdArgs = process.argv,
	validArgsPerfixesRegExp = new RegExp('^(\-\-.+|\-.{1})', 'g'),
	args = {}

cmdArgs.forEach((arg, idx) => {
	if (path.parse(arg).dir) return
	//get argument title
	let isTitle = arg.match(validArgsPerfixesRegExp)
	if (isTitle) {
		let newArg = {
			arg: isTitle[0].replace(/^(\-)/g, '').replace(/^(\-)/g, ''),
			val: cmdArgs[idx + 1] && !cmdArgs[idx + 1].match(validArgsPerfixesRegExp) ? cmdArgs[idx + 1] : null
		}
		if (newArg.val) args[newArg.arg] = newArg.val
	}
 })

let validFlags = [];

module.exports = {
	validFlags: (args) => {
		let argsType = Object.prototype.toString.call(args).match(/\ [A-Z]{1}[a-z]+/g)[0].trim().toLowerCase()
		if (['array', 'string'].indexOf(argsType) > -1) {
			if (argsType === 'string') args = [args]
			validFlags = args
		}
	},
	getAll: () => {
		for (let arg in args) {
			if (validFlags.length && validFlags.indexOf(arg) < 0) {
				delete args[arg]
			}
		}
		return Object.keys(args).length ? args : null;
	},
	get: (arg) => {
		if (validFlags.length)
			return validFlags.indexOf(arg) > -1 ? (args[arg] || null) : null
		else
			return args[arg] || null
	}
}