const fs = require('fs');
const utils = require('./utils');
const axios = require('axios');
const moment = require('moment');

let args = process.argv.slice(2);

let country_code = 'TH';
let csvFile = `./tests/input/shop_sku_5m.csv`;
let outputDir = './tests/output';

if (args.length > 0) {
  country_code = args[0];
}
if (args.length > 1) {
  csvFile = args[1];
}
if (args.length > 2) {
  outputDir = args[2];
}

let domain = utils.Shopee.domainMapping(country_code);

async function getCSVData() {
  let data = [];
  var loadData = new Promise(function (resolve, reject) {
    fs.createReadStream(csvFile, 'utf8')
      .pipe(
        new require('csv-reader')({
          parseNumbers: true,
          parseBooleans: true,
          skipHeader: true,
          trim: true,
        })
      )
      .on('data', function (row) {
        data.push({
          shopid: +row[0],
          itemid: +row[1],
        });
        if (data.length % 1000000 == 0)
          console.log(`Loaded ${data.length} data`);
      })
      .on('end', function () {
        console.log('No more rows!');
        resolve();
      });
  });

  await loadData;

  return data;
}

(async () => {
  console.log('Loading data in progress...');
  let csvData = await getCSVData();
  console.log(`Complete loaded data`);

  let date = moment().format('YYMMDD');
  let current = 1;
  //process 100 rows concurrently and store into the array into file
  let batchSize = 100;

  let start_time = moment().unix();

  while ((current - 1) * batchSize < csvData.length) {
    try {
      let itemArr = await axios.all(
        csvData
          .slice((current - 1) * batchSize, current * batchSize)
          .map(({ shopid, itemid }) =>
            axios
              .get(
                `https://${domain}/api/v4/item/get?itemid=${itemid}&shopid=${shopid}`
              )
              .then((response) => response.data?.data)
          )
      );

      fs.mkdirSync(outputDir, { recursive: true });
      await fs.promises.appendFile(
        `${outputDir}/${country_code}_${date}_${current}.json`,
        JSON.stringify(itemArr.filter((d) => d))
      );
      console.log(
        `Saved as ${outputDir}/${country_code}_${date}_${current}.json`
      );

      current++;
    } catch (err) {
      console.error(`Error: ${JSON.stringify(err.stack)}`);
    }
  }

  let end_time = moment().unix();

  console.log(`Start Time: ${start_time}`);
  console.log(`End Time: ${end_time}`);
  console.log(`Duration: ${end_time - start_time}`);
})();
