export const STRATEGIES = {
  dividend: {
    slug: 'dividend-stocks',
    name: 'Dividend Stocks',
    emoji: '💵',
    short: 'Steady cash flow that pays me while I work.',
    title: 'Dividend Stock Analysis for Long-Term Income',
    description:
      'Dividend stock and dividend ETF analysis from an ordinary investor with a day job: yield, payout safety, dividend growth and how I build passive income.',
    intro: [
      'Dividend stocks are the income engine of my portfolio. While I am at my desk, they keep paying — and I reinvest that cash to buy more.',
      'Here I break down dividend payers and dividend ETFs the way a busy person needs: Is the yield real? Can the company keep paying? Is the dividend growing faster than inflation?',
    ],
  },
  growth: {
    slug: 'growth-stocks',
    name: 'Growth Stocks',
    emoji: '🚀',
    short: 'Long-term upside from companies that keep getting bigger.',
    title: 'Growth Stock Analysis for Long-Term Investors',
    description:
      'Growth stock analysis from an ordinary investor with a day job: revenue growth, margins, earnings and valuation of US tech and innovation companies.',
    intro: [
      'Growth stocks are the long-term engine of my portfolio — companies that can be much bigger in ten years than they are today.',
      'I focus on what actually drives long-term returns: revenue growth, margins, competitive advantage and a valuation that still makes sense. No hype, just the numbers explained in plain English.',
    ],
  },
} as const;

export type StrategyKey = keyof typeof STRATEGIES;
