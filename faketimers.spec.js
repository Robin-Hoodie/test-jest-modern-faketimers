it("should use fake timers in modern mode", () => {
  // This breaks when having @vue/cli-plugin-unit-jest as a dependency
  // Removing it as a dependency will make it work again
  jest.useFakeTimers("modern")
    .setSystemTime(new Date(1991, 0, 10));
  expect(new Date().getFullYear()).toBe(1991);
})
