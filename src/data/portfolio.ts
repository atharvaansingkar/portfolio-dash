import { Stock } from '@/types/portfolio';

export const PORTFOLIO_DATA: Stock[] = [
  // Financial
  { no: 1, name: 'HDFC Bank', purchasePrice: 1490, qty: 50, ticker: 'HDFCBANK.NS', googleSymbol: 'HDFCBANK', exchange: 'NSE', sector: 'Financial' },
  { no: 2, name: 'Bajaj Finance', purchasePrice: 6466, qty: 15, ticker: 'BAJFINANCE.NS', googleSymbol: 'BAJFINANCE', exchange: 'NSE', sector: 'Financial' },
  { no: 3, name: 'ICICI Bank', purchasePrice: 780, qty: 84, ticker: 'ICICIBANK.NS', googleSymbol: 'ICICIBANK', exchange: 'NSE', sector: 'Financial' },
  { no: 4, name: 'Bajaj Housing', purchasePrice: 130, qty: 504, ticker: 'BAJAJHFL.NS', googleSymbol: 'BAJAJHFL', exchange: 'NSE', sector: 'Financial' },
  { no: 5, name: 'Savani Financials', purchasePrice: 24, qty: 1080, ticker: 'SAVANIFIN.BO', googleSymbol: 'SAVANIFIN', exchange: 'BSE', sector: 'Financial' },
  // Technology
  { no: 1, name: 'Affle India', purchasePrice: 1151, qty: 50, ticker: 'AFFLE.NS', googleSymbol: 'AFFLE', exchange: 'NSE', sector: 'Technology' },
  { no: 2, name: 'LTI Mindtree', purchasePrice: 4775, qty: 16, ticker: 'LTIM.NS', googleSymbol: 'LTIM', exchange: 'NSE', sector: 'Technology' },
  { no: 3, name: 'KPIT Tech', purchasePrice: 672, qty: 61, ticker: 'KPITTECH.NS', googleSymbol: 'KPITTECH', exchange: 'NSE', sector: 'Technology' },
  { no: 4, name: 'Tata Tech', purchasePrice: 1072, qty: 63, ticker: 'TATATECH.NS', googleSymbol: 'TATATECH', exchange: 'NSE', sector: 'Technology' },
  { no: 5, name: 'BLS E-Services', purchasePrice: 232, qty: 191, ticker: 'BLSE.NS', googleSymbol: 'BLSE', exchange: 'NSE', sector: 'Technology' },
  { no: 6, name: 'Tanla', purchasePrice: 1134, qty: 45, ticker: 'TANLA.NS', googleSymbol: 'TANLA', exchange: 'NSE', sector: 'Technology' },
  // Consumer
  { no: 1, name: 'DMart', purchasePrice: 3777, qty: 27, ticker: 'DMART.NS', googleSymbol: 'DMART', exchange: 'NSE', sector: 'Consumer' },
  { no: 2, name: 'Tata Consumer', purchasePrice: 845, qty: 90, ticker: 'TATACONSUM.NS', googleSymbol: 'TATACONSUM', exchange: 'NSE', sector: 'Consumer' },
  { no: 3, name: 'Pidilite', purchasePrice: 2376, qty: 36, ticker: 'PIDILITIND.NS', googleSymbol: 'PIDILITIND', exchange: 'NSE', sector: 'Consumer' },
  // Power
  { no: 1, name: 'Tata Power', purchasePrice: 224, qty: 225, ticker: 'TATAPOWER.NS', googleSymbol: 'TATAPOWER', exchange: 'NSE', sector: 'Power' },
  { no: 2, name: 'KPI Green', purchasePrice: 875, qty: 50, ticker: 'KPIGREEN.NS', googleSymbol: 'KPIGREEN', exchange: 'NSE', sector: 'Power' },
  { no: 3, name: 'Suzlon', purchasePrice: 44, qty: 450, ticker: 'SUZLON.NS', googleSymbol: 'SUZLON', exchange: 'NSE', sector: 'Power' },
  { no: 4, name: 'Gensol', purchasePrice: 998, qty: 45, ticker: 'GENSOL.NS', googleSymbol: 'GENSOL', exchange: 'NSE', sector: 'Power' },
  // Pipes
  { no: 1, name: 'Hariom Pipes', purchasePrice: 580, qty: 60, ticker: 'HARIOMET.NS', googleSymbol: 'HARIOMET', exchange: 'NSE', sector: 'Pipes' },
  { no: 2, name: 'Astral', purchasePrice: 1517, qty: 56, ticker: 'ASTRAL.NS', googleSymbol: 'ASTRAL', exchange: 'NSE', sector: 'Pipes' },
  { no: 3, name: 'Polycab', purchasePrice: 2818, qty: 28, ticker: 'POLYCAB.NS', googleSymbol: 'POLYCAB', exchange: 'NSE', sector: 'Pipes' },
  // Others
  { no: 1, name: 'Clean Science', purchasePrice: 1610, qty: 32, ticker: 'CLEANSC.NS', googleSymbol: 'CLEANSC', exchange: 'NSE', sector: 'Others' },
  { no: 2, name: 'Deepak Nitrite', purchasePrice: 2248, qty: 27, ticker: 'DEEPAKNTR.NS', googleSymbol: 'DEEPAKNTR', exchange: 'NSE', sector: 'Others' },
  { no: 3, name: 'Fine Organic', purchasePrice: 4284, qty: 16, ticker: 'FINEORG.NS', googleSymbol: 'FINEORG', exchange: 'NSE', sector: 'Others' },
  { no: 4, name: 'Gravita', purchasePrice: 2037, qty: 8, ticker: 'GRAVITA.NS', googleSymbol: 'GRAVITA', exchange: 'NSE', sector: 'Others' },
  { no: 5, name: 'SBI Life', purchasePrice: 1197, qty: 49, ticker: 'SBILIFE.NS', googleSymbol: 'SBILIFE', exchange: 'NSE', sector: 'Others' },
];

export const TOTAL_INVESTMENT = PORTFOLIO_DATA.reduce((sum, s) => sum + s.purchasePrice * s.qty, 0);
