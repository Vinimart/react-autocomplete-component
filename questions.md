# Assessment Questions

1.  **What is the difference between Component and PureComponent? Give an example where it might break my app.**

    `To be honest I dont now for certain what is the difference, I would say that this topic is related with React Class components and the components lifecycle.`

    ***

2.  **Context + ShouldComponentUpdate might be dangerous. Why is that?**

    `If the consuming component implements ShouldComponentUpdate and doesn't properly compare the Context value changes, it might not re-render when the Context value updates, resulting in stale or incorrect data being displayed. Since I dont use class components very often, I dont have much experience with this topic.`

    ***

3.  **Describe 3 ways to pass information from a component to its PARENT.**

    `1. We can use functions as props from the Parent, then the child can call the function and pass the information as an argument.`

    `2. We can use Context API and wrap the Parent component with the Context Provider, then the child components can use the Context Consumer to pass the information to all components within the Provider, including the parent.`

    `3. We can use a storage management library like Redux or Zustand to store the information in a global state, then the child components can dispatch an action to update the state and the parent can subscribe to the state changes and get the information`

    ***

4.  **Give 2 ways to prevent components from re-rendering.**

    `1. We can use React.memo to memoize the component and prevent it from re-rendering when the props dont change.`

    `2. We can use React.useMemo to memoize the value of a variable and prevent it from re-rendering when the value doesn't change.`

    ***

5.  **What is a fragment and why do we need it? Give an example where it might break my app.**

    `A fragment is a component that doesn't render any HTML element, it just renders its children. We need it to avoid unnecessary wrapper HTML elements in the DOM, generating a cleaner document.`

    `It might break the app if we use it to wrap a list of elements that need a key prop, because the fragment doesn't accept the key prop.`

    ***

6.  **Give 3 examples of the HOC pattern.**

    `1. Well I definitely know the withAuth HOC patten, very useful in auth systems, like websites that has different levels of access.`

    `2. Another example is the withTheme HOC pattern, very useful in websites that has different themes, like dark mode and light mode.`

    `3. I can also give the withError HOC pattern, but I personally prefer to use axios interceptors to handle errors globally.`

    ***

7.  **What's the difference in handling exceptions in promises, callbacks, and async...await?**

    `For promises I always use the .catch() method to handle the errors.`

    `For callbacks the error handling is typically done within the callback function.`

    `For async/await I use the try/catch block.`

    ***

8.  **How many arguments does setState take and why is it async?**

    `It takes two args, you can say that the first one is the getter and the second is the setter.`

    `It is considered async for performance reasons. The state change get into a queue and it is processed at the end of the current render cycle, this way avoiding unnecessary re-renders.`

    ***

9.  **List the steps needed to migrate a Class to Function Component.**

    `To do this refactoring I would follow these steps:`

    `1. I would start by creating a new function component and copy the JSX from the class component to the function component.`

    `2. I would remove the constructor and the state from the class component and create a useState hook in the function component to handle the state.`

    `3. I would remove the lifecycle methods from the class component and use the useEffect hook in the function component to handle the side effects if needed.`

    `4. I would remove the class methods from the class component and create functions with useCallback hook in the function component to handle the logic.`

    `5. I would remove the render method from the class component and return the JSX from the function component.`Ï

    ***

10. **List a few ways styles can be used with components.**

    `I particularly like the css module approach, specially when using SASS. This way we have scoped styles.`

    `Other ways to style components are:`

    `1. Tailwind with utility classes directly in the elements className (when we have a robust design system well defined in the tailwind config file is my favorite way to style components)`

    `2. Styled components`

    `3. CSS in JS`

    `4. Inline styles using the style prop (for edge cases)`

    ***

11. **How to render an HTML string coming from the server?**

    `We can use the dangerouslySetInnerHTML prop for trusted sources, but I would avoid this approach if possible.`

    ***
