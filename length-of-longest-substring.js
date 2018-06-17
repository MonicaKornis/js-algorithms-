function lengthOfLongestSubstring(s) {

  if (s.length <= 1)
    return s.length;

  let lookup = {};
  let len = s.length;
  let max = 0;
  let start = 0;

  for (let i = 0; i < len; i++) {
    let c = s.charAt(i);
    if (Object.keys(lookup).includes(c) && lookup[c] >= start) {
      // console.log(lookup);
      start = lookup[c] + 1; // Read the logic in the notes above
    }

    lookup[c] = i;

    max = Math.max(max, i - start + 1); // current index minus
    //where you're starting from / have seen a repeating character +1
    console.log(start);
    console.log(i-start+1);
    console.log(i);
    console.log(max);
    console.log('-------');
  }

  return max;
}

console.log(lengthOfLongestSubstring('OBAMACAREi')); // 4
// console.log(lengthOfLongestSubstring('ABBA')); // 2








function lengthOfLongestSubstringNoRepeat(string) {
  let max = 0;
  let start = 0;
  let lookup = {};

  for (var i = 0; i < string.length; i++) {
    let current = string[i];
    if (Object.keys(lookup).includes(current) && start < lookup[current]) {
      start = lookup[current] + 1;
    }

    lookup[current] = i;
    max = Math.max(max, i - start + 1);
  }

  return max;
}
