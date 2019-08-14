const intersect = (arr1,arr2) => {
  let largerArr;
  let smallerArr;

  if (arr1.length > arr2.length)  {
    largerArr = arr1;
    smallerArr = arr2;
  } else {
    largerArr = arr2;
    smallerArr = arr1;
  }

  let largest = Math.max(...smallerArr);
  let smallest = Math.min(...smallerArr);

  largerArr = largerArr.filter((num) => num >=  smallest && num <= largest);

  let result = [];
  smallerArr.forEach(num => {
    if(largerArr.includes(num)) {
      result.push(num);
      let i = largerArr.indexOf(num);
      largerArr.splice(i,1);
    }
  });

  return result;
};

//slightly faster solution  -

const intersect2 = (arr1,arr2)  => {
    let larger = arr1.length >= arr2.length ? arr1 : arr2;
    let smaller = arr2.length <= arr1.length ? arr2 : arr1;

    let hash = {};

    for (let i = 0; i < larger.length; i++) {
      let num = larger[i];

      !hash[num] ? hash[num] = 1 : hash[num] ++;
    }

    let result = [];

    smaller.forEach(num =>{
      if(hash[num] >  0) {
        result.push(num);
        hash[num]--;
      }
    });

    return result;
  };
