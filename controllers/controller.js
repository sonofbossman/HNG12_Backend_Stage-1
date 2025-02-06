import axios from "axios";
import {
  isArmstrong,
  isPerfect,
  isPrime,
  digitSum,
} from "../utils/utilFunc.js";

export const classifyNum = async (req, res) => {
  const { number } = req.query;
  // Validate input
  if (!number || isNaN(number)) {
    return res.status(400).json({ number, error: true });
  }

  const num = parseInt(number, 10);
  const primeStatus = isPrime(num);
  const perfectStatus = isPerfect(num);
  const armstrongStatus = isArmstrong(num);
  const sumOfDigits = digitSum(num);

  let properties = [];
  if (armstrongStatus) {
    properties.push("armstrong");
  }
  properties.push(num % 2 === 0 ? "even" : "odd");

  // Fetch fun fact from Numbers API using the math category.
  let funFact = "";
  try {
    const response = await axios.get(`http://numbersapi.com/${num}/math?json`);
    funFact = response.data.text;
  } catch (error) {
    funFact = "Fun fact not available.";
  }

  return res.status(200).json({
    number: num,
    is_prime: primeStatus,
    is_perfect: perfectStatus,
    properties: properties,
    digit_sum: sumOfDigits,
    fun_fact: funFact,
  });
};
