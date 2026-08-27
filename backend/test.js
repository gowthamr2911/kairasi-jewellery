const axios = require('axios');
const cheerio = require('cheerio');

async function test() {
  const res = await axios.get('https://www.livechennai.com/gold_silverrate.asp', {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'
      }
  });
  const $ = cheerio.load(res.data);
  
  let goldRate = null;
  let silverRate = null;
  
  const summaryRow = $('table').first().find('tbody tr').first();
  const summaryTds = summaryRow.find('td');
  if (summaryTds.length >= 3) {
      goldRate = Number($(summaryTds[1]).text().split('(')[0].replace(/[^0-9.]/g, ''));
      silverRate = Number($(summaryTds[2]).text().split('(')[0].replace(/[^0-9.]/g, ''));
  }
  console.log("Extracted Gold:", goldRate);
  console.log("Extracted Silver:", silverRate);
}
test();
