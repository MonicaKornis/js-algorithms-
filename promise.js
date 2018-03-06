var Promise = require('es6-promise').Promise;

var promiseCount = 0;

function myPromise() {
  let thisPromiseCount = ++promiseCount;
  console.log(thisPromiseCount + `: SYNC started - sync Code Started - ${new Date().getTime()}`);

  let p1 = new Promise(function(resolve, reject) {
          console.log(thisPromiseCount + `:Promise started - async coded started - ${new Date().getTime()}`);
          window.setTimeout(function() { resolve(thisPromiseCount);}, Math.random() * 2000 + 10000);
        });

      p1.then(function(val){
        console.log(val + `: Promise fulfilled - async code terminated ${ new Date().getTime()}`);
      }).catch( error => {
      return console.log(`Handling reject promise: ${error}`);
      }
    );

  console.log(thisPromiseCount + `: promise made - SYNC code terminated. ${ new Date().getTime()}`);
}
