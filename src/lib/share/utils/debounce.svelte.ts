export function debounce<T>(getValue: () => T, time: number = 400) {
  let value = $state(getValue());

  $effect(() => {
    const debounceValue = getValue();
    const timer = setTimeout(() => (value = debounceValue), time);

    return () => clearTimeout(timer);
  });

  return {
    get current() {
      return value;
    },
  };
}
