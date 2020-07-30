---
pageClass: js
---

# Libraries

A third party library helps you not reinvent the wheel. They are typically packages of codes you can reach out to make your life easier.

## Lodash

Lodash is a utility library. Lodash has many useful functions you can use.

For instance, if you try to access a nested object in a nested object in a nested... follow me.

With lodash you can do the following

```js
const company = {
  employees: {
    Dwight: {
      hobbies: { book: 'Harry Potter' },
      Position: 'Regional manager'
    },
    Kevin: {
      Position: { "Accounting" },
    },
    Andy: {
      school: { "Cornell" },
    }
  }
}

const dwightBook = _.get(company, "employees.Dwight.hobbies.book"); // Harry Potter
```

## Axios

