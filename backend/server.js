const express = require('express');
const cors = require('cors');
const fs = require('fs');
const { initCronJobs } = require('./cron');
const { RATES_FILE, scrapeRates } = require('./scraper');

const app = express();
app.use(cors());
app.use(express.json());

// Initialize Cron Jobs
initCronJobs();

// API Endpoint to fetch rates
app.get('/api/rates', async (req, res) => {
  try {
    if (fs.existsSync(RATES_FILE)) {
      const data = fs.readFileSync(RATES_FILE, 'utf8');
      const parsedData = JSON.parse(data);
      
      // If data is older than 24 hours, try a background refresh
      const lastUpdated = new Date(parsedData.lastUpdated);
      const now = new Date();
      if ((now - lastUpdated) > 24 * 60 * 60 * 1000) {
         scrapeRates().catch(e => console.error("Background refresh failed", e));
      }
      
      return res.json({ success: true, data: parsedData });
    }
    
    // Fallback if file doesn't exist yet
    res.status(404).json({ success: false, message: 'Rates data not found yet. Scraper is likely still running.' });
  } catch (error) {
    res.status(500).json({ success: false, error: 'Failed to retrieve rates.' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Backend server running on http://localhost:${PORT}`);
});
