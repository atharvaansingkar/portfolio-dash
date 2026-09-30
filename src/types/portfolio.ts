export interface Stock {
  no: number;
  name: string;
  purchasePrice: number;
  qty: number;
  ticker: string;
  googleSymbol: string;
  exchange: 'NSE' | 'BSE';
  sector: string;
}

export interface StockWithLiveData extends Stock {
  cmp: number | null;
  investment: number;
  presentValue: number | null;
  gainLoss: number | null;
  gainLossPct: number | null;
  portfolioPct: number;
  pe: number | null;
  latestEarnings: number | null;
  error?: string;
}

export interface SectorSummary {
  sector: string;
  totalInvestment: number;
  totalPresentValue: number | null;
  totalGainLoss: number | null;
}

export interface QuotesApiResponse {
  [ticker: string]: { price: number | null; error?: string };
}

export interface FundamentalsApiResponse {
  pe: number | null;
  latestEarnings: number | null;
  error?: string;
}
