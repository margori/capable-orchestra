const express = require('express');
const os = require('os');
var Chance = require('chance');
const chance = new Chance();
const { sleepSync } = require('extra-sleep');

// Instantiate Chance so it can be used
const app = express();
const port = 3000;

const random = chance.integer({ min: 4000, max: 25000 });

console.log(`Waiting ${random} ms...`);

sleepSync(random);

if (random > 20000) {
  console.error('Forced error');
  exit(1);
}

console.log(`... done.`);

app.get('/', (req, res) => {
  const version = process.env.VERSION || 'unknown';
  const client = process.env.CLIENT || 'unknown';
  res.send(`Pong v:${version} c:${client} h:${os.hostname()}`);
  console.error('GET /');
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
