function finddUniqueChars(string) {
  string = string.sort();
  string.forEach((char,i) => {
    if(char === string[i+1]) return false;
  });
  return true; 
}
