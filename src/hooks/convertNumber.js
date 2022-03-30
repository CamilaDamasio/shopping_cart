export default function convertNumber(num, format) {
  let result = '';
  let numToString = String(num);
  let indexAlt = 0;
  for (let index = 0; index < format.length; index += 1) {
    if (Number.isInteger(parseInt(format[index])) === false) {
      result += format[index];
    } else {
      result += numToString[indexAlt];
      indexAlt += 1;
    }
  }
  return result;
}
