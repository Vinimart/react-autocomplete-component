export default function highlightSubstring(
  text: string,
  inputValue: string,
  style: unknown,
): string {
  const regex = new RegExp(inputValue, "gi");
  return text.replace(
    regex,
    (match) => `<span class="${style}">${match}</span>`,
  );
}
