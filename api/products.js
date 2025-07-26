// Vercel API function to serve scraper data
export default async function handler(req, res) {
  // Set CORS headers for cross-origin requests
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'GET') {
    try {
      // Scraper API URL - must be set in environment variables
      const SCRAPER_API = process.env.SCRAPER_API_URL || 'http://localhost:8000';
      
      // Fetch from your scraper API
      const response = await fetch(`${SCRAPER_API}/products`);
      const data = await response.json();
      
      // Pass through the data
      res.status(200).json(data);

    } catch (error) {
      console.error('API Error:', error);
      // Fallback to sample data if API is down
      const fallbackProducts = [
        {
          title: "Cabela's Bargain Cave - Outdoor Gear Sale",
          price: "$49.99",
          affiliate_url: "https://www.cabelas.com/c/bargain-cave-sale-and-clearance?ranMID=50435&ranEAID=4425421&ranSiteID=4425421",
          image_url: "https://storage.googleapis.com/affiliate-scraper-network-scraper-images/outdoor-gear/cabelas-sale-gear-outdoor.jpg",
          slug: "cabelas-bargain-cave-outdoor-gear"
        },
        {
          title: "Hiking Boots - Amazon Canada",
          price: "$129.99", 
          affiliate_url: "https://www.amazon.ca/s?k=hiking+boots&tag=offgriddisc06-20",
          image_url: "https://storage.googleapis.com/affiliate-scraper-network-scraper-images/outdoor-gear/hiking-boots-amazon-footwear.jpg",
          slug: "hiking-boots-amazon-canada"
        },
        {
          title: "Camping Gear - Amazon Canada",
          price: "$89.99",
          affiliate_url: "https://www.amazon.ca/s?k=camping+gear&tag=offgriddisc06-20", 
          image_url: "https://storage.googleapis.com/affiliate-scraper-network-scraper-images/outdoor-gear/camping-gear-amazon-camping.jpg",
          slug: "camping-gear-amazon-canada"
        }
      ];
      
      res.status(200).json({
        success: true,
        count: fallbackProducts.length,
        data: fallbackProducts,
        fallback: true
      });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}