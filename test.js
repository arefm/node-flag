'use strict'

const nodeFlags = require('./index')

//set valid flags
// nodeFlags.validFlags(['port', 'host'])

//get all flags
console.log(nodeFlags.getAll())

//get single flag
console.log(nodeFlags.get('host'))