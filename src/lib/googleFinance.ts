import axios from 'axios';
import * as cheerio from 'cheerio';

const HEADERS = {
  'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
  'Accept-Language': 'en-US,en;q=0.9',
};

export async function fetchGoogleFundamentals(symbol: string, exchange: 'NSE' | 'BSE') {
  const url = `https://www.google.com/finance/quote/${symbol}:${exchange}`;
  try {
    const { data: html } = await axios.get(url, { headers: HEADERS, timeout: 8000 });
    const $ = cheerio.load(html);
    let pe: number | null = null;
    let latestEarnings: number | null = null;

    $('script[type="application/ld+json"]').each((_, el) => {
      try {
        const json = JSON.parse($(el).html() || '{}');
        if (json.name === symbol) {
          pe = json?.trailingPE ?? null;
          latestEarnings = json?.epsTrailingTTM ?? null;
        }
      } catch {
        // malformed JSON-LD, skip
      }
    });

    if (pe === null) {
      $('[data-attrid]').each((_, el) => {
        const attr = $(el).attr('data-attrid') || '';
        const text = $(el).text().trim();
        if (attr.includes('PE') || attr.includes('price_earnings'))
          pe = parseFloat(text) || null;
      });
    }

    return { pe, latestEarnings };
  } catch {
    return { pe: null, latestEarnings: null };
  }
}
