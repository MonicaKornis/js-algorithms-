var firstUniqChar = function(s) {
    let seen = {};
    for(let i = 0; i < s.length; i++) {
        let currentChar = s[i];
        if(seen[currentChar] !== undefined ) {
            seen[currentChar] ++;
        } else {
            seen[currentChar] = 1;
        }
    }

    seen = Object.keys(seen).filter(letter => seen[letter] === 1);

    if(seen.length < 1) return -1;

    let indexes  = [];
    seen.forEach( letter => indexes.push(s.indexOf(letter)));
    indexes = indexes.sort((a,b) => a-b);
    return indexes.shift();
};
