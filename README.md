# 🚀 Scale-Me Testsite

A modern affiliate marketing website that connects to your scraper API for real-time product data.

## ⚡ Quick Setup

### 1. Clone and Setup
```bash
git clone https://github.com/danharris923/scale-me-testsite.git
cd scale-me-testsite

# Install dependencies
npm install

# Run setup script to connect to your scraper API
npm run setup
```

### 2. The setup script will:
- Ask for your scraper API URL (e.g., `http://YOUR-SERVER-IP:8000`)
- Test the connection
- Update your API configuration
- Create `.env.local` file

### 3. Deploy to Vercel
```bash
npm run deploy
```

## 🏗️ Architecture

```
Your Scraper API ──→ This Website ──→ Users
   (GCP VM)           (Vercel)
```

## 📁 File Structure

```
testsite/
├── index.html          # Main website (displays products)
├── api/products.js     # Vercel API route (fetches from scraper)
├── setup-api.js        # Setup script for API connection
├── .env.local          # Local environment variables
└── package.json        # Node.js configuration
```

## 🔧 Manual Configuration

If you prefer to configure manually:

1. **Update API endpoint** in `api/products.js`:
   ```javascript
   const SCRAPER_API = 'http://YOUR_SCRAPER_IP:8000';
   ```

2. **Create `.env.local`**:
   ```bash
   SCRAPER_API_URL=http://YOUR_SCRAPER_IP:8000
   ```

3. **Set Vercel environment variable**:
   - Go to Vercel dashboard
   - Settings → Environment Variables
   - Add `SCRAPER_API_URL` = `http://YOUR_SCRAPER_IP:8000`

## 🧪 Testing

```bash
# Test your scraper API directly
curl http://YOUR_SCRAPER_IP:8000/products

# Test your Vercel API route (after deployment)
curl https://your-site.vercel.app/api/products

# Or use the npm script
npm run test-api
```

## 🎨 Customization

- **Theme**: Edit CSS classes in `index.html`
- **Layout**: Modify HTML structure
- **Data Display**: Update JavaScript in `index.html`
- **API Logic**: Modify `api/products.js`

## 🔄 Data Flow

1. **Scraper** runs on your GCP VM → Saves JSON files
2. **API Server** serves JSON files at `http://your-ip:8000`
3. **Vercel API route** fetches from your API server
4. **Frontend** displays products from Vercel API route
5. **Users** see live product data

## 🚨 Troubleshooting

### Site shows fallback data?
- Check if your scraper API is running: `curl http://YOUR_IP:8000/health`
- Verify firewall port 8000 is open on GCP
- Check Vercel environment variables

### API connection errors?
- Ensure your GCP VM IP is correct
- Test API directly: `curl http://YOUR_IP:8000/products`
- Check CORS settings in your scraper's `api_server.py`

### Local development?
- Use `.env.local` for local API URL
- For production, set environment variable on Vercel

## 📞 Support

- **Scraper Issues**: Check `scrape-me` repository
- **Site Issues**: Check this repository's issues
- **Integration Issues**: Verify API connectivity

---

**This site automatically displays live data from your scraper!** 🔥