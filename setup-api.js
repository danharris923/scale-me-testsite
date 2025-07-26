#!/usr/bin/env node

/**
 * Setup script to connect your site to your scraper API
 * Run this after cloning to automatically configure the API connection
 */

const fs = require('fs');
const path = require('path');
const readline = require('readline');

// Colors for console output
const colors = {
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  red: '\x1b[31m',
  blue: '\x1b[34m',
  reset: '\x1b[0m'
};

function log(message, color = 'reset') {
  console.log(`${colors[color]}${message}${colors.reset}`);
}

async function askQuestion(question) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  return new Promise((resolve) => {
    rl.question(question, (answer) => {
      rl.close();
      resolve(answer.trim());
    });
  });
}

async function testApiConnection(apiUrl) {
  try {
    const fetch = (await import('node-fetch')).default;
    const response = await fetch(`${apiUrl}/health`, { timeout: 5000 });
    return response.ok;
  } catch (error) {
    return false;
  }
}

async function updateApiEndpoint(apiUrl) {
  const apiFilePath = path.join(__dirname, 'api', 'products.js');
  
  if (!fs.existsSync(apiFilePath)) {
    log('❌ API file not found at api/products.js', 'red');
    return false;
  }

  let content = fs.readFileSync(apiFilePath, 'utf8');
  
  // Update the API URL in the file
  const oldPattern = /const SCRAPER_API = process\.env\.SCRAPER_API_URL \|\| '[^']+'/;
  const newLine = `const SCRAPER_API = process.env.SCRAPER_API_URL || '${apiUrl}'`;
  
  content = content.replace(oldPattern, newLine);
  
  fs.writeFileSync(apiFilePath, content);
  log(`✅ Updated API endpoint to: ${apiUrl}`, 'green');
  return true;
}

async function createEnvFile(apiUrl) {
  const envContent = `SCRAPER_API_URL=${apiUrl}\n`;
  fs.writeFileSync('.env.local', envContent);
  log('✅ Created .env.local file', 'green');
}

async function main() {
  log('\n🚀 Site-to-Scraper API Setup Script', 'blue');
  log('=' .repeat(50), 'blue');
  
  // Get API URL from user
  const apiUrl = await askQuestion('\n📡 Enter your scraper API URL (e.g., http://YOUR-SERVER-IP:8000): ');
  
  if (!apiUrl.startsWith('http')) {
    log('❌ Invalid URL format. Please include http:// or https://', 'red');
    process.exit(1);
  }

  log('\n🔍 Testing API connection...', 'yellow');
  
  const isConnected = await testApiConnection(apiUrl);
  
  if (isConnected) {
    log('✅ API connection successful!', 'green');
  } else {
    log('⚠️  Could not connect to API (might be offline)', 'yellow');
    const proceed = await askQuestion('Continue anyway? (y/n): ');
    if (proceed.toLowerCase() !== 'y') {
      log('Setup cancelled.', 'red');
      process.exit(1);
    }
  }

  // Update files
  log('\n📝 Updating configuration files...', 'yellow');
  
  await updateApiEndpoint(apiUrl);
  await createEnvFile(apiUrl);
  
  log('\n🎉 Setup Complete!', 'green');
  log('\nNext steps:', 'blue');
  log('1. Deploy to Vercel: npx vercel --prod', 'yellow');
  log('2. Set environment variable on Vercel:', 'yellow');
  log(`   SCRAPER_API_URL=${apiUrl}`, 'yellow');
  log('3. Your site will now fetch live data from your scraper!', 'yellow');
  
  log('\n📋 Quick test commands:', 'blue');
  log(`curl ${apiUrl}/products`, 'yellow');
  log('curl http://localhost:3000/api/products (if running locally)', 'yellow');
}

main().catch(console.error);