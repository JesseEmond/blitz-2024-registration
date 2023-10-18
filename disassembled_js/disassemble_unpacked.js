const fs = require('fs');
const { Script } = require('vm');
const process = require('process');
const path = process.argv[2];
const cached_data = fs.readFileSync(path);
const options = { displayErrors: true, cachedData: cached_data, sourceless: true };
new Script(undefined, options);
