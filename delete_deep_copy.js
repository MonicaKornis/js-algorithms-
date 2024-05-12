const json =
{
  "first_name": "J",
  "last_name": "Johnson",
  "email": "jordan.smith@google.com",
  "gender": null,
  "invite": [
  {
  "from": "",
  "code": null
  }
  ],
  "company": {
  "name": "Maine",
  "industries": [{ data: { data: { data: [{data: [null]}]}}}]
  },
  "address": {
  "city": "New York",
  "state": null,
  "zip": "10027",
  "street": "  "
  }
};

function removeEmpty(obj) {
  let newObj = obj;

  for (let i = 0; i < 2; i++) {
    for(let key in newObj) {
      let value = newObj[key];
      if(value === null || empty(value) || emptyStr(value)) {
        delete newObj[key];
      } else if (typeof value === 'object'){
        removeEmpty(value);
      }
    }
  }

  if(!empty(newObj)) return newObj;
}

function emptyStr(str) {
  return typeof str === 'string' ? str.split('').every(el => el === ' ') : false;
}

function empty(obj) {
  if(obj instanceof Object) return Object.keys(obj).length < 1;
}

removeEmpty(json);
