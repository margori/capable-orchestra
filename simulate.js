const axios = require('axios').default;
const { sleepSync } = require('extra-sleep');

const url = process.argv[2];
const waitTime = process.argv[3];

console.log(`url: ${url}`);
console.log(`wait time: ${waitTime}`);

let count = 0;

const main = async () => {
  while (true) {
    try {
      const response = await axios.get(url);
      console.log(`${count} ${response.data}`);
    } catch (err) {
      console.log(`${count} Error: ${err.message}`);
    }
    count++;
    count = count % 10;
    sleepSync(waitTime);
  }
};
main();
