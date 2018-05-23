let data = [1,2,3];
let d = 10;

function getResult() {
  let arr = data.slice(0);
  let newArr;

  for (let i = 0; i < d; i++) {
    let first = arr.shift(1);
    newArr = arr.slice(0,arr.length).concat(first);
    arr = newArr;
  }
  console.log(newArr);
  return newArr;
}

getResult();

function getTwo() {
  let shift = d % data.length;
  let last = data.slice(0,shift);
  let first = data.slice(shift);
  console.log(first.concat(last));
  return last.concat(first);
}

getTwo();

const json =
{
  "first_name": "Jane",
  "last_name": "Smith",
  "email": "jane.smith@wyng.com",
  "gender": null,
  "invitations": [
  {
  "from": "",
  "code": null
  }
  ],
  "company": {
  "name": "",
  "industries": []
  },
  "address": {
  "city": "New York",
  "state": "NY",
  "zip": "10011",
  "street": " "
  }
};

function removeEmpty(obj) {
  let newObj = obj;
  for(let key in newObj) {
    let value = newObj[key];
    if(value === null) {
      delete newObj[key];
    } else if(empty(value) || emptyStr(value)) {
      delete newObj[key];
    } else if (value instanceof Object || value instanceof Array){
      removeEmpty(value);
  }
}
  if(!empty(newObj)) {
    return newObj;
  }
}

function emptyStr(str) {
  if(typeof str === 'string') {
    let string = str.split('');
    if(string.every(el => el === ' ')) {
      return true;
    } else {
      return false;
    }
  }
}

function empty(obj) {
  if(typeof obj === 'object') {
    if (obj.length < 1 || Object.keys(obj).length < 1 ) {
      return true;
    }
  } else {
    return false;
  }
}

emptyStr('   ');
emptyStr('');
removeEmpty(json);
