- dataset.label represent the data-label in the button
- use the fetch to get get the data and convert it to json() format and extract the required data
- use ?. to check the variable passed is not null
- loading is not needed after the data is fetched
- use [] in useeffect for single time loading

# accessing the obj property by . and []

```js
const obj = {
  name: 'John',
  age: 30,
  email: 'john@example.com'
};

// Using dot notation (.) to access the property value
console.log(obj.name); // Output: John

// Using bracket notation ([]) to access the property value
console.log(obj['name']); // Output: John

const propertyName = 'age';

console.log(obj[propertyName]); // Output: 30
```

### destructuring can be done in nesting

### data-label can be used in the btn attribute and can be matched with the fetched data

### on-mouse hover can be used in button and icons

### classList.contains('icon') selects only the button with icon class
