export function FirstLetterUpperCase(array) {
  const newArray = array.map((el) => {
    const newEl = el.charAt(0).toUpperCase() + el.slice(1);
    return newEl;
  });
  return newArray;
}
