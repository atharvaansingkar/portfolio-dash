import yahooFinance from 'yahoo-finance2';

export async function fetchQuote(ticker: string) {
  const result = await yahooFinance.quote(ticker);
  return {
    price: result.regularMarketPrice ?? null,
    pe: result.trailingPE ?? null,
    latestEarnings: result.epsTrailingTwelveMonths ?? null,
  };
}
