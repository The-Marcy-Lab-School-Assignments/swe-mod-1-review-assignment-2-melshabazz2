# Short Responses

For this short response assignment, aim to write a response with the following qualities (your instructor will give you feedback on these areas):
- [] Addresses all parts of the prompt
- [] Accurately uses relevant technical terminology
- [] Is free of grammar and spelling mistakes (double check with grammarly!)
- [] Uses markdown to enhance readability (preview in VS Code with Command/Control + Shift + V)
- [] Is easy to comprehend

For each prompt below, write your response in the space provided. Aim to answer each prompt in 2-5 concise sentences. Make sure to preview your markdown to check how it is rendered before submitting.

## Prompt 1

Read the following code:

```js
const playlist1 = { name: "My Favorites", songCount: 10 };
const playlist2 = playlist1;
playlist2.songCount = 15;
console.log(playlist1.songCount);
```

Part A: What will be logged to the console? Why?


Part B: How would you modify the code so that reassigning `playlist2.songCount` does NOT affect `playlist1.songCount`? Write the corrected code below your response (we've provided the broken code again for you to fix). 

### Response 1

Your response...
- What would be logged is 15, the reason being is because ``playlist1`` points to a location in the computers memory that holds the data, when the code is executed you are not creating a new object but instead creating a new variable that points to the same location as ``playlist1``. So when you modify the object through ``playlist2.songCount`` you are changing the data stored in that location.


- To modify the code so that reassigning `playlist2.songCount`does not affect `playlist1.songCount` you would use the spread operator to create a copy of the object and reassign the value inside of the copy to avoid modifying the original.

**Corrected Code:**

```js
// fix this!
const playlist1 = { name: "My Favorites", songCount: 10 };
const playlist2 = {...playlist1};
playlist2.songCount = 15;
console.log(playlist1.songCount);
```

---

## Prompt 2

```js
const students = [
  { name: "Maya", grade: 92, passed: true },
  { name: "Jamal", grade: 78, passed: true },
  { name: "Destiny", grade: 88, passed: true },
  { name: "Marcus", grade: 95, passed: true }
];
```

For each task below, identify which array method (forEach, filter, map, find, or reduce) you would use.

1. You need to get an array containing only students who scored above 85.
2. You need to find the student named "Destiny" and update their grade to 90.
3. You need to calculate the average grade of all students.
4. You need to create an array of strings in the format: "Maya: 92"

### Response 2

Your response...
- For question 1 I would use ``.filter()``
- For question 2 I would use ``.find()``
- For question 3 I would use ``.reduce()``
- For question 4 I would use ``.map()``

---

## Prompt 3

We should expect that the code below prints the array `[ 'A', 'B', 'C', 'D' ]` but an error is thrown when the third line of code is executed.

Explain why this error occurs, how to fix it, and provide a suggestion for how to avoid this error in the future.

```js
const letters = ['a', 'b', 'c', 'd'];
const capitalize = (str) => str.toUpperCase();

const upperCaseLetters = letters.map(capitalize());
// Uncaught TypeError: Cannot read properties of undefined (reading 'toUpperCase')

console.log(upperCaseLetters);
```

### Response 3

Your response...
- The code throws an error because the ``capitalize`` function is being called immediately rather than passed as a callback function on the ``.map()`` method.

- To fix it we would remove the parentheses when passing the function to ``.map()``. This passes a reference to the capatilize function as the callback and allows ``.map()`` to call it correctly for each element in the array.

- Fixed Code:
```js
const letters = ['a', 'b', 'c', 'd'];
const capitalize = (str) => str.toUpperCase();

const upperCaseLetters = letters.map(capitalize);
// Uncaught TypeError: Cannot read properties of undefined (reading 'toUpperCase')

console.log(upperCaseLetters);
```
- To avoid this we'd have to remeber the rule for the array methods, if a function that takes only one argument is passed you just pass the function name.

---

## Prompt 4

Given this code:

```js
const orders = [
  { id: 1, total: 45 },
  { id: 2, total: 23 },
  { id: 3, total: 67 }
];

const grandTotal = orders.reduce((sum, order) => {
  return sum + order.total;
}, 0);
```

- Part A: What will `grandTotal` equal after this code runs?
- Part B: Explain what the `0` at the end of the reduce method does. Why is it important?
- Part C: Walk through what happens in the FIRST iteration of reduce:
    - What is the value of sum?
    - What is the value of order?
    - What gets returned?

### Response 4

Your response...

- Part A: The value is the sum of all the ``total`` properties in the orders array.

- Part B: The ``0`` is the initial value of the sum parameter, its important because it sets the intial type and is the correct way for emptyt arrays.

- The value of ``sum`` is ``0``.
- The value of ``order`` is the first element in the ``orders`` array.
- What gets returned is ``45``.