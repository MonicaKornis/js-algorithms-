function URLify(str) {
  if (typeof str !== 'string' || str.length < 1) {
      throw new TypeError('first argument must be a string or be a string with a length greater than zero ');
    }

    let spacesCount = 0;
    for (let i = 0, ii = str.length; i < ii; i++) {
      if (str[i] === ' ') {
        spacesCount++;
      }
    }

    str = str.split('');
    const trueLength = (str.length -1) + (spacesCount * 2 );

    let index = trueLength;

    for (let i = str.length-1; i >= 0; i--) {
      if (str[i] !== ' ') {

        str[index] = str[i];
        console.log(str);
        index--;
      } else {
        str[index] = '0';
        console.log('---');
        str[index - 1] = '2';
        str[index - 2] = '%';

        index -= 3;
      }
    }

    return str.join('');
  }

URLify('m o n');
