export const reduxinterview = [
    {
        "question": "What is Redux, and how does it relate to React?",
        "answer": "Redux is a state management library often used with React. It provides a predictable state container by centralizing the application state, allowing components to access and update state through actions and reducers."
    },
    {
        "question": "What is Flux?",
        "answer": "Flux is an application design paradigm used as a replacement for the more traditional MVC (Model-View-Controller) pattern. It is not a framework or a library but rather an architecture pattern that complements React. Flux is centered around the concept of Unidirectional Data Flow, where the data flows in one direction, making it easier to manage application state. This pattern is used by Facebook internally when working with React."
    },
    {
        "question": "What is Redux?",
        "answer": "Redux is a predictable state container for JavaScript applications, inspired by the Flux design pattern. It allows for central management of the application's state, making it easier to predict how data changes over time. Redux can be used with React or any other view library. It is lightweight (about 2kB) and has no dependencies, focusing on simplicity and scalability."
    },
    {
        "question": "What are the core principles of Redux?",
        "answer": "The core principles of Redux are: Single Source of Truth, where the entire state of the application is stored in a single, immutable state tree; State is Read-Only, ensuring changes occur only through actions; and Changes are Made with Pure Reducers, which are pure functions determining state updates."
    },
    {
        "question": "What are pure functions and side effects in the context of Redux?",
        "answer": "In Redux, pure functions are functions that always produce the same output for the same input and do not modify external state. Side effects refer to operations like API calls, logging, or updating external systems, which should be handled outside of reducers, typically in middleware like Redux Thunk."
    },
    {
        "question": "What is meant by 'immutable state,' and why is it important in Redux?",
        "answer": "Immutable state means the state cannot be modified directly; instead, new state objects are created for updates. This ensures predictable state management, facilitates debugging, and supports features like time-travel debugging in Redux."
    },
    {
        "question": "Can you describe the concept of 'single source of truth' in Redux?",
        "answer": "In Redux, the 'single source of truth' means that the entire application state is stored in a single, centralized store, making it predictable and ensuring consistency across the app."
    },
    {
        "question": "What are the downsides of Redux compared to Flux?",
        "answer": "Instead of calling them downsides, we can refer to these as compromises when using Redux over Flux:\n\n1. **Avoiding mutations**: Redux is very opinionated about immutability, whereas Flux allows mutations. Redux doesn't like mutations, and it often requires the use of tools like `redux-immutable-state-invariant`, `Immutable.js`, or strict coding guidelines to ensure non-mutating code.\n2. **Choosing packages carefully**: Redux has extension points like middleware and store enhancers, which makes it flexible. However, unlike Flux, which doesn't address certain concerns like undo/redo or form handling, Redux's ecosystem requires developers to carefully select packages for such features.\n3. **Lack of flow integration**: While Flux has good static type checking support, Redux doesn't have robust Flow integration yet, making type safety more challenging."
    },
    {
        "question": "Can I dispatch an action in reducer?",
        "answer": "Dispatching an action within a reducer is considered an anti-pattern. Reducers should be pure functions without side effects. Their only purpose is to process the action payload and return a new state object. Adding listeners or dispatching actions within a reducer can lead to chained actions and unpredictable side effects, making the state management harder to reason about."
    },
    {
        "question": "What are the drawbacks of MVW pattern?",
        "answer": "The drawbacks of the Model-View-Whatever (MVW) pattern include: \n1. DOM manipulation is expensive, leading to slower and less efficient applications. \n2. Circular dependencies can complicate the relationship between models and views. \n3. Frequent data changes, especially in collaborative applications (e.g., Google Docs), can lead to performance issues. \n4. Implementing undo functionality (or 'travel back in time') can be difficult and require a significant amount of extra code."
    },
    {
        "question": "Are there any similarities between Redux and RxJS?",
        "answer": "Redux and RxJS are very different tools with distinct purposes, but they share some vague similarities. \n1. Redux is a state management tool commonly used for managing application state and UI architecture, whereas RxJS is a reactive programming library typically used for handling asynchronous tasks. \n2. Both use the reactive paradigm: Redux reacts to actions and updates the store, while RxJS provides Observables to manage streams of data. \n3. While Redux focuses on application state management, RxJS provides foundational tools (Observables) to work with streams, which can be used in various contexts, including state management."
    },
    {
        "question": "How to reset state in Redux?",
        "answer": "You need to write a root reducer in your application which delegate handling the action to the reducer generated by combineReducers()."
    },
    {
        "question": "Explain the significance of the combineReducers function.",
        "answer": "The combineReducers function is used to organize and manage multiple reducers by combining them into a single root reducer, allowing better modularity and maintainability of the Redux state."
    },
    {
        "question": "Should I keep all component's state in Redux store?",
        "answer": "Keep your data in the Redux store, and the UI related state internally in the component."
    },
    {
        "question": "What is the difference between React context and React Redux?",
        "answer": "React Context is great for passing data to deeply nested components, and it's simple to use directly within your application. It's best for smaller applications or when state doesn't need complex handling. React Redux, on the other hand, provides a powerful set of features for global state management, including middleware, time-travel debugging, and more advanced state transformations. Redux uses React Context internally but offers a much more structured and feature-rich solution."
    },
    {
        "question": "What is a reducer in Redux and what role does it play?",
        "answer": "A reducer in Redux is a pure function responsible for managing specific parts of your application state. It captures state changes and computes the new state based on those changes."
    },
    {
        "question": "Why are Redux state functions called reducers?",
        "answer": "Reducers are called so because they accumulate the state based on previous actions, essentially reducing it to a new state. Each time a reducer is called, it takes the current state and action as parameters and returns the next state, transforming the data. This process is like reducing a collection of actions to a final state."
    },
    {
        "question": "What is the proper way to access Redux store?",
        "answer": "The best way to access the Redux store in a component is by using the `connect()` function, which creates a new component wrapping your existing one. This higher-order component maps state and action creators to the component’s props, allowing the component to automatically re-render when the store updates."
    },
    {
        "question": "What is the difference between component and container in React Redux?",
        "answer": "A component is a presentational part of your application, often a stateless function or class. A container, on the other hand, is a component connected to the Redux store. Containers are responsible for subscribing to state updates and dispatching actions, while delegating the rendering to presentational components."
    },
    {
        "question": "What is the purpose of the constants in Redux?",
        "answer": "Constants in Redux are used to avoid bugs caused by typos in action types. By defining constants for each action type, you can easily find and manage them throughout the project, especially in large applications. Constants improve maintainability and reduce the chances of runtime errors."
    },
    {
        "question": "How to structure Redux top level directories?",
        "answer": "In a typical Redux project, directories are often structured as follows: `Components` for dumb components, `Containers` for smart components connected to Redux, `Actions` for action creators, `Reducers` for reducers, and `Store` for store initialization. This structure is well-suited for small to medium-sized applications."
    },
    {
        "question": "What is redux-saga?",
        "answer": "redux-saga is a library used to handle side effects (like asynchronous operations or impure functions such as API calls) in React/Redux applications. It provides a more manageable and testable way to deal with complex side effects and is installed via npm: `$ npm install --save redux-saga`."
    },
    {
        "question": "How do you handle asynchronous actions in Redux?",
        "answer": "Asynchronous actions in Redux are typically handled using middleware like Redux Thunk or Redux Saga, which allows action creators to dispatch actions asynchronously, such as fetching data from an API, before dispatching final actions to update the state."
    },
    {
        "question": "What is the mental model of redux-saga?",
        "answer": "redux-saga is like a separate thread dedicated to handling side effects in your application. It acts as a Redux middleware that can start, pause, or cancel side effects based on normal Redux actions. It has full access to the Redux application state and can dispatch Redux actions itself."
    },
    {
        "question": "What are the differences between call() and put() in redux-saga?",
        "answer": "Both `call()` and `put()` are effect creators in redux-saga. `call()` is used to describe an effect to invoke a function or promise, while `put()` is used to describe an effect that dispatches an action to the Redux store. They both instruct the middleware on what to do but in different ways."
    },
    {
        "question": "What is Redux Thunk?",
        "answer": "Redux Thunk is a middleware that allows action creators to return a function instead of a plain action object. This function receives the `dispatch()` and `getState()` methods as arguments and can be used to delay the dispatch or dispatch actions conditionally based on the current state."
    },
    {
        "question": "What are the differences between redux-saga and redux-thunk?",
        "answer": "Redux Thunk and Redux Saga both handle side effects, but they do so in different ways. Thunk uses Promises and is simpler to use, while Redux Saga uses Generators, which are more powerful but require learning. Both can coexist, so you can start with Thunks and switch to Sagas if your app's needs grow."
    },
    {
        "question": "What is Redux DevTools?",
        "answer": "Redux DevTools is a powerful tool for live-editing, time travel debugging, and inspecting Redux state changes. It provides features like hot reloading, action replay, and a customizable UI. For easier integration, you can use the Redux DevTools Extension for Chrome or Firefox, which allows you to view and manage Redux state without manual setup."
    },
    {
        "question": "What are the features of Redux DevTools?",
        "answer": "Redux DevTools features include time-travel debugging, state change inspection, action replay, performance monitoring, and integration with browser extensions for enhanced debugging and development workflow."
    },
    {
        "question": "What is Redux Form?",
        "answer": "Redux Form works with React and Redux to enable a form in React to use Redux to store all of its state. Redux Form can be used with raw HTML5 inputs, but it also works very well with common UI frameworks like Material UI, React Widgets, and React Bootstrap."
    },
    {
        "question": "How does Redux differ from local component state in React?",
        "answer": "Redux provides a centralized state management system that enables sharing state across the entire application, while local component state is isolated to specific components. Redux is ideal for managing global state and complex state interactions, whereas local state is suited for component-specific data and transient UI states."
    },
    {
        "question": "What are the main features of Redux Form?",
        "answer": "The main features of Redux Form include tracking field state in Redux, supporting synchronous and asynchronous validation, providing reusable form components, ensuring state immutability, and enabling easy integration with the Redux store for centralized form state management."
    },
    {
        "question": "How Relay is different from Redux?",
        "answer": "Relay is similar to Redux in that they both use a single store. The main difference is that Relay only manages state originated from the server, and all access to the state is done via GraphQL queries (for reading data) and mutations (for changing data). Relay caches the data for you and optimizes data fetching by fetching only changed data and nothing more."
    },
    {
        "question": "What is the difference between React Native and React?",
        "answer": "React is a JavaScript library, supporting both front-end web development and server-side rendering, for building user interfaces and web applications. React Native, on the other hand, is a mobile framework that compiles to native app components, allowing you to build native mobile applications (iOS, Android, and Windows) in JavaScript. React Native allows you to use React to build your components and implements React under the hood."
    },
    {
        "question": "How to test React Native apps?",
        "answer": "React Native apps can be tested in mobile simulators like iOS and Android. Additionally, you can run the app on your mobile device using the Expo app (https://expo.io). To sync, you need to scan the QR code provided by Expo, and both your mobile device and computer should be on the same wireless network."
    },
    {
        "question": "How to do logging in React Native?",
        "answer": "In React Native, you can use console.log, console.warn, and other console methods for logging. For logs specific to iOS or Android, you can run the following commands in the terminal:\n\n$ react-native log-ios\n$ react-native log-android"
    },
    {
        "question": "How to debug your React Native?",
        "answer": "To debug a React Native app, follow these steps:\n\n1. Run your application in the iOS simulator.\n2. Press Command + D to open the developer menu and a webpage should open at http://localhost:8081/debugger-ui.\n3. Enable 'Pause On Caught Exceptions' for a better debugging experience.\n4. Press Command + Option + I to open the Chrome Developer Tools, or open it via View -> Developer -> Developer Tools.\n5. You should now be able to debug as you normally would."
    },
    {
        "question": "What is reselect and how it works?",
        "answer": "Reselect is a selector library for Redux that uses memoization. It was originally designed to compute derived data from a Redux-like application's state but can be used with any architecture. Reselect keeps a copy of the last inputs and outputs and recomputes the result only when an input changes. If the same inputs are provided again, Reselect returns the cached output. Its memoization and cache are fully customizable."
    },
    {
        "question": "What is a 'selector' in Redux and what is its purpose?",
        "answer": "A selector in Redux is a function used to extract and derive specific data from the Redux store, improving code readability and reusability by centralizing state selection logic."
    },    
    {
        "question": "What is Flow?",
        "answer": "Flow is a static type checker designed to find type errors in JavaScript. Flow types allow for fine-grained distinctions and help catch errors, such as those involving null, that other type systems might miss."
    },
    {
        "question": "What is the difference between Flow and PropTypes?",
        "answer": "Flow is a static analysis tool that uses a superset of the language to add type annotations and catch errors at compile time. PropTypes is a runtime type checker specific to React components, checking only the types of props passed to a component. For more flexible type checking across an entire project, Flow or TypeScript is preferred over PropTypes."
    },
    {
        "question": "What is React Dev Tools?",
        "answer": "React Developer Tools let you inspect the component hierarchy, including component props and state. It is available as a browser extension (for Chrome and Firefox) and as a standalone app (compatible with other environments such as Safari, IE, and React Native). The official extensions are available for Chrome, Firefox, and as a standalone app for other environments like Safari and React Native."
    },
    {
        "question": "Why is DevTools not loading in Chrome for local files?",
        "answer": "If you opened a local HTML file in your browser (file://...), you need to go to Chrome Extensions and check 'Allow access to file URLs' to ensure that React DevTools can load properly."
    },
    {
        "question": "Can Redux only be used with React?",
        "answer": "Redux can be used as a data store for any UI layer. The most common usage is with React and React Native, but there are bindings available for Angular, Angular 2, Vue, Mithril, and more. Redux simply provides a subscription mechanism which can be used by any other code."
    },
    {
        "question": "How does Redux handle the flow of data and actions?",
        "answer": "Redux handles data flow in a unidirectional manner: actions are dispatched to describe state changes, reducers process these actions to update the state, and the store notifies subscribed components to re-render with the updated state."
    },    
    {
        "question": "Do you need to have a particular build tool to use Redux?",
        "answer": "Redux is originally written in ES6 and transpiled for production into ES5 with Webpack and Babel. You should be able to use it regardless of your JavaScript build process. Redux also offers a UMD build that can be used directly without any build process at all."
    },
];

