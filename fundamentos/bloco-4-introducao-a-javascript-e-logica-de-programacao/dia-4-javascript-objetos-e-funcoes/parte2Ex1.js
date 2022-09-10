function palindrome(palavra) {
  for (var index = 0; index < palavra.length; index++) {
    if (palavra[index] !== palavra[palavra.length - 1 - index]) {
      return false;
    }
  }
  return true;
}
palindrome("A man, a plan, a canal. Panama");
