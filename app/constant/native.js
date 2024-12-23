export const nativeinterview = 
[
    {
        "question": "What is React Native?",
        "answer": "React Native is an open-source framework developed by Facebook for building mobile applications using JavaScript and React. It allows developers to write mobile apps for iOS and Android platforms using a single codebase, leveraging native components and APIs for a more native-like performance."
    },
    {
        "question": "List some benefits of using React Native for building mobile apps.",
        "answer": "Some benefits of using React Native include faster development with a shared codebase, native performance, access to native features via third-party libraries, large community support, and the ability to use React's component-based architecture, which simplifies UI development and state management."
    },
    {
        "question": "Why do we use curly braces while importing some libraries?",
        "answer": "Curly braces `{}` are used to import specific components, functions, or variables from a module or library in JavaScript (including React Native). When you use curly braces, you're importing named exports from the module, rather than the entire module or default export."
    },
    {
        "question": "What are the advantages of hybrid apps over native apps?",
        "answer": "Hybrid apps offer advantages such as faster development with a single codebase for multiple platforms, lower development costs, and easier maintenance. They are typically easier to update and deploy across multiple platforms, unlike native apps, which require separate codebases for each platform."
    },
    {
        "question": "What are hybrid apps?",
        "answer": "Hybrid apps are mobile applications built using web technologies such as HTML, CSS, and JavaScript, but packaged inside a native container, allowing them to run on multiple platforms (iOS, Android) with a single codebase. They can access native device features using plugins or APIs."
    },
    {
        "question": "What are native apps?",
        "answer": "Native apps are applications built specifically for a single platform (iOS or Android) using platform-specific programming languages like Swift/Objective-C for iOS or Java/Kotlin for Android. They offer better performance and access to device features but require separate development for each platform."
    },
    {
        "question": "What are the types of data that control a component?",
        "answer": "The types of data that control a component in React (and React Native) are props and state. `Props` are used to pass data from parent components to child components, while `state` holds data that can change over time and controls the behavior and rendering of the component."
    },
    {
        "question": "What determines the size of a component and what are the ways?",
        "answer": "The size of a component in React (and React Native) is determined by its content, the styling applied (e.g., width, height, padding, margin), and the parent container’s layout properties. Layout properties like flexbox, fixed sizes, or dynamic content can all influence the size of the component. You can use flexbox properties, `width`, `height`, and `flex` to control the component's size."
    },
    {
        "question": "What are some ways of styling a React Native component?",
        "answer": "Some ways of styling a React Native component include using `StyleSheet.create()` to define styles, inline styles with the `style` prop, or using third-party libraries like `styled-components` or `react-native-paper` for more advanced styling solutions."
    },
    {
        "question": "What does the gesture responder system do?",
        "answer": "The gesture responder system in React Native is responsible for handling touch events, allowing components to respond to gestures like taps, drags, and swipes. It ensures that only one component responds to an interaction at a time and provides the necessary callbacks to track and control gesture events."
    },
    {
        "question": "What are Refs used for in React Native?",
        "answer": "Refs in React Native are used to reference and interact with DOM or native components directly. They allow you to get a reference to a specific component, such as a text input or button, and perform actions like focusing, measuring, or animating the component without re-rendering it."
    },
    {
        "question": "How do you dismiss the keyboard in React Native?",
        "answer": "To dismiss the keyboard in React Native, you can use `Keyboard.dismiss()`. This method will hide the keyboard when called, typically after a user submits a form or taps outside of an input field."
    },
    {
        "question": "What are the advantages of native apps over hybrid apps?",
        "answer": "Native apps offer several advantages over hybrid apps, including better performance, smoother user experience, and deeper integration with platform-specific APIs and device features. Native apps are typically faster because they are optimized for the target platform and do not rely on web technologies. They also have better access to native UI components and can provide more advanced, platform-specific functionality."
    },
    {
        "question": "When would you use ScrollView over FlatList or vice-versa?",
        "answer": "Use `ScrollView` when you need to display a small number of items that do not require optimization for memory usage, such as when the list's content is known to be small and static. Use `FlatList` when rendering a large or dynamic list of items, as it is optimized for performance by only rendering the items that are currently visible on the screen."
    },
    {
        "question": "Tell us some options of storing persisting data in a React Native app?",
        "answer": "In React Native, you can use options like `AsyncStorage`, `SQLite`, `Realm`, `WatermelonDB`, and `React Native MMKV` for persisting data. `AsyncStorage` is commonly used for storing simple key-value pairs, while databases like `SQLite` and `Realm` are used for more complex data storage needs."
    },
    {
        "question": "What is JSX?",
        "answer": "JSX (JavaScript XML) is a syntax extension for JavaScript used in React and React Native. It allows you to write HTML-like code inside JavaScript, which is then compiled into regular JavaScript function calls that render the user interface. JSX makes it easier to visualize and structure the components in a declarative manner."
    },
    {
        "question": "How is React Native different from ReactJS?",
        "answer": "React Native is a framework for building mobile applications for iOS and Android, while ReactJS is a library used for building web applications. React Native uses native components (e.g., `View`, `Text`, `Image`), while ReactJS uses HTML elements (e.g., `div`, `span`, `img`) for rendering the UI. React Native compiles down to native code, while ReactJS runs in a web browser."
    },
    {
        "question": "What are props in React Native?",
        "answer": "Props (short for properties) in React Native are read-only inputs passed to components from their parent. They allow components to receive dynamic data and configuration from the parent and use that data to render content or influence behavior. Props are immutable, meaning they cannot be changed by the child component."
    },
    {
        "question": "What is the use of FlatList?",
        "answer": "`FlatList` is a component in React Native used for rendering large lists of data in an optimized way. It only renders items that are currently visible on the screen, improving performance when displaying long or dynamic lists. `FlatList` supports features like item separators, pull-to-refresh, and infinite scrolling."
    },
    {
        "question": "How are Hot Reloading and Live Reloading in React Native different?",
        "answer": "Hot Reloading in React Native allows you to instantly see the changes you make to the code without losing the state of your app. Live Reloading, on the other hand, reloads the entire app every time you make changes to the code, causing the app to lose its current state. Hot Reloading is generally faster and more efficient than Live Reloading."
    },
    {
        "question": "Explain the use of Flexbox in React Native?",
        "answer": "Flexbox is a layout model used in React Native to create flexible and responsive layouts. It helps arrange components in a row or column direction and allows for easy alignment, distribution of space, and responsiveness. Flexbox simplifies complex layout tasks by offering properties like `justifyContent`, `alignItems`, and `flexDirection`."
    },
    {
        "question": "How are props and state different?",
        "answer": "Props (short for properties) are immutable inputs passed to a component from its parent, while state is mutable data managed within the component itself. Props are used to pass data down the component tree, whereas state holds data that may change over time and is used to trigger re-renders of the component."
    },
    {
        "question": "What does TouchableHighlight do and when do you use it?",
        "answer": "`TouchableHighlight` is a component in React Native that responds to touch events and provides feedback by highlighting the component when pressed. It is used to create interactive elements like buttons or clickable areas, especially when you want to change the appearance (e.g., change opacity or background color) when the user touches the component."
    },
    {
        "question": "What is State in React Native?",
        "answer": "State in React Native is a mutable object that holds data or information that may change over time. It is used to store values that affect how a component behaves and renders. State can be updated using `setState()` and triggers a re-render of the component whenever it changes."
    },
    {
        "question": "What are Touchable Interactions in React Native?",
        "answer": "Touchable Interactions in React Native refer to components that can respond to user touch events, such as taps, presses, or swipes. Components like `TouchableOpacity`, `TouchableHighlight`, `TouchableWithoutFeedback`, and `TouchableNativeFeedback` allow developers to handle interactions with UI elements, providing feedback or triggering actions when the user touches the component."
    },
    {
        "question": "What is 'Fast Refresh'?",
        "answer": "'Fast Refresh' is a feature in React Native that allows developers to see changes in the app instantly while preserving the component's state. It enables quick iterations during development by reloading only the modified components, resulting in a smoother and faster development experience compared to traditional reloading."
    },
    {
        "question": "What is flex dimension and how is it different from fixed dimension?",
        "answer": "A flex dimension in React Native refers to a layout property where the size of an element is determined by the available space and its relationship with other elements, using Flexbox. Fixed dimensions, on the other hand, have a set value (like pixels or a fixed percentage) for width and height, which does not change based on the container's size or other elements."
    },
    {
        "question": "How do you style a component in React Native?",
        "answer": "In React Native, you style components using the `StyleSheet.create()` method to define styles in a JavaScript object. You can then apply these styles to components using the `style` prop. Inline styles are also possible, but using `StyleSheet.create()` is more efficient and helps improve performance."
    },
    {
        "question": "How do you perform logging in React Native?",
        "answer": "In React Native, logging can be performed using the `console.log()` function, just like in JavaScript. This is typically used to print debug information, variables, or messages to the console during development. You can also use third-party libraries like `react-native-debugger` for more advanced logging and debugging features."
    },
    {
        "question": "What are some features of Fast Refresh?",
        "answer": "Some features of Fast Refresh include preserving the component state, allowing for real-time feedback during code changes, automatic component reloading on code modifications, and supporting both function and class components. It improves the developer experience by minimizing reload time and reducing UI glitches."
    },
    {
        "question": "What is AppRegistry? Why is it required early in the 'require' sequence?",
        "answer": "AppRegistry in React Native is the entry point for running an app. It registers the root component of the application and is required early in the 'require' sequence because it ensures that the app starts correctly by linking the JavaScript code to the native environment. It is essential for the app's lifecycle to function properly on both iOS and Android platforms."
    },
    {
        "question": "What does StyleSheet.create do and why is it useful?",
        "answer": "`StyleSheet.create` in React Native is used to define a set of styles in a structured way. It returns an object that contains the styles, which can then be applied to components. It is useful because it optimizes the performance of the app by ensuring that styles are processed once and not recreated on each render, leading to faster rendering and better memory usage."
    },
    {
        "question": "How do you re-render a FlatList?",
        "answer": "To re-render a `FlatList`, you can modify the data it is displaying (e.g., by changing the data array or adding/removing items) and pass the updated data to the `FlatList` through the `data` prop. You can also use the `extraData` prop to trigger re-renders when non-data-related changes occur, such as changes in state or props."
    },
    {
        "question": "How is flexbox different in React Native and the browser?",
        "answer": "While Flexbox works similarly in React Native and the browser, the key difference is in how they handle certain layout scenarios. In React Native, Flexbox is used to build responsive mobile UIs and supports properties like `flex`, `justifyContent`, and `alignItems`. However, in the browser, Flexbox is used to manage layouts on web pages and might have some differences in behavior due to CSS quirks, such as browser-specific rendering and styling rules."
    },
    {
        "question": "What happens if you edit modules with exports that are not React components in Fast Refresh?",
        "answer": "In Fast Refresh, if you edit modules that export non-React components, such as plain JavaScript functions or utility modules, the changes will be applied without affecting the rest of the app. Fast Refresh will reload the modified module without disrupting the app's state, ensuring that the new code is used without requiring a full app reload."
    },
    {
        "question": "What is the use of ScrollView component?",
        "answer": "The `ScrollView` component in React Native is used to create scrollable areas within an app. It is useful for displaying content that exceeds the screen size, allowing users to scroll vertically or horizontally. `ScrollView` is typically used when the content is dynamic or has a fixed height but needs to be scrollable."
    },
    {
        "question": "In Fast Refresh, what will happen if you edit files imported by modules outside of the React tree?",
        "answer": "In Fast Refresh, if you edit files that are imported by modules outside of the React tree, such as utility modules or non-UI-related code, only the affected modules will be updated without triggering a full reload of the React components. This helps maintain the current app state while ensuring that non-UI changes are reflected in the app without re-rendering the entire UI."
    },
    {
        "question": "What are some best practices to consider for an action?",
        "answer": "Some best practices for actions include making actions pure functions (not modifying state directly), giving meaningful names to actions, maintaining consistency in action types, and using action creators to avoid hardcoding strings. Additionally, keep actions simple and focused, with one action per function, and handle asynchronous actions using middleware like Redux Thunk or Redux Saga."
    },
    {
        "question": "What is Lifting State Up?",
        "answer": "Lifting State Up is a pattern in React where state is moved from a child component to its parent so that multiple child components can share and update the state. This allows for centralized management of state and ensures that different parts of the application can communicate or react to changes in a unified way."
    },
    {
        "question": "What happens if you edit a module that only exports React components in Fast Refresh?",
        "answer": "If you edit a module that only exports React components in Fast Refresh, the module will be updated, and the changes will be reflected in the app without a full reload. The state of the component will be preserved, and only the modified component will be re-rendered, ensuring a faster development process."
    },
    {
        "question": "What is 'Autolinking' in React Native?",
        "answer": "Autolinking is a feature in React Native that automatically links native dependencies to the project without requiring manual linking. When installing a package with native code, Autolinking detects the necessary configurations and links the corresponding native modules, reducing the need for manual setup steps."
    },
    {
        "question": "What is View and how important is it?",
        "answer": "In React Native, `View` is a core component used to create container elements that can hold other components. It is essential for building the layout structure and can be styled with Flexbox properties. `View` serves as the building block for organizing and positioning other components in the user interface."
    },
    {
        "question": "What are some limitations of using react-native-cli for instantiating a project?",
        "answer": "Some limitations of using `react-native-cli` include the need for manual linking of native modules, less flexibility in managing dependencies, and fewer built-in tools for managing the project. Also, the setup process can be more error-prone compared to using `Expo`, which simplifies some tasks. `react-native-cli` requires more configuration and setup for things like Android and iOS builds."
    },
    {
        "question": "What is AsyncStorage and how do you use it?",
        "answer": "AsyncStorage is a simple, asynchronous, unencrypted, persistent key-value storage system in React Native. It is used for storing small pieces of data such as user preferences or session information. You can use it by importing `@react-native-async-storage/async-storage`, then using methods like `setItem()`, `getItem()`, and `removeItem()` to store and retrieve data."
    },
    {
        "question": "What are the features of Container/Smart components?",
        "answer": "Container or Smart components are responsible for handling the application's logic and managing state. They often pass data and callbacks down to presentational or dumb components. Features include managing data fetching, state changes, and providing the necessary logic to the UI components, ensuring that UI components remain focused on rendering and don't handle complex logic."
    },
    {
        "question": "Does React Native compile JavaScript into Java for Android?",
        "answer": "No, React Native does not compile JavaScript into Java for Android. Instead, React Native uses a bridge to communicate between JavaScript code and the native Android components written in Java. The JavaScript code is executed by a JavaScript engine (such as JavaScriptCore), and the bridge is used to interact with native code."
    },
    {
        "question": "What are some advantages of Component Driven Development?",
        "answer": "Component Driven Development focuses on building UI components in isolation, which leads to reusable, maintainable, and testable components. It encourages modularity, improves collaboration between teams, enhances code consistency, and simplifies UI testing. It also allows for easier updates and optimizations as individual components can be modified independently of the rest of the application."
    },
    {
        "question": "How would you implement animations on events?",
        "answer": "In React Native, animations can be implemented using the `Animated` API. To implement animations on events, such as button clicks or scroll actions, you can attach event handlers to components (e.g., using `onPress` for a button). Within the event handler, you trigger animation changes using methods like `Animated.timing()` or `Animated.spring()` to animate properties such as position, opacity, or scale."
    },
    {
        "question": "State the lifecycle of Gesture Responder System?",
        "answer": "The Gesture Responder System in React Native follows a lifecycle with the following phases: 1) `onStartShouldSetResponder`: Determines if the component should become the responder. 2) `onMoveShouldSetResponder`: Determines if the component should become the responder when a gesture moves. 3) `onResponderGrant`: Fired when the component is granted responder status. 4) `onResponderMove`: Fired as the gesture moves. 5) `onResponderRelease`: Fired when the gesture is released. 6) `onResponderTerminate`: Fired when another responder takes over."
    },
    {
        "question": "What is Component Driven Development (CDD)?",
        "answer": "Component Driven Development (CDD) is an approach where development is focused on building UI components in isolation before integrating them into the application. It encourages reusability, modularity, and maintainability by designing self-contained, reusable components that can be independently tested and iterated upon, streamlining collaboration and improving development efficiency."
    },
    {
        "question": "What are Container/Smart components?",
        "answer": "Container or Smart components are components responsible for handling the logic and state of the application. They manage data fetching, state updates, and pass down props to presentational components. These components do not contain UI logic but instead manage how the UI behaves based on state changes."
    },
    {
        "question": "What are Presentational/Dumb Components?",
        "answer": "Presentational or Dumb components are primarily responsible for rendering the UI. They receive data and callbacks as props and focus solely on the display aspect of the app. These components are typically stateless and do not contain any business logic or state management."
    },
    {
        "question": "How many threads run in a React Native app?",
        "answer": "A React Native app typically runs in two main threads: the JavaScript thread, where JavaScript code is executed, and the Native thread, which handles interactions with the native components and UI. Additionally, React Native uses a bridge to allow communication between the JavaScript thread and native code, enabling asynchronous interactions."
    },
    {
        "question": "What does React Native Packager do in React Native?",
        "answer": "The React Native Packager is responsible for bundling JavaScript code and assets, transforming and optimizing them into a format that can be run by the mobile device. It serves the JavaScript bundle to the React Native app and handles live reloading, asset loading, and the transformation of files into the appropriate format for execution on mobile devices."
    },
    {
        "question": "Differentiate ScrollView and FlatList?",
        "answer": "The primary difference between `ScrollView` and `FlatList` is that `ScrollView` renders all its child components at once, regardless of their visibility on the screen, which can be inefficient for large lists. In contrast, `FlatList` only renders the items that are currently visible on the screen, improving performance for large datasets by lazily loading items as needed."
    },
    {
        "question": "What are features of Presentational/Dumb Components?",
        "answer": "Presentational/Dumb components focus purely on the UI and rendering. They receive data and functions as props and do not manage state or logic. They are reusable, independent of the app's state, and are easy to test because they don't contain complex business logic. Their only concern is how the data is presented on the screen."
    },
    {
        "question": "Are libraries such as TypeScript that compile to JavaScript compatible with React Native?",
        "answer": "Yes, libraries such as TypeScript are compatible with React Native. TypeScript is a superset of JavaScript that provides static typing. React Native has built-in support for TypeScript, allowing developers to use TypeScript for type safety while still compiling down to JavaScript, which React Native understands and executes."
    },
    {
        "question": "What is Higher Order Component (HOC)?",
        "answer": "A Higher Order Component (HOC) is a function in React that takes a component and returns a new component with additional props or functionality. HOCs are used for reusing component logic, enhancing components with extra behavior, and adding cross-cutting concerns like authentication, styling, or data fetching without modifying the original component."
    },
    {
        "question": "What JavaScript engine does React Native use?",
        "answer": "React Native uses JavaScriptCore (JSC), which is the JavaScript engine developed by Apple and used in iOS. For Android, React Native typically uses JSC as well, though there are alternatives like Hermes, a more optimized JavaScript engine designed by Facebook for improved performance and startup time."
    },
    {
        "question": "What are the disadvantages of StyleSheet.create?",
        "answer": "The disadvantages of `StyleSheet.create` include the fact that it requires the styles to be defined ahead of time and can be less flexible for dynamic styling compared to inline styles. Additionally, it may introduce additional complexity when managing conditional or runtime styles, and its use can lead to unnecessary rerendering in certain edge cases."
    },
    {
        "question": "How is InteractionManager important?",
        "answer": "The `InteractionManager` in React Native is used to delay the execution of non-urgent tasks until after interactions and animations are complete. This helps prevent UI jank and performance issues by ensuring that tasks like data fetching, network requests, or complex operations don't interfere with smooth user interactions."
    },
    {
        "question": "How does the Fabric architecture work?",
        "answer": "The Fabric architecture in React Native introduces a new rendering system for handling the UI layer. It decouples the JavaScript thread from the UI thread and introduces a more efficient, asynchronous approach to rendering components. Fabric improves performance by enabling concurrent rendering, reducing thread-blocking, and providing better support for background tasks and animations."
    },
    {
        "question": "What are some benefits of Container-Presentational pattern?",
        "answer": "The Container-Presentational pattern promotes the separation of concerns, with Container components managing the state and logic, and Presentational components focusing purely on rendering UI. Benefits include improved code reusability, better maintainability, easier testing, and clearer component responsibilities. It also enables easier refactoring and collaboration across teams."
    },
    {
        "question": "What is InteractionManager and how is it used?",
        "answer": "The `InteractionManager` is a utility in React Native used to schedule tasks to run after all interactions and animations are complete. It's useful for deferring non-urgent tasks like network requests or data fetching to avoid blocking the UI and to ensure smooth, responsive user interactions. You can use it by calling `InteractionManager.runAfterInteractions()`."
    },
    {
        "question": "What is Fabric in React Native?",
        "answer": "Fabric is the new architecture introduced in React Native to improve the performance and scalability of the framework. It enables an asynchronous rendering model and more efficient updates between the JavaScript and native layers. Fabric aims to address limitations in the current rendering system by optimizing how components are rendered and updated on the UI."
    },
    {
        "question": "Does React Native have a Virtual DOM?",
        "answer": "No, React Native does not use a Virtual DOM like React for web. Instead of the Virtual DOM, React Native directly interacts with native views through a bridge, using the native rendering APIs for iOS and Android. The components in React Native are mapped to native views instead of being rendered to a Virtual DOM first."
    }
];
