title: React Hooks
subtitle:
class: animation-fade
layout: true

<!-- This slide will serve as the base layout for all your slides -->

.bottom-bar[
{{title}}
]

---

class: impact

# {{title}}

## {{subtitle}}

.title-oli[
Oliver Sturm &bull; @olivers[@fosstodon.org] &bull; oliver@oliversturm.com
]

.title-logo[
<img src="template/devexpress.png" id="devexpress" alt="DevExpress">
]

---

## Oliver Sturm

- Training Director at DevExpress
- Consultant, trainer, author, software architect and developer for 30 years

- Contact: oliver@oliversturm.com

---

## Agenda

- Hooks vs HOCs - what's the point?
  - (Note the amazing wordplay in the previous bullet)
- Standard hooks
- Custom hooks
- Hooks in 3rd party libraries

---

## What's the point of React Hooks?

- React has a functional structure with a side-effect free rendering mechanism
- Preference for functional component implementation
  - Class-based components still remain available!
- HOCs always supported for modularization
- Complex class and HOC structures end up with deep nesting
- Hooks: functional state management based on closures
- Popular by now in other JS-based environments

---

## The Hook Rules

```js
const MyComponent = () => {
  // Only use hook calls at the top level (that's rule 1)
  // of React functions (that's rule 2).
  // Note that "React functions" include custom hooks.

  const [val, setVal] = useState();

  return <div>Val is {val}</div>;
};
```

---

class: impact

# Demo

## Classes, HOCs, and Hooks

## Custom Hooks

---

class: columns-ul

## Standard Hooks

- `useState` - simple state management
- `useEffect` - run imperative code when deps change
- `useContext` - access React context
- `useReducer` - advanced state management
- `useMemo` - memoize a value and recalculate when deps change
- `useCallback` - memoization helper for functions, simplify syntax just a little over `useMemo`
- `useRef` - "local variable", often used with refs
- `useImperativeHandle` - special support for forward refs
- `useLayoutEffect` - special variant of `useEffect` for synchronous effects
- `useDebugValue` - add debug label to custom hook

---

## Hooks in 3rd party libraries

- 3rd party libraries started adopting hooks quickly
- Most current libraries now offer hooks as an alternative to their old APIs
- Examples coming up: Material UI and Redux

---

class: impact

# Demo

## Standard and 3rd Party Hooks

---

## Sources

- This presentation:

  - Repository with sample code: <br>https://github.com/oliversturm/react-hooks
  - https://oliversturm.github.io/react-hooks/
  - PDF download: <br>https://oliversturm.github.io/react-hooks/slides.pdf

---

class: impact

# Thank You

Please feel free to contact me about the content anytime.

.title-oli[
Oliver Sturm &bull; @olivers[@fosstodon.org] &bull; oliver@oliversturm.com
]

.title-logo[
<img src="template/devexpress.png" id="devexpress" alt="DevExpress">
]
