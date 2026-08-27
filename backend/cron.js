const cron = require('node-cron');
const { scrapeRates } = require('./scraper');

// Schedule tasks to be run on the server
function initCronJobs() {
  console.log("Initializing cron jobs...");
  
  // Run everyday at 9:30 AM (typically when rates update in India)
  cron.schedule('30 9 * * *', async () => {
    console.log("Running daily market rate scraper cron job...");
    try {
      await scrapeRates();
    } catch (error) {
      console.error("Cron Job Scraper Failed:", error);
    }
  });
  
  // Run it immediately on startup so we have data
  scrapeRates().catch(e => console.error("Initial scrape failed:", e));
}

module.exports = { initCronJobs };
