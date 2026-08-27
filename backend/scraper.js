const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs');
const path = require('path');

const RATES_FILE = path.join(__dirname, 'rates.json');

async function scrapeRates() {
  try {
    console.log(`[${new Date().toISOString()}] Scraping latest gold and silver rates...`);
    
    // Scrape Gold & Silver Rates from LiveChennai
    const response = await axios.get('https://www.livechennai.com/gold_silverrate.asp', {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
      }
    });
    
    const $ = cheerio.load(response.data);
    let goldRate = null;
    let silverRate = null;

    // Parsing logic for livechennai.com
    // The very first table usually contains the summary of today's rates
    const summaryRow = $('table').first().find('tbody tr').first();
    const summaryTds = summaryRow.find('td');
    
    if (summaryTds.length >= 3) {
        // Extract base rate, ignoring the change in parenthesis
        const parsedGold = Number($(summaryTds[1]).text().split('(')[0].replace(/[^0-9.]/g, ''));
        const parsedSilver = Number($(summaryTds[2]).text().split('(')[0].replace(/[^0-9.]/g, ''));
        
        if (parsedGold > 4000) goldRate = parsedGold;
        if (parsedSilver > 50) silverRate = parsedSilver;
    }
    
    // Fallback static parsing if cheerio fails due to structural changes
    if (!goldRate || !silverRate) {
      const matchGold = response.data.match(/22\s*Carat.*?<td[^>]*>.*?<td[^>]*>.*?<td[^>]*>\s*([0-9,.]+)/is);
      if (matchGold) goldRate = Number(matchGold[1].replace(/,/g, ''));
      
      const matchSilver = response.data.match(/1\s*gram.*?Silver.*?<td[^>]*>\s*([0-9,.]+)/is);
      if (matchSilver) silverRate = Number(matchSilver[1].replace(/,/g, ''));
    }

    if (goldRate || silverRate) {
      const rates = {
        gold: goldRate,
        silver: silverRate,
        lastUpdated: new Date().toISOString()
      };
      
      fs.writeFileSync(RATES_FILE, JSON.stringify(rates, null, 2));
      console.log(`[${new Date().toISOString()}] Successfully updated rates: Gold: ₹${goldRate}, Silver: ₹${silverRate}`);
      return rates;
    } else {
      throw new Error("Could not parse rates from HTML structure.");
    }
    
  } catch (error) {
    console.error(`[${new Date().toISOString()}] Failed to scrape rates:`, error.message);
    throw error;
  }
}

module.exports = { scrapeRates, RATES_FILE };
