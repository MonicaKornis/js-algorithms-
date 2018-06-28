function lengthOfLongestSubstring(s) {

  if (s.length <= 1)
    return s.length;

  let lookup = {};
  let max = 0;
  let start = 0;

  for (let i = 0; i < s.length; i++) {
    let c = s[i];
    if (Object.keys(lookup).includes(c) && lookup[c] >= start) {
      // console.log(lookup);
      start = i + 1; // Read the logic in the notes above
    }

    lookup[c] = i;

    max = Math.max(max, i - start + 1); // current index minus
    //where you're starting from / have seen a repeating character +1

  }

  console.log(max);
  return max;
}

lengthOfLongestSubstring('laonoimook'); // 4
// console.log(lengthOfLongestSubstring('ABBA')); // 2
