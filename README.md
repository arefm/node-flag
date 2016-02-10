**NODE-FLAGS**
==============
*Access to Node.js Command Line Flags*
---------------------------------------------

**Required Node 4+ **

**How To**

*install the module:*
`$ npm install node-flags`

*import it:*
```javascript
const nodeFlags = require('node-flags')
``` 

*use it:*
```javascript
// get all command line flags
console.log(nodeFlags.getAll())

// get single command line flag
console.log(nodeFlags.get(/**[FLAG_TITLE]**/))
```

*example:*
```bash
# in Terminal:

$ node app.js --host 127.0.0.1 --port 3000
# OR
$ node app.js -h 127.0.0.1 -p 3000

# NOTE:
# if you use single dash (-) as flag title prefix you can only set 1 character length flag title like -h but if you want to set more than 1 character length flag title you have to set double dashes (--) as flag title prefix like --host  
```
```javascript
// in your application:

'use strict'

const nodeFlags = require('node-flags')

// get all command line flags
console.log(nodeFlags.getAll())
/* result:
	{
		host: '127.0.0.1',
		port: '3000'
	}
	OR:
	{
		h: '127.0.0.1',
		p: '3000'
	}
*/

// get single command line flag
console.log(nodeFlags.get('port') // result: 3000
//OR
console.log(nodeFlags.get('p') // result: 3000
```

**Only Get Valid/Required Flags:**
*if you want to filter ```getAll()``` or ```get()``` results with your valid/required flags just use ```validFlags()``` method before of them.*
```javascript
nodeFlags.validFlags('host')
//OR:
nodeFlags.validFlags(['host', 'port', 'h', 'p'])
```

** **
***THIS IS JUST A SIMPLE WEEKEND PROJECT!***
***[Arefmirhosseini.com](http://arefmirhosseini.com)***