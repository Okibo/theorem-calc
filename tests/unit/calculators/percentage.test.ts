import { calculatePercentage } from '@/lib/calculations/percentage';

describe('calculatePercentage', () => {
  describe('basic calculations', () => {
    it('should calculate 25% of 100 and return 25', () => {
      const result = calculatePercentage(100, 25);
      expect(result).toBe(25);
    });

    it('should calculate 50% of 200 and return 100', () => {
      const result = calculatePercentage(200, 50);
      expect(result).toBe(100);
    });

    it('should calculate 10% of 1000 and return 100', () => {
      const result = calculatePercentage(1000, 10);
      expect(result).toBe(100);
    });
  });

  describe('zero amount handling', () => {
    it('should return 0 when amount is 0', () => {
      const result = calculatePercentage(0, 25);
      expect(result).toBe(0);
    });

    it('should return 0 when percentage is 0', () => {
      const result = calculatePercentage(100, 0);
      expect(result).toBe(0);
    });

    it('should return 0 when both amount and percentage are 0', () => {
      const result = calculatePercentage(0, 0);
      expect(result).toBe(0);
    });
  });

  describe('decimal percentages', () => {
    it('should handle decimal percentages like 12.5%', () => {
      const result = calculatePercentage(100, 12.5);
      expect(result).toBe(12.5);
    });

    it('should handle small decimal percentages like 0.5%', () => {
      const result = calculatePercentage(1000, 0.5);
      expect(result).toBe(5);
    });

    it('should handle decimal amounts with decimal percentages', () => {
      const result = calculatePercentage(99.99, 15.5);
      expect(result).toBeCloseTo(15.4985, 4);
    });
  });

  describe('negative values edge case', () => {
    it('should handle negative amount and return negative result', () => {
      const result = calculatePercentage(-100, 25);
      expect(result).toBe(-25);
    });

    it('should handle negative percentage and return negative result', () => {
      const result = calculatePercentage(100, -25);
      expect(result).toBe(-25);
    });

    it('should handle both negative amount and percentage and return positive result', () => {
      const result = calculatePercentage(-100, -25);
      expect(result).toBe(25);
    });
  });

  describe('precision and rounding', () => {
    it('should handle calculations with floating point precision issues', () => {
      const result = calculatePercentage(10, 3);
      expect(result).toBeCloseTo(0.3, 10);
    });

    it('should preserve precision for currency-like values', () => {
      const result = calculatePercentage(19.99, 10);
      expect(result).toBeCloseTo(1.999, 3);
    });
  });
});
