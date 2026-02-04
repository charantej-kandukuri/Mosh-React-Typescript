### Props

The props are inputs/arguments to a component.
The props are immutable.
Analogy - functional arguments

### state

State is internal data managed by component,
that can changes over time.
Analogy - local variables

### 21 Inspecting componet with React dev tools

### 22 Excercise: Building a button Component

### 23 Excercise: Showing an Alert

### 24 Styling components

### 25 Vanilla CSS

### 25 CSS Module

### 26 CSS in JS

### 27 styled components

### 28 seperation of concern

### 29 inline styles

### 30 Popular UI libraries

### 31 Adding icons - React Icons 4.7.1 - npm i react-icons@4.7.1

### 32 Excercise: CSS Module

### 34 Building a Like Component

### 35 Understanding the State Hook

- it update state async not immediately
- State is stored outside of components
- we can only use hooks only at top level of the components

### 36 Choosing the State Structure

- Best Practices
  - Avoid redundant vairables
  - Group related variables inside an object
  - Avoid deeply nested structures

### 37 Keeping Components Pure

Pure Component:
Given the same input, always returns the same result.
So that react can skip re-rendering.

### 38 Understanding the Strict Mode

StrictMode is a component in react.
Its there to catch potential problems - Impure components.
Form React 18, the strict mode is turned ON by default.
The strict mode in not availble in prod build.
eg:

```
let count = 0;

function Message() {
    count++
    return <div>Message {count}</div>
}

// Message 2
// Message 4
// Message 6
```

### 39 Updating Objects

Similar to props, state is immutable

```
const handleClick = () => {
    const newDrink = {
        ...drink,
        price: 10
    };
    setDrink(newDrink)
}
```

### 40 Updating Nested Objects

```
const [customer, setCustomer] = useState({
    name: 'John',
    address: {
        city: 'San Francisco',
        zipCode: 94111
    }
})

const handleClick = () => {
    setCustomer({
        ...customer,
        address: { ...customer.address, zipcode: 94112 }
    })
}
```

### 41 Updating Arrays

```
const [tags, setTags] = useState['happy', 'cheerful'];

handleClick = () => {
    // Add
    setTags([...tags, 'exciting'])

    // Remove
    setTags(tags.filter(tag => tag !== 'happy'));

    // update
    setTags(tags.map(tag => tag === 'happy' ? 'happiness' ? tag))
}
```

### 42 Updating Array of Objects

```
const [bugs, setBugs] = useState([
    {id: 1, title: 'Bug 1', fixed: false},
    {id: 2, title: 'Bug 2', fixed: false},
])

const handleClick = () => {
    setBugs(bugs.map(bug => bug.id === 1 ? {...bug, fixed: true}: bug))
}
```

### 43 Simplifying update logic with Immer

-npm i immer@9.0.19

```
setBugs(produce(draft => {
   const bug = draft.find(bug => bug.id === 1);

   if(bug) bug.fixed = true
}))

```

### 44 Sharing State between Components

Parent component should hold the data.
whenever a product is added or removed count will auto update in navbar.

```
            App Compoent
                |
            ____|____
            |       |
            NavBar  Cart
```

### 45 Excecise: Updating State

### 46 Building an expandable component

### 52 react-hook-forms useform hook

### 53 validations in react-hook-forms

### 54 zod validation - Schema based validation with Zod

- npm i zod@3.20.6
- npm i @hookform/resolvers@2.9.11

zod.dev for complete documentation

### 55 disaable submit button

### 56 Project: Expense Tracker

### 59 Building the expense form

### 60 Integrating React Hook Form and Zod

### 61 adding an Expense
