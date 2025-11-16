import "@testing-library/jest-dom";

// Only run DOM-specific mocks in jsdom environment
if (typeof Element !== "undefined") {
  // Mock scrollIntoView for radix-ui Select component
  Element.prototype.scrollIntoView = jest.fn();

  // Mock matchMedia
  Object.defineProperty(window, "matchMedia", {
    writable: true,
    value: jest.fn().mockImplementation((query) => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: jest.fn(),
      removeListener: jest.fn(),
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    })),
  });
}
