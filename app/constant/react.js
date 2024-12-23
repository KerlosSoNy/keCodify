    export  const reactinterview = 
[
    {
        "question": "What is React.js?",
        "answer": "React.js is an open-source JavaScript library used for building user interfaces, primarily for single-page applications. It allows developers to create reusable UI components and manage the view layer efficiently."
    },
    {
        "question": "What are the major features of React?",
        "answer": "The major features of React are: Uses JSX syntax, a syntax extension of JS that allows developers to write HTML in their JS code. It uses Virtual DOM instead of Real DOM considering that Real DOM manipulations are expensive. Supports server-side rendering which is useful for Search Engine Optimizations(SEO). Follows Unidirectional or one-way data flow or data binding. Uses reusable/composable UI components to develop the view."
    },
    {
        "question": "What are React components?",
        "answer": "React components are independent, reusable pieces of UI that represent parts of a user interface. They can be defined as functions (functional components) or classes (class components) and can manage their own state."
    },
    {
        "question": "What is JSX in React?",
        "answer": "JSX stands for JavaScript XML. It is a syntax extension for JavaScript that allows you to write HTML-like code inside JavaScript. JSX makes it easier to describe the UI and integrates seamlessly with React components."
    },
    {
        "question": "What is React Fiber?",
        "answer": "Fiber is the new reconciliation engine or reimplementation of core algorithm in React v16. The goal of React Fiber is to increase its suitability for areas like animation, layout, gestures, ability to pause, abort, or reuse work and assign priority to different types of updates; and new concurrency primitives."
    },
    {
        "question": "What is the main goal of React Fiber?",
        "answer": "The goal of React Fiber is to increase its suitability for areas like animation, layout, and gestures. Its headline feature is incremental rendering: the ability to split rendering work into chunks and spread it out over multiple frames."
    },
    {
        "question": "What is the difference between Element and Component?",
        "answer": "An Element is a plain object describing what you want to appear on the screen in terms of the DOM nodes or other components. Elements can contain other Elements in their props. Creating a React element is cheap. Once an element is created, it cannot be mutated."
    },
    {
        "question": "What is the Virtual DOM in React?",
        "answer": "The Virtual DOM is a lightweight JavaScript representation of the real DOM. React uses it to efficiently update and render components by comparing the Virtual DOM with the real DOM and applying changes only to the necessary elements."
    },
    {
        "question": "What is ReactDOM in React?",
        "answer": "ReactDOM is a package that provides DOM-specific methods to interact with the DOM. It includes methods like `ReactDOM.render()`, which is used to render React components to the DOM, and `ReactDOM.hydrate()`, which is used for server-side rendering (SSR). ReactDOM acts as a bridge between React's virtual DOM and the browser's actual DOM."
    },
    {
        "question": "What is ReactDOMServer?",
        "answer": "The ReactDOMServer object enables you to render components to static markup, which is typically used in server-side rendering (SSR) on a Node server. It is useful for generating HTML strings that can be sent to the client for faster initial loading and SEO optimization. ReactDOMServer provides two primary methods: 1) renderToString(): Renders a React element to its initial HTML as a string. 2) renderToStaticMarkup(): Similar to renderToString() but does not include additional React-specific attributes, making it suitable for static sites."
    },      
    {
        "question": "What are props in React?",
        "answer": "Props (short for properties) are read-only inputs passed from a parent component to a child component. They are used to pass data and configuration to child components and cannot be modified within the child component."
    },
    {
        "question": "What is state in React?",
        "answer": "State is an object in React components that holds dynamic data that can change over time. Unlike props, the state is mutable and is managed within the component. Changes to state trigger re-rendering of the component."
    },
    {
        "question": "What is the difference between state and props in React?",
        "answer": "In React, **props** (short for properties) are used to pass data from a parent component to a child component. Props are immutable and cannot be changed by the child component. **State**, on the other hand, is a local data store that can be modified by the component that owns it. State is used to manage dynamic data within a component, and when state changes, the component re-renders."
    },
    {
        "question": "What is the difference between functional and class components in React?",
        "answer": "Functional components are simpler and do not have their own state or lifecycle methods (prior to React Hooks). Class components can manage state and have access to lifecycle methods. With Hooks, functional components can now use state and lifecycle-like features."
    },
    {
        "question": "What are the different types of errors in React?",
        "answer": "React errors can generally be categorized into three types: \n1. **JavaScript Errors**: These are errors that occur during the execution of JavaScript code, such as accessing an undefined variable or function. \n2. **React Errors**: These are errors specific to React, like invalid props or wrong usage of React APIs. \n3. **Rendering Errors**: These occur when React fails to render components properly, often caused by incorrect JSX syntax, invalid return values, or errors in lifecycle methods."
    },
    {
        "question": "What are React Hooks?",
        "answer": "React Hooks are functions that allow functional components to use state and other React features, like lifecycle methods. Common hooks include 'useState', 'useEffect', and 'useContext'."
    },
    {
        "question": "What is the purpose of the 'useState' hook?",
        "answer": "The 'useState' hook is used to add state to functional components. It returns a state variable and a function to update that state. Example: '[count, setCount] = useState(0)'."
    },
    {
        "question": "What is the 'useEffect' hook used for?",
        "answer": "The 'useEffect' hook is used to handle side effects in functional components, such as fetching data, subscribing to events, or manually changing the DOM. It can also clean up resources using the cleanup function."
    },
    {
        "question": "What is the difference between `componentDidMount` and `useEffect`?",
        "answer": "`componentDidMount` is a lifecycle method in class components that runs once when the component is first mounted. In contrast, `useEffect` is used in functional components to perform side effects, and it can run after every render or only once, depending on the dependency array provided. While `componentDidMount` runs once, `useEffect` can be configured for a more flexible behavior."
    },
    {
        "question": "What is the difference between controlled and uncontrolled components in React?",
        "answer": "Controlled components have their state managed by React through props, whereas uncontrolled components rely on the DOM to manage their state and use refs to access their values."
    },
    {
        "question": "What is the context API in React?",
        "answer": "The Context API is a feature in React that allows you to share data (like themes, user authentication) across components without passing props manually at every level. It provides a way to create global variables accessible throughout the component tree."
    },
    {
        "question": "What are higher-order components (HOCs) in React?",
        "answer": "HOCs are functions that take a component as input and return a new component with enhanced functionality. They are used for code reuse, state abstraction, and manipulating props."
    },
    {
        "question": "What is React Router?",
        "answer": "React Router is a library used for routing in React applications. It enables navigation between different views or components without reloading the page. It provides components like '<BrowserRouter>', '<Route>', and '<Link>'."
    },
    {
        "question": "How React Router is different from history library?",
        "answer": "React Router is a wrapper around the history library which handles interaction with the browser's window.history with its browser and hash histories. It also provides memory history which is useful for environments that don't have global history, such as mobile app development (React Native) and unit testing with Node."
    },
    {
        "question": "What are the <Router> components of React Router v4?",
        "answer": "In React Router v4, the primary Router components include: <BrowserRouter>, <HashRouter>, <MemoryRouter>, <Route>, <Link>, and <Redirect>. The <BrowserRouter> is the most commonly used and provides a clean URL path, while the <HashRouter> uses URL hashes to manage routing. <MemoryRouter> is used for in-memory routing, typically in non-browser environments like tests. <Route> is used to define the route paths, and <Link> is used to navigate between routes. <Redirect> is used to navigate programmatically or redirect users based on certain conditions."
    },    
    {
        "question": "Why you get 'Router may have only one child element' warning?",
        "answer": "You have to wrap your Route's in a <Switch> block because <Switch> is unique in that it renders a route exclusively."
    },      
    {
        "question": "What is React Intl?",
        "answer": "React Intl is a library used for internationalization (i18n) in React applications. It provides components and APIs to help with formatting numbers, dates, times, and messages in different languages and locales. React Intl uses the built-in JavaScript Internationalization API to handle the complexities of language and locale-specific formatting. It helps developers to create multilingual applications by enabling dynamic rendering of content based on the user's locale or language preferences.\n\nKey features include:\n\n1) Formatted messages: Enables translation of text in the app.\n2) Date/Time/Number formatting: Allows locale-sensitive formatting of dates, times, and numbers.\n3) Pluralization and gender support: Handles language-specific pluralization and gender-based translations.\n4) Locale management: Helps manage different locales and switch between them dynamically.\n\nReact Intl is commonly used in React applications to make them accessible to a global audience by supporting multiple languages and regional settings."
    },
    {
        "question": "What are the main features of React Intl?",
        "answer": "Below are the main features of React Intl:\n\n1) **Display numbers with separators**: Automatically formats numbers with appropriate separators based on locale.\n2) **Display dates and times correctly**: Formats dates and times according to the locale, ensuring correct display of months, days, and time zones.\n3) **Display dates relative to 'now'**: Formats dates relative to the current time (e.g., '5 minutes ago').\n4) **Pluralize labels in strings**: Handles pluralization rules for different languages, displaying singular or plural forms appropriately.\n5) **Support for 150+ languages**: Offers built-in support for over 150 languages and regions.\n6) **Runs in the browser and Node**: Can be used both in client-side (browser) and server-side (Node.js) applications.\n7) **Built on standards**: Based on the JavaScript Internationalization API (Intl), ensuring compatibility with the standard i18n practices."
    },   
    {
        "question": "What is Shallow Renderer in React testing?",
        "answer": "Shallow rendering is useful for writing unit test cases in React. It lets you render a component one level deep and assert facts about what its render method returns, without worrying about the behavior of child components, which are not instantiated or rendered."
    },    
    {
        "question": "What is the purpose of ReactTestUtils package?",
        "answer": "ReactTestUtils are provided in the with-addons package and allow you to perform actions against a simulated DOM for the purpose of unit testing."
    },
    {
        "question": "What are the advantages of Jest over Jasmine?",
        "answer": "There are several advantages of Jest compared to Jasmine:\n\n1) **Automatically finds tests to execute**: Jest automatically detects and runs tests in your source code without needing manual setup.\n2) **Automatically mocks dependencies**: Jest comes with built-in mocking capabilities, making it easier to mock dependencies when running tests.\n3) **Allows testing asynchronous code synchronously**: Jest has built-in support for testing asynchronous code and allows it to be written and tested synchronously.\n4) **Runs tests with a fake DOM (via jsdom)**: Jest uses jsdom, providing a simulated DOM environment that allows tests to run without a real browser.\n5) **Runs tests in parallel processes**: Jest runs tests in parallel processes, which leads to faster test execution and better performance compared to Jasmine."
    },
    {
        "question": "What is TestRenderer package in React?",
        "answer": "This package provides a renderer that can be used to render components to pure JavaScript objects, without depending on the DOM or a native mobile environment. This package makes it easy to grab a snapshot of the platform view hierarchy (similar to a DOM tree) rendered by a ReactDOM or React Native without using a browser or jsdom."
    },
    {
        "question": "What is the purpose of `React.Fragment`?",
        "answer": "React.Fragment is a wrapper component that allows you to group multiple child elements without adding extra nodes to the DOM. It is commonly used when a component needs to return multiple elements but without introducing additional HTML elements like a `<div>`. This helps keep the DOM structure clean and avoids unnecessary nesting."
    },
    {
        "question": "What is the difference between 'React.Fragment' and a div container?",
        "answer": "'React.Fragment' is a wrapper used to group multiple child elements without adding an extra DOM node, unlike a div container which creates an additional element in the DOM."
    },
    {
        "question": "What is the purpose of keys in React lists?",
        "answer": "Keys are unique identifiers used in React lists to track items efficiently. They help React identify which elements have changed, been added, or removed, improving rendering performance."
    },
    {
        "question": "What is the difference between 'useMemo' and 'useCallback'?",
        "answer": "'useMemo' is used to memoize the result of a computation, while 'useCallback' is used to memoize a callback function to avoid unnecessary re-creations during re-renders."
    },
    {
        "question": "Explain the use of the useState hook in React.",
        "answer": "The `useState` hook in React is used to add state to functional components. It allows you to declare a state variable and a function to update its value. The `useState` hook accepts the initial state value as an argument and returns an array containing the current state and the updater function. Whenever the state changes, React re-renders the component with the updated state. Example: `const [count, setCount] = useState(0);`"
    },
    {
        "question": "What are Portals in React?",
        "answer": "Portals provide a way to render children into a different part of the DOM tree outside of their parent component. They are useful for rendering modals, tooltips, or dropdowns, where the component needs to appear outside the normal DOM hierarchy of its parent component. Portals are created using `ReactDOM.createPortal()`."
    },
    {
        "question": "What is React's default behavior for event handling?",
        "answer": "In React, event handling follows a synthetic event system, which normalizes events across different browsers. React automatically manages event binding, meaning you don't need to manually bind event handlers to `this` as in traditional JavaScript. React events are passed as the first argument to the event handler, and you can prevent default behavior or stop propagation using methods like `event.preventDefault()` and `event.stopPropagation()`."
    },
    {
        "question": "What is the difference between `props.children` and `this.props.children`?",
        "answer": "`props.children` refers to the special `children` prop that is passed to a component and contains any child elements nested inside the component when used in JSX. In functional components, you access it directly as `props.children`, whereas in class components, you access it through `this.props.children` since `props` is part of the class instance."
    },
    {
        "question": "What are React Suspense and React.lazy?",
        "answer": "React **Suspense** is a feature that allows you to handle the loading state of components that are being dynamically imported, typically through **React.lazy**. **React.lazy** enables code-splitting by allowing you to load components only when they are needed, rather than all at once. Suspense provides a way to show a loading state (like a spinner) while the component is being loaded, and once it's ready, it will render the component."
    },
    {
        "question": "What is formik?",
        "answer": "Formik is a small react form library that helps you with the three major problems: Getting values in and out of form state. Validation and error messages. Handling form submission"
    },
    {
        "question": "What is code-splitting?",
        "answer": "Code-Splitting is a feature supported by bundlers like Webpack and Browserify which can create multiple bundles that can be dynamically loaded at runtime. The react project supports code splitting via dynamic import() feature."
    },
    {
        "question": "What is the useEffect hook, and why is it used?",
        "answer": "The `useEffect` hook is used for handling side effects in functional components, such as fetching data, subscribing to events, or manually interacting with the DOM. It runs after the component renders and can be configured to run only once, on every render, or when certain dependencies change. It replaces lifecycle methods like `componentDidMount`, `componentDidUpdate`, and `componentWillUnmount` in class components. Example: `useEffect(() => { fetchData(); }, [dependencies]);`"
    },
    {
        "question": "Explain the useContext hook.",
        "answer": "The `useContext` hook is used to access the value of a context in a functional component. It allows components to consume data from a context without needing to explicitly pass props down through multiple levels of the component tree. `useContext` takes the context object (created by `React.createContext()`) as an argument and returns the current context value. Example: `const theme = useContext(ThemeContext);`"
    },
    {
        "question": "What is the purpose of `useReducer` hook?",
        "answer": "`useReducer` is a React hook used for managing more complex state logic in functional components, especially when state depends on previous values or involves multiple sub-values. It is similar to `useState` but provides a more structured way of updating state using a reducer function, commonly used for complex state transitions or when managing state in forms or large applications."
    },
    {
        "question": "How does React handle forms?",
        "answer": "React handles forms by either using **controlled components** (where form inputs are controlled by React state) or **uncontrolled components** (where the DOM manages form inputs and React accesses them via refs). Controlled components are more common and allow React to manage the input data, update state on change, and validate the form before submission."
    },
    {
        "question": "What is the purpose of `useRef` in React?",
        "answer": "`useRef` is a hook that allows you to persist values across renders without causing re-renders. It can be used to reference DOM elements or to store mutable values that do not need to trigger a re-render when updated. It's commonly used to manage focus, measure element sizes, or hold references to child components."
    },
    {
        "question": "What is server-side rendering (SSR) in React?",
        "answer": "SSR is a technique where React components are rendered on the server and sent to the browser as fully-rendered HTML. It improves performance and SEO. Frameworks like Next.js facilitate SSR in React applications."
    },
    {
        "question": "What is client-side rendering (CSR) in React?",
        "answer": "Client-side rendering (CSR) is the process where the browser loads a minimal HTML page with React, and then React takes over to render the entire page in the client’s browser. CSR often provides a faster, more interactive experience after the initial page load, but can lead to slower initial loading times compared to server-side rendering."
    },
    {
        "question": "What is the difference between 'forEach' and 'map' in React?",
        "answer": "'forEach' iterates over an array and executes a callback function for each element but does not return anything. 'map' also iterates over an array but returns a new array with the results of the callback function."
    },
    {
        "question": "What is React's `strict mode`?",
        "answer": "React's `strict mode` is a development mode feature that helps developers identify potential problems in an application. It intentionally runs additional checks and warnings to help highlight unsafe lifecycle methods, legacy API usage, or side effects that may not be ideal. Strict mode does not affect the production build, only the development experience."
    },
    {
        "question": "How to enable production mode in React?",
        "answer": "You should use Webpack's DefinePlugin method to set NODE_ENV to production, by which it strip out things like propType validation and extra warnings. Apart from this, if you minify the code, for example, Uglify's dead-code elimination to strip out development only code and comments, it will drastically reduce the size of your bundle."
    },
    {
        "question": "What is a switching component?",
        "answer": "A switching component is a component that renders one of many components. We need to use object to map prop values to components."
    },
    {
        "question": "What are React Mixins?",
        "answer": "Mixins are a way to totally separate components to have a common functionality. Mixins should not be used and can be replaced with higher-order components or decorators."
    },
    {
        "question": "What are the Pointer Events supported in React?",
        "answer": "Pointer Events in React are a set of event handlers that allow handling interactions from pointing devices such as a mouse, pen, or touch. These events are supported in React for better cross-device compatibility. The supported Pointer Events include: \n\n1) onPointerDown: Triggered when a pointing device button is pressed.\n2) onPointerMove: Triggered when a pointing device is moved.\n3) onPointerUp: Triggered when a pointing device button is released.\n4) onPointerCancel: Triggered when the pointer event is canceled.\n5) onPointerEnter: Triggered when a pointing device enters the boundary of an element.\n6) onPointerLeave: Triggered when a pointing device leaves the boundary of an element.\n7) onPointerOver: Triggered when a pointing device is over an element.\n8) onPointerOut: Triggered when a pointing device is moved out of an element.\n9) onGotPointerCapture: Triggered when an element gains pointer capture.\n10) onLostPointerCapture: Triggered when an element loses pointer capture.\n\nThese events offer precise control over user interactions across different input types."
    }, 
    {
        "question": "What is the proper placement for error boundaries?",
        "answer": "The granularity of error boundaries usage is up to the developer based on project needs. You can follow either of these approaches: You can wrap top-level route components to display a generic error message for the entire application. You can also wrap individual components in an error boundary to protect them from crashing the rest of the application."
    }, 
    {
        "question": "What is the benefit of component stack trace from error boundary?",
        "answer": "Apart from error messages and JavaScript stack, React 16 will display the component stack trace with file names and line numbers using the error boundary concept. This makes it easier to debug and pinpoint the location of errors in the component hierarchy."
    },     
    {
        "question": "Is it possible to use async/await in plain React?",
        "answer": "If you want to use async/await in React, you will need Babel and transform-async-to-generator plugin. React Native ships with Babel and a set of transforms."
    },
    {
        "question": "Do Hooks replace render props and higher order components?",
        "answer": "Both render props and higher-order components render only a single child but in most of the cases Hooks are a simpler way to serve this by reducing nesting in your tree."
    },
    {
        "question": "How to pass data from Parent to Child component and vice-versa?",
        "answer": "To pass data from a Parent to a Child component, use props. The parent passes data as attributes to the child component, which can be accessed in the child using 'props'. Example: '<ChildComponent data={value} />'. To pass data from a Child to a Parent component, use a callback function. The parent passes a function as a prop to the child. The child calls this function, often passing data as an argument. Example: 'props.onDataChange(data)'."
    },
    {
        "question": "What are synthetic events in React?",
        "answer": "Synthetic events in React are a cross-browser wrapper around the browser's native events. React implements its own event system that normalizes the events so that they behave consistently across different browsers. Synthetic events provide a consistent interface for events like `onClick`, `onChange`, etc., and also include additional features like event pooling, which helps in optimizing memory usage."
    },
    {
        "question": "Why we need to be careful when spreading props on DOM elements?",
        "answer": "When we spread props we run into the risk of adding unknown HTML attributes, which is a bad practice. Instead we can use prop destructuring with ...rest operator, so it will add only required props."
    },
    {
        "question": "What are stateless components?",
        "answer": "Stateless components, also known as functional components, are components in React that do not manage or hold their own state. They are simply functions that accept props as an argument and return React elements. Since they don't have lifecycle methods or internal state, they are simpler and often more efficient than stateful components."
    },  
    {
        "question": "What are stateful components?",
        "answer": "Stateful components are React components that manage and maintain their own internal state. They can use lifecycle methods to respond to changes in state or props. Typically, stateful components are class components or functional components with hooks like useState or useReducer to handle dynamic data and interactivity."
    },          
    {
        "question": "What is the difference between a stateless component and a stateful component?",
        "answer": "A **stateless component** is a component that does not manage or hold any local state. It only receives props from its parent component and renders UI based on those props. A **stateful component**, on the other hand, manages its own state and can modify it over time using state-changing methods like `setState` (in class components) or `useState` (in functional components). Stateful components are more interactive because they can update themselves in response to user actions or other events."
    },
    {
        "question": "Describe the lifecycle methods in a React class component.",
        "answer": "Lifecycle methods in a React class component allow you to hook into specific moments in a component's lifecycle: mounting, updating, and unmounting. \n1. **Mounting**: When a component is created and inserted into the DOM, the methods are: \n   - `constructor()`: Initializes state and binds methods.\n   - `static getDerivedStateFromProps()`: Updates state based on props (rarely used).\n   - `render()`: Returns the JSX to render the component.\n   - `componentDidMount()`: Executes after the component is mounted, ideal for side effects like API calls.\n2. **Updating**: Called when props or state changes. Methods include:\n   - `static getDerivedStateFromProps()`: Updates state based on new props.\n   - `shouldComponentUpdate()`: Determines if the component should re-render.\n   - `render()`: Re-renders the component.\n   - `componentDidUpdate()`: Executes after re-rendering, used for side effects like updating DOM or fetching data.\n3. **Unmounting**: Called when the component is removed from the DOM. Method:\n   - `componentWillUnmount()`: Used for cleanup, such as clearing timers or unsubscribing from events."
    },
    {
        "question": "What is the significance of the `dangerouslySetInnerHTML` attribute in React?",
        "answer": "`dangerouslySetInnerHTML` is a React attribute that allows you to directly inject HTML content into a component. It is considered 'dangerous' because it bypasses React’s built-in DOM sanitation and can expose the application to XSS (Cross-Site Scripting) attacks if the content is not properly sanitized. It should be used cautiously and only with trusted content."
    },
    {
        "question": "What is `shouldComponentUpdate` and when should you use it?",
        "answer": "`shouldComponentUpdate` is a lifecycle method in class components that allows you to control whether a component should re-render when it receives new props or state. By default, React re-renders components on every state or props change. However, `shouldComponentUpdate` can be used to optimize performance by preventing unnecessary re-renders. It is commonly used in components with complex UIs where re-renders can be costly."
    },
    {
        "question": "How can we achieve lifecycle methods in a functional component?",
        "answer": "In functional components, lifecycle methods are achieved using React Hooks, especially 'useEffect'. The 'useEffect' hook can handle mounting, updating, and unmounting phases of a component's lifecycle. \n1. **Mounting**: Use 'useEffect' without a dependency array to execute code once when the component is first rendered. \n2. **Updating**: Use 'useEffect' with a dependency array to execute code whenever the specified dependencies change. \n3. **Unmounting**: Use the cleanup function returned by 'useEffect' to execute code when the component is removed from the DOM. This handles tasks like clearing timers or unsubscribing from events."
    },
    {
        "question": "What are error boundaries in React?",
        "answer": "Error boundaries in React are special components that catch JavaScript errors anywhere in their child component tree and log those errors. They also allow you to display a fallback UI when an error occurs, preventing the entire application from crashing. Error boundaries are typically used to handle errors in production environments and provide users with a smooth experience even when things go wrong."
    },
    {
        "question": "What are PropTypes in React?",
        "answer": "PropTypes is a built-in type-checking feature in React that helps developers enforce the types of props passed to components. PropTypes allows you to specify the expected type, shape, and requirements for props (such as whether a prop is required, or what type it should be). It helps catch bugs early by warning developers when a prop does not match the expected type."
    },
    {
        "question": "What are Pure Components?",
        "answer": "Pure Components in React are components that only re-render when their props or state change. They implement a shallow comparison of props and state in their `shouldComponentUpdate` method, which allows React to optimize performance by preventing unnecessary re-renders. In class components, `React.PureComponent` is used to create a pure component, while in functional components, pure behavior can be achieved by using `React.memo`. A Pure Component is ideal for static or immutable data."
    },
    {
        "question": "What is `React.memo` in React?",
        "answer": "`React.memo` is a higher-order component that allows functional components to skip re-rendering when the props have not changed. It’s used to optimize performance in functional components by preventing unnecessary re-renders. React.memo performs a shallow comparison of props by default, but you can pass a custom comparison function to optimize it further."
    },
    {
        "question": "What is the significance of React's reconciliation algorithm?",
        "answer": "React's reconciliation algorithm is responsible for efficiently updating the DOM when changes occur in the component's state or props. When a component re-renders, React compares the new Virtual DOM with the previous one, identifying the differences. It then calculates the minimum number of changes needed and applies them to the actual DOM, improving performance and minimizing unnecessary re-renders."
    },
    {
        "question": "How do you manage state across components in React?",
        "answer": "State management across components in React can be achieved by: \n1. **Lifting State Up**: Moving state to a common ancestor and passing it down as props. \n2. **React Context API**: Using context to share state globally without passing props manually. \n3. **State Management Libraries**: Using external libraries like Redux, MobX, or Recoil for more complex state management scenarios."
    },
    {
        "question": "What are the advantages of React?",
        "answer": "Some of the key advantages of React are: \n1. **Declarative UI**: React allows developers to describe how the UI should look based on the state, making it easier to understand and maintain. \n2. **Component-Based Architecture**: React's modular, reusable components promote better organization and reusability of code. \n3. **Virtual DOM**: React's Virtual DOM ensures faster UI updates by reducing direct manipulations of the actual DOM. \n4. **Unidirectional Data Flow**: React's one-way data binding ensures better control over data flow and simplifies debugging. \n5. **Large Ecosystem**: React has a vast ecosystem with tools, libraries, and community support for building scalable applications."
    },
    {
        "question": "What are the different ways to pass data from child component to parent component in React?",
        "answer": "There are several ways to pass data from a child component to a parent component in React:\n\n1. **Callback Functions**: The parent passes a callback function to the child as a prop. The child then calls this function with data as an argument, allowing the parent to access the data.\n2. **Refs**: A parent component can use `useRef` or `createRef` to pass a reference to the child component. The child can then modify the ref and the parent can access it.\n3. **Context API**: The Context API can be used for sharing state between parent and child components without having to pass props manually through intermediate components.\n\nThe most common and straightforward way is using **callback functions**, where the parent controls the flow of data."
    },
    {
        "question": "What is Lazy loading in React?",
        "answer": "Lazy loading in React is a technique that allows you to load components or modules only when they are required, instead of loading them at the start. It helps improve performance by reducing the initial loading time of an application. React provides `React.lazy()` for dynamic imports, combined with the `Suspense` component to handle loading states while the component is being loaded. This is useful for large applications where only certain parts of the UI need to be loaded at a time."
    },
    {
        "question": "What are Refs in React?",
        "answer": "Refs (short for references) in React are used to directly access a DOM element or a class instance in a component. React provides the `useRef` hook (for functional components) and `createRef` (for class components) to create references. Refs can be used for tasks like focusing input elements, measuring the size of a DOM node, or triggering imperative animations. They do not trigger re-renders, making them useful for non-visual updates."
    },
    {
        "question": "What is meant by forward ref in React?",
        "answer": "In React, `forwardRef` is a higher-order component that allows a component to forward its ref to a child component. This is useful when you want to pass a ref from a parent to a child component, especially when the child component is a function component. Normally, function components do not accept `ref` props, but `forwardRef` allows you to wrap the component and forward the ref to a DOM element or another component."
    },
    {
        "question": "What are the differences between `package.json` and `package-lock.json`?",
        "answer": "`package.json` and `package-lock.json` are both important files in a Node.js project, but they serve different purposes:\n\n1. **package.json**: This file defines the dependencies, scripts, and metadata of a project. It lists the project’s required dependencies (with version ranges), devDependencies, and scripts for running build processes, testing, and more. It is meant to be manually edited and shared among collaborators.\n2. **package-lock.json**: This file is automatically generated when `npm install` is run. It locks the exact versions of dependencies that were installed, ensuring that all developers and environments use the same versions of the dependencies. It ensures deterministic builds by specifying the precise dependency tree, including sub-dependencies.\n\nIn summary, `package.json` specifies the project’s dependencies, while `package-lock.json` locks down the exact versions to ensure consistency across installations."
    },
    {
        "question": "Can I use keys for non-list items?",
        "answer": "No, React requires `keys` to be used only in lists (arrays of elements) where items can change order or be added/removed. Keys help React identify which items have changed, been added, or removed, optimizing the rendering process. While it is technically possible to use keys for non-list items (like individual components), it's unnecessary and doesn't provide any performance benefits, as React's reconciliation algorithm only uses keys to track list items for optimal updates."
    },      
    {
        "question": "What will happen by defining nested function components?",
        "answer": "Defining nested function components in React is perfectly valid and often used for organizing and structuring code. A nested function component is simply a function component that is defined inside another component. When you define nested components, the parent component can render the nested child component, passing props if needed.\n\nThe behavior will be the same as when defining separate components: React will render the child component and manage its lifecycle as usual. However, there are some considerations:\n\n1. **Performance**: Each time the parent component re-renders, the nested child components will also be redefined and potentially cause unnecessary re-renders if they aren't memoized properly.\n2. **Code readability**: While nesting can improve the structure of your code, excessive nesting may affect readability and make it harder to maintain.\n\nIn general, nested function components are commonly used for modularizing UI elements and improving code maintainability, but you should ensure proper optimization (e.g., using `React.memo`) to avoid unnecessary renders."
    },      
    {
        "question": "How to send data from a child component to a parent using useRef?",
        "answer": "In React, `useRef` can be used to create a reference to a DOM element or a function within a child component, which can then be accessed by the parent component. To send data from a child to a parent using `useRef`, the parent can pass a `ref` to the child component, and the child can modify or set values directly on the `ref` object. Here's how it works:\n\n1. The parent defines a `useRef` in its state.\n2. The parent passes this `ref` as a prop to the child component.\n3. In the child, you can assign data or functions to the `ref` to make them accessible to the parent.\n\nThis is particularly useful when you want to expose methods or data from the child to the parent without directly passing the data via props."
    },
    {
        "question": "How do you use immer library for state updates?",
        "answer": "The `immer` library simplifies working with immutable state updates in JavaScript. It allows you to write code that 'mutates' state directly while actually producing a new state object under the hood. To use `immer`, you simply pass your current state to the `produce` function provided by the library.\n\nExample usage:\n1. Import `produce` from `immer`.\n2. Pass the current state and a function that modifies the state to `produce`.\n3. `immer` ensures that the state is updated immutably, returning a new state object.\n\nThis is especially useful for working with nested data structures, as `immer` allows you to avoid manually copying and spreading each level of the object."
    },
    {
        "question": "How do you update objects inside state?",
        "answer": "To update objects inside state in React, you should avoid directly mutating the state object. Instead, you can use methods like the **spread operator** (`...`) to create a new object with the updated values.\n\nExample:\n\n1. Access the state using the `useState` hook.\n2. Use the spread operator to copy the existing state into a new object.\n3. Update the specific property of the object in the new object.\n4. Set the new object as the updated state using the state setter function.\n\nExample code:\n\n```javascript\nconst [state, setState] = useState({ name: 'John', age: 30 });\nsetState(prevState => ({ ...prevState, age: 31 }));\n```\nThis ensures that React detects the state change and triggers a re-render."
    },
    {
        "question": "How do you update nested objects inside state?",
        "answer": "Updating nested objects in state requires you to update the nested properties without directly mutating the original state. You can use the **spread operator** and nested updates to ensure immutability.\n\nExample:\n\n1. Access the state using the `useState` hook.\n2. Use the spread operator to copy the outer object.\n3. For nested objects, use the spread operator again to copy the nested object and update the desired properties.\n4. Set the updated state using the state setter function.\n\nExample code:\n\n```javascript\nconst [state, setState] = useState({ user: { name: 'John', age: 30 }, city: 'New York' });\nsetState(prevState => ({\n  ...prevState,\n  user: { ...prevState.user, age: 31 }\n}));\n```\nThis pattern ensures that React can detect the changes and re-render accordingly."
    },
    {
        "question": "How to perform automatic redirect after login?",
        "answer": "To perform an automatic redirect after login in React, you can use React Router's useHistory or useNavigate (in React Router v6) hook. After the user successfully logs in, you can use the history.push() or navigate() method to redirect the user to another page. Here's how to do it:\n\n1) In React Router v5 (useHistory):\n\n- Import the `useHistory` hook.\n- After successful login, use `history.push('/destination')` to redirect the user.\n\nExample:\n\n```\nimport { useHistory } from 'react-router-dom';\n\nconst Login = () => {\n  const history = useHistory();\n\n  const handleLogin = () => {\n    // Perform login logic\n    history.push('/dashboard'); // Redirect after login\n  };\n\n  return <button onClick={handleLogin}>Login</button>;\n};\n```\n\n2) In React Router v6 (useNavigate):\n\n- Import the `useNavigate` hook.\n- After successful login, use `navigate('/destination')`.\n\nExample:\n\n```\nimport { useNavigate } from 'react-router-dom';\n\nconst Login = () => {\n  const navigate = useNavigate();\n\n  const handleLogin = () => {\n    // Perform login logic\n    navigate('/dashboard'); // Redirect after login\n  };\n\n  return <button onClick={handleLogin}>Login</button>;\n};\n```\n\nThis will automatically redirect the user after they log in successfully."
    },      
    {
        "question": "How to apply validation on props in React?",
        "answer": "Validation on props in React is done using the PropTypes library. PropTypes allows you to define the expected data types and requirements for each prop passed to a component. If a prop does not match the expected type or is missing (when required), React will log a warning in the console during development. To use PropTypes, import the library, and define the propTypes object in your component, specifying the type and whether the prop is required."
    }, 
    {
        "question": "How do you update arrays inside state?",
        "answer": "To update arrays inside state, you should not directly mutate the array. Instead, use methods that return new arrays, like **map**, **filter**, **concat**, or the **spread operator**.\n\nExample:\n\n1. Access the state using the `useState` hook.\n2. Use the spread operator to create a new array and update the elements as needed.\n3. Set the new array as the updated state.\n\nExample code:\n\n```javascript\nconst [items, setItems] = useState([1, 2, 3]);\nsetItems(prevItems => [...prevItems, 4]);\n```\nFor more complex updates, you can use **map** to update individual elements, or **filter** to remove items. It's important to always return a new array to maintain immutability and allow React to track the changes."
    },
    {
        "question": "What are the benefits of preventing the direct state mutations?",
        "answer": "Preventing direct state mutations in React offers several benefits:\n\n1. **Predictable State**: By avoiding direct mutations, the state becomes more predictable, as changes to the state are explicitly managed, making debugging easier.\n2. **Efficient Re-rendering**: React relies on detecting state changes by comparing previous and current states. Direct mutation can bypass this, leading to potential bugs or unnecessary re-renders.\n3. **Immutability Benefits**: Immutable state changes allow you to track previous states, enabling features like undo/redo or time-travel debugging.\n4. **Component Reusability**: By maintaining an immutable state, components are less dependent on side effects and can be reused in different parts of the application without introducing unexpected behavior."
    },
    {
        "question": "What are the preferred and non-preferred array operations for updating the state?",
        "answer": "In React, when updating the state that involves arrays, it's important to use operations that do not mutate the original state. Here are some preferred and non-preferred operations:\n\n**Preferred Operations (Immutable Operations):**\n1. **map()**: Used to transform items in an array, returning a new array.\n2. **filter()**: Used to remove items from an array, returning a new array with only the items that match the condition.\n3. **concat()**: Used to add items to an array without modifying the original array.\n4. **spread operator (`...`)**: Used to copy elements of an array into a new array (e.g., `[...stateArray, newItem]`).\n\n**Non-preferred Operations (Mutative Operations):**\n1. **push()**: Modifies the original array by adding an item.\n2. **pop()**: Removes the last item from the array, modifying the array in place.\n3. **shift()**: Removes the first item from the array, mutating the array.\n4. **splice()**: Modifies the array by adding or removing items at specific indexes.\n\nFor optimal React state management, always use immutable operations like `map`, `filter`, `concat`, and the spread operator to ensure proper state updates and efficient re-rendering."
    },
    {
        "question": "How to send data from child to parent using callback functions?",
        "answer": "To send data from a child component to a parent component using callback functions in React:\n\n1. **Define a callback function in the parent component**: The parent component will define a function that will handle the data sent from the child.\n2. **Pass the callback function as a prop to the child**: The parent passes this function to the child component as a prop.\n3. **Invoke the callback function in the child**: Inside the child component, when a certain event occurs (like a button click or input change), the child calls the callback function passed from the parent and passes the data as arguments.\n\nThis approach allows the parent to receive data from the child and perform actions based on that data. The child is responsible for invoking the callback, while the parent manages the state or logic.\n\nExample: \n- Parent Component: Defines a function and passes it as a prop to the child.\n- Child Component: Calls the function with the required data when necessary."
    },            
    {
        "question": "What are fragments in React, and why would you use them?",
        "answer": "Fragments in React are a lightweight way to return multiple elements from a component without adding extra nodes to the DOM. The `React.Fragment` component allows you to group a list of children without introducing a parent wrapper element. This is useful for reducing unnecessary markup and maintaining a cleaner DOM."
    },
    {
        "question": "Why fragments are better than container divs?",
        "answer": "Fragments are better than container divs because they allow you to group a list of children without adding extra nodes to the DOM. This is beneficial for performance optimization and avoids unnecessary wrapping elements, which can interfere with styling or layout."
    },
    {
        "question": "What are the limitations of React?",
        "answer": "The limitations of React include the following: 1) React has a steep learning curve for beginners, especially with concepts like JSX, virtual DOM, and hooks. 2) It is only a library for UI development, so developers need to rely on additional libraries or frameworks for routing, state management, and other features. 3) React applications may experience performance issues in very large apps if not optimized properly. 4) Frequent updates and changes in the ecosystem can make it challenging to keep up with best practices. 5) Overhead in setup for small-scale projects, as it requires tooling like Webpack or Babel."
    },  
    {
        "question": "What are the advantages of React over Vue.js?",
        "answer": "React has the following advantages over Vue.js: \n\n1. Gives more flexibility in developing large apps.\n2. Easier to test.\n3. Suitable for creating mobile apps.\n4. More information and solutions available due to its larger community and ecosystem."
    },
    {
        "question": "Why React tab is not showing up in DevTools?",
        "answer": "When the page loads, React DevTools sets a global named __REACT_DEVTOOLS_GLOBAL_HOOK__, then React communicates with that hook during initialization. If the website is not using React or if React fails to communicate with DevTools, then it won't show up the tab."
    },
    {
        "question": "What are Styled Components?",
        "answer": "styled-components is a JavaScript library for styling React applications. It removes the mapping between styles and components, and lets you write actual CSS augmented with JavaScript."
    },
    {
        "question": "What is Relay?",
        "answer": "Relay is a JavaScript framework for providing a data layer and client-server communication to web applications using the React view layer."
    },
    {
        "question": "What are the main features of Reselect library?",
        "answer": "Let's see the main features of Reselect library:\n\n1. Selectors can compute derived data, allowing Redux to store the minimal possible state.\n2. Selectors are efficient. A selector is not recomputed unless one of its arguments changes.\n3. Selectors are composable. They can be used as input to other selectors."
    },
    {
        "question": "What is the behavior of uncaught errors in react 16?",
        "answer": "In React 16, errors that were not caught by any error boundary will result in unmounting of the whole React component tree. The reason behind this decision is that it is worse to leave corrupted UI in place than to completely remove it. For example, it is worse for a payments app to display a wrong amount than to render nothing."
    },
    {
        "question": "Does React support all HTML attributes?",
        "answer": "As of React 16, both standard or custom DOM attributes are fully supported. Since React components often take both custom and DOM-related props, React uses the camelCase convention just like the DOM APIs."
    },
    {
        "question": "What is the browser support for react applications?",
        "answer": "React supports all popular browsers, including Internet Explorer 9 and above, although some polyfills are required for older browsers such as IE 9 and IE 10. If you use es5-shim and es5-sham polyfill then it even support old browsers that doesn't support ES5 methods."
    },
];

