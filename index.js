// This is intentionality a crappy web server.
// It take randomly from 4 to 30 seconds time to boot up
// and after 20 seconds on boot up it intentionally fails.

require('console-stamp')(console);
const express = require('express');
const os = require('os');
const {sleepSync} = require('extra-sleep');
const Chance = require('chance');
const chance = new Chance();

const app = express();

const randomBootUpTime = chance.integer({min: 4000, max: 30000});

console.log(`Waiting ${randomBootUpTime} ms...`);
sleepSync(randomBootUpTime);

if (randomBootUpTime > 20000) {
  console.error('Forced server shut down');
  process.exit(1);
}

console.log(`... done.`);

app.get('/', (req, res) => {
  const version = process.env.VERSION || 'unknown';
  const clientName = process.env.CLIENT_ID || 'unknown';
  const hostname = os.hostname();
  const response = `v:${version} c:${clientName} h:${hostname}`;
  console.error(`GET / ${response}`);
  res.send(response);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
