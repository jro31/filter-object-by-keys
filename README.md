# Filter object by keys

`filter-object-by-keys` accepts an object and an array of keys, and returns a new object of _just_ the keys passed-in.

## Setup

Install the package:

```
npm install filter-object-by-keys
```

## Usage

`filter-object-by-keys` requires two arguments, and has a third optional argument:

- `object` - The object to be filtered
- `keys` - An array of the keys to be returned in the new object
- `throwError` (optional) - Defaults to `true`
  - If `true`, an error will be thrown if a key which is not present in the object, is passed-in with the `keys` array
  - If `false`, no error will be thrown, and the key which does not exist in `object` will be included in the return with a value of `undefined`

```js
import filterObject from 'filter-object-by-keys';

const myObject = { name: 'John Smith', age: 45, job: 'Accountant' };

console.log(filterObject(myObject, ['name', 'job'])); // { name: 'John Smith', job: 'Accountant' }
console.log(filterObject(myObject, ['age', 'name'])); // { age: 45, name: 'John Smith' }

console.log(filterObject(myObject, ['name', 'hometown'])); // Error: Unrecognised key passed to filter-object-by-keys
console.log(filterObject(myObject, ['name', 'hometown'], false)); // { name: 'John Smith', hometown: undefined }
```
