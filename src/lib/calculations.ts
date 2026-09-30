import { Stock } from '@/types/portfolio';

export const investment = (s: Stock) => s.purchasePrice * s.qty;
export const presentValue = (s: Stock, cmp: number) => cmp * s.qty;
export const gainLoss = (s: Stock, cmp: number) => presentValue(s, cmp) - investment(s);
export const gainLossPct = (s: Stock, cmp: number) => gainLoss(s, cmp) / investment(s);
export const portfolioPct = (s: Stock, totalInvestment: number) => investment(s) / totalInvestment;
