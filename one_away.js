function oneAway(string1,string2) {
  let lengthDiff = Math.abs(string1.length - string2.length);
  if(lengthDiff > 1 ) return false;
  let longerStr = string1.length > string2.length ? string1 : string2;

  let edited = false;
  for (let i = 0; i < longerStr.length; i++) {
    if (string1[i] !== string2[i]) {
      if(edited) {
        return false;
      }
      edited = true;
    }
  }
  // console.log(true);
  return true;
}

oneAway('mooi','mooo');
