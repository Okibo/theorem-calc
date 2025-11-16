/**
 * Calculate the percentage of an amount
 * @param amount - The base amount to calculate percentage from
 * @param percentage - The percentage value
 * @returns The percentage of the amount
 */
export function calculatePercentage(amount: number, percentage: number): number {
  return (amount * percentage) / 100;
}
