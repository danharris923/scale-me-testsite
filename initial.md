## FEATURE:
You are a multi-agent system using Claude code, instructed via context engineering to build a modular, SEO-optimized affiliate marketing website stack.

## 🎯 Objective:
Generate a reusable **React + Vercel-based website template** for high-speed, scalable affiliate marketing across multiple product niches. This system must support:
- Ultra-fast deployment
- Google Sheets-driven content updates
- Strong CTR/UI psychology
- Competitive SEO strategies for non-WordPress environments

## 📦 Stack:
- **Frontend**: ReactJS (clean, modular)
- **Hosting**: Vercel
- **Backend Data Source**: Google Sheets (real-time updates)
- **Deployment**: Git-push auto-build via Vercel
- **Image Hosting**: Google Cloud Storage (GCS) — will be uploaded from scraper
- **UI Components**: TailwindCSS or similar utility-first styling (lightweight)
- **Optional tools**: Claude-assisted image renaming, AMP support, custom affiliate tag generation

---

## 🧩 Features to Include:

### 🛒 Product Card Component
- Image (served locally via GCS)
- Title
- Current price
- Discount (% off or $ saved)
- Optional CTA: “Buy Now” (with affiliate URL)
- SEO alt tags on images

### 🗂️ Category System
- Group products by tag or Google Sheet tab
- Auto-generate category pages per feed

### 🔍 SEO Components
- Meta tags (title, description) for every page
- OpenGraph + Twitter card support
- Structured data for product schema
- Pre-render fallback pages for SSR simulation on Vercel

### 🚀 Performance
- Mobile-first design
- Lazy-loaded images
- Minimized JS
- Preload key fonts & assets

### 💡 User Interface Psychology
Use university-grade CTR principles and modern UX research. Research includes:
- Stanford Persuasive Tech Lab
- Nielsen Norman Group
- Latest CRO/CTR guides from Shopify, Amazon, and Vercel
Prioritize:
- Rounded buttons
- Red/green/yellow pricing tags
- Large product imagery
- “Only X left” urgency copy
- Mobile-first UX flow
- Sticky headers and CTA zones
- Avoid modals/popups for CTR-sensitive pages

---

## 🧠 Claude Tasks:
1. Research latest UI/UX principles for **high conversion affiliate landing pages**
2. Reference TailwindCSS UI kits, plus open-source Vercel blog templates
3. Build out the core template with:
   - Google Sheets fetcher (CSV or Sheets API)
   - Dynamic homepage grid
   - Category pages
   - Product pages
4. Use dummy content, but structure site for **easy prompt injection** of specific product niches
5. Ensure image loading is from GCS-compatible local URLs (not hotlinked)

---

## 🪪 Identity Context:
This template will be reused for affiliate verticals including:
- Outdoor gear
- Camping
- General clearance/deals
- Musical instruments
- Home improvement
- Women’s fashion
- And more

All will draw from the same master Google Sheet but be filtered per site.

---

## 🔁 Output Format:
Return a complete `/project/` folder with:
- `/components/` for React UI modules
- `/pages/` with `index.js`, `[slug].js`, `categories/`
- `/public/` with placeholder image structure for local hosting
- `/utils/` with Google Sheets parser
- `vercel.json` and `package.json` for deployment

Use only what’s necessary. Minimal bloat. Clean comments. Assume the developer may copy/paste pieces as needed.

---





- Pydantic AI agent that has another Pydantic AI agent as a tool.
- Research Agent for the primary agent 
- CLI to interact with the agent.


## EXAMPLES:

In the `examples/` folder, there is a README for you to read to understand what the example is all about and also how to structure your own README when you create documentation for the above feature.

- `examples/cli.py` - use this as a template to create the CLI
- `examples/agent/` - read through all of the files here to understand best practices for creating Pydantic AI agents that support different providers and LLMs, handling agent dependencies, and adding tools to the agent.

Don't copy any of these examples directly, it is for a different project entirely. But use this as inspiration and for best practices.

## DOCUMENTATION:



 UI/UX Psychology for CTR & Affiliate Design
pgsql
Copy
Edit
https://www.nngroup.com/topic/ecommerce/
https://www.shopify.com/enterprise/conversion-rate-optimization
https://cxl.com/blog/
https://www.smashingmagazine.com/tag/conversion-optimization/
https://baymard.com/blog
 React.js + Tailwind CSS
arduino
Copy
Edit
https://react.dev/
https://nextjs.org/docs
https://vercel.com/templates/next.js
https://tailwindcss.com/docs
https://tailwindui.com/components
https://tailwindcomponents.com/
 Vercel Docs
arduino
Copy
Edit
https://vercel.com/docs
https://vercel.com/docs/git/vercel-for-git
https://vercel.com/docs/environment-variables
https://vercel.com/guides
Google Cloud (GCS + Sheets API)
pgsql
Copy
Edit
https://cloud.google.com/storage/docs
https://cloud.google.com/storage/docs/hosting-static-website
https://cloud.google.com/storage/docs/access-control/making-data-public
https://developers.google.com/sheets/api
https://developers.google.com/sheets/api/quickstart/python
https://stackoverflow.com/questions/33704898/reading-a-public-google-sheet-as-json
 Claude Prompt Engineering (Reference)
arduino
Copy
Edit
https://github.com/f/awesome-chatgpt-prompts
https://www.promptingguide.ai/models/claude
Pydantic AI documentation: https://ai.pydantic.dev/

## OTHER CONSIDERATIONS:

