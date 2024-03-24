export const html = (strings, ...rest) => {
  rest.reduce((acc, template, idx) => {
    console.log(template);
  }, '');
  return strings.join("");
};
