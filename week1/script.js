// 1 - Remove String Spaces
function noSpace(x) {
  return x.replace(/\s/g, '');
}

// 2 - Remove First and Last Character
function removeChar(str) {
  return str.slice(1, -1);
}

// 3 - MakeUpperCase
function makeUpperCase(str) {
  return str.toUpperCase();
}

// 4 - Find Maximum and Minimum Values of a List
function min(list) {
  return Math.min(...list);
}

function max(list) {
  return Math.max(...list);
}

// 5 Count of positives / sum of negatives
function countPositivesSumNegatives(input) {
  if (!input?.length) return [];

  const resArr = input.reduce(
    (acc, cur) => {
      if (cur > 0) {
        ++acc[0];
      } else if (cur < 0) {
        acc[1] += cur;
      }
      return acc;
    },
    [0, 0]
  );

  return resArr;
}

// 6 - Beginner - Reduce but Grow
function grow(x) {
  return x.reduce((acc, cur) => acc * cur, 1);
}

// 7 - Removing Elements
function removeEveryOther(arr) {
  return arr.filter((_, i) => i % 2 === 0);
}

// 8 - Calculate average
function findAverage(array) {
  if (!array.length) return 0;

  const sum = array.reduce((acc, cur) => acc + cur);

  return sum / array.length;
}
