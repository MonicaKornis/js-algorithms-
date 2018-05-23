const json =
{
  "first_name": "J",
  "last_name": "Jones",
  "email": "jane.smith@google.com",
  "gender": null,
  "invitations": [
  {
  "from": "",
  "code": null
  }
  ],
  "company": {
  "name": "Chicago",
  "industries": []
  },
  "address": {
  "city": "New York",
  "state": null,
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
