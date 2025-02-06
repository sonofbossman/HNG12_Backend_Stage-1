export const digitSum = (num) => {
  return num
    .toString()
    .split("")
    .reduce((acc, digit) => acc + Number(digit), 0);
};

export const isArmstrong = (num) => {
  const digits = num.toString().split("").map(Number);
  const sumOfCubes = digits.reduce((acc, digit) => acc + Math.pow(digit, 3), 0);
  return sumOfCubes === num;
};

export const isPerfect = (num) => {
  if (num < 2) return false;
  let sum = 1; // 1 is a proper divisor for all numbers > 1
  for (let i = 2; i <= Math.floor(num / 2); i++) {
    if (num % i === 0) sum += i;
  }
  return sum === num;
};

export const isPrime = (num) => {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
};
