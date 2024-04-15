//FIRST SOLUTION
function validParentheses1(parens){

  const right = [];
  const left = [];
  for(let i = 0; i < parens.length; i++) {
    let current = parens[i];
   if((i === 0 && current === ')')|| parens[parens.length-1] === '(' ) {
     return false;
   } else if (current === ')') {
      if (right.length > 0) {
        right.pop();
      } else {
        left.push(current);
      }
    } else if (current === '(') {
      if (left.length > 0) {
        left.pop();
      } else {
        right.push(current);
      }
    }
  }
  if(right.length === 0 && left.length === 0) {
    return true;
  } else {
    return false;
  }
}


/// BEST
function validParentheses(parens) {
  let count = 0;
  for (let i = 0; i < parens.length; i++) {
    count += (parens[i] === '(' ? 1 : -1);
  }
  return count === 0;
}
