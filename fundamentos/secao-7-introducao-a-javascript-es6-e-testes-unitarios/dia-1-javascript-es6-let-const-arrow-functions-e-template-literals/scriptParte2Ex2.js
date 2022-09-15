const longestWord = (str) =>
  str.match(/\w+/g).sort((a, b) => b.length - a.length)[0];

console.log(
  longestWord(
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ultrices quam nec turpis iaculis tempor. Nullam nec ipsum quis ex pharetra vehicula. Sed vitae egestas lacus, in porta libero. In enim odio, ultricies nec congue et, bibendum eu metus. Fusce eget neque aliquam ex sollicitudin posuere."
  )
);
