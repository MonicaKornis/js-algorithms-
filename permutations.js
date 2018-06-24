
function permutations(string) {
  if(string.length === 0) return [];
  if(string.length === 1) return [string];

   let first = string[0];
   let perms = permutations(string.slice(1,string.length)) ;
   let result = [] ;

   for(let i = 0; i < perms.length; i++) {
     let letterIdx = 0 ;


     while( letterIdx <= perms[i].length ) {
       let nextPerm = perms[i].split('');
       nextPerm.splice(letterIdx, 0, first);
       nextPerm = nextPerm.join('');
       result.push( nextPerm);
       letterIdx++;
     }
   }
  result = new Set(result);
  return Array.from(result) ;
}
