function palendromePermutation(string) {
  let letters = string.toLowerCase().split('').filter(letter => !' :+!@#$%^&*()'.includes(letter));

  let letterCounts = new Object;
  for (var i = 0; i < letters.length; i++) {
    if(!letterCounts[letters[i]]) {
      letterCounts[letters[i]] = 1;
    } else {
      letterCounts[letters[i]] ++;
    }
  }

  let counts = vals(letterCounts).map( num => num % 2 );
  return counts.filter(num => num !== 0).length > 1 ? false : console.log(true);

}

var vals = (object) => {
  let arr = [];
  let keys = Object.keys(object);
  for (var i = 0; i < keys.length; i++) {
    arr.push(object[keys[i]]);
  }
  return arr;
};

isAPalendrome("race car");
