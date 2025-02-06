# Stage 1 - Number Classification API

## Task Description

Create an API that accepts a number via a GET request and returns:

- The number itself
- Whether the number is prime (`is_prime`)
- Whether the number is a perfect number (`is_perfect`)
- A list of properties which includes:
  - "armstrong" if it is an Armstrong number (sum of the cubes of its digits equals the number)
  - Parity ("odd" or "even")
- The sum of its digits (`digit_sum`)
- A fun fact fetched from the Numbers API (using the math category)

## API Endpoint

```http
GET https://<your-deployed-domain>/api/classify-number?number=371
```

## Success Response (200 OK)

```json
{
  "number": 371,
  "is_prime": false,
  "is_perfect": false,
  "properties": ["armstrong", "odd"],
  "digit_sum": 11,
  "fun_fact": "371 is an Armstrong number because 3^3 + 7^3 + 1^3 = 371"
}
```

## Error Response (400 Bad Request)

```json
{
  "number": "alphabet",
  "error": true
}
```

- [Numbers API Documentation](http://numbersapi.com/#42)
- [Parity on Wikipedia](<https://en.wikipedia.org/wiki/Parity_(mathematics)>)
