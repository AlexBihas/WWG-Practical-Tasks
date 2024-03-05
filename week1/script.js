// 1 - Remove String Spaces
const noSpace = x => x.replace(/\s/g, '');

// 2 - Remove First and Last Character
const removeChar = str => str.slice(1, -1);

// 3 - MakeUpperCase
const makeUpperCase = str => str.toUpperCase();

// 4 - Find Maximum and Minimum Values of a List
const min = list => Math.min(...list);

const max = list => Math.max(...list);

// 5 Count of positives / sum of negatives
const countPositivesSumNegatives = input =>
  !input?.length
    ? []
    : input.reduce(
        (acc, cur) =>
          cur > 0 ? [++acc[0], acc[1]] : cur < 0 ? [acc[0], acc[1] + cur] : acc,
        [0, 0]
      );

// 6 - Beginner - Reduce but Grow
const grow = x => x.reduce((acc, cur) => acc * cur, 1);

// 7 - Removing Elements
const removeEveryOther = arr => arr.filter((_, i) => i % 2 === 0);

// 8 - Calculate average
const findAverage = array =>
  !array.length ? 0 : array.reduce((acc, cur) => acc + cur) / array.length;
