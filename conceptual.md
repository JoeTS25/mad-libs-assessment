### Conceptual Exercise

Answer the following questions below:

- What is React? When and why would you use it?
React is a front-end framework that provides a "blueprint" for apps.  They often provide for code re-use.
- What is Babel?
Babel converts programming language so it is able to be deciphered by any browser no matter how old.
- What is JSX?
JavaScript XML. It makes writing a React app easier because it allows us to write HTML in the app itself instead of a separate file.
- How is a Component created in React?
Components use functions that know how to return HTML to render.

- What are some difference between state and props?
Props are immutable, meaning they cannot change. State is used whenever something is going to change.

- What does "downward data flow" refer to in React?
The parent component sends its information down for the child component to use and provide an outcome.

- What is a controlled component?
React controls what is shown (component value) and what happens when user types (gets kept in state)

- What is an uncontrolled component?
When React is not in control of the form statej. Some inputs and external libraries require it.

- What is the purpose of the `key` prop when rendering a list of components?
Keys help React identify which items are changed/added/removed.
They should be given to repeated elements to provide a stable identity.

- Why is using an array index a poor choice for a `key` prop when rendering a list of components?
It's a poor choice because if you want to reorder anything in the array, that item's index changes and that can cause performance issues.  If anything, this is more of a last resort.

- Describe useEffect.  What use cases is it used for in React components?
A built in hook for "side effects".  Can be used for fetching data, sending data off, starting a timer, manually changing the DOM.

- What does useRef do?  Does a change to a ref value cause a rerender of a component?
A built-in hook where you pass in a value, and the value persists. useRef can be used to access an underlying DOM element, set up/clear timers. It does not cause a rerender. It persists across all renders.

- When would you use a ref? When wouldn't you use one?
You can use a ref for an app that changes video speed so the video itself persists across all renders. In general, you want to do things through React as much as possible.


- What is a custom hook in React? When would you want to write one?
Takes logic from component, and extracts it out into separate file into separate function that can be reused across other components.
You can make hooks to: 
1. Abstract logic
2. Handle repeated tasks
3. Generate your own JSX
