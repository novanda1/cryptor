export default function formatUsd(n: number, simple: boolean = true): string | number {
  let formatter = Intl.NumberFormat('en', {
    notation: 'compact',
    style: 'currency',
    currency: 'usd',
    minimumFractionDigits: 2,
  });
  return formatter.format(n);
}
