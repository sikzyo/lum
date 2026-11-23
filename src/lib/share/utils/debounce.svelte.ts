export function debounce<T>(getValue: () => T, delay: number = 400) {
  let value = $state(getValue());

  $effect(() => {
    const currentValue = getValue();
    const timer = setTimeout(() => (value = currentValue), delay);
    return () => clearTimeout(timer);
  });

  return {
    get current() {
      return value;
    },
  };
}
