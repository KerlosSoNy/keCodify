export const jsInterview = 
[
    {
        "question": "What is JavaScript?",
        "answer": "JavaScript is a lightweight, interpreted programming language primarily used to make web pages interactive."
    },
    {
        "question": "What are JavaScript data types?",
        "answer": "Primitive types: String, Number, Boolean, Undefined, Null, Symbol, BigInt. Non-primitive types: Object, Array, Function."
    },
    {
        "question": "What is the difference between synchronous and asynchronous programming?",
        "answer": "Synchronous: Code is executed sequentially. Asynchronous: Code execution doesn't block; tasks run in the background, e.g., using callbacks, promises, or async/await."
    },
    {
        "question": "What is the difference between call(), apply(), and bind()?",
        "answer": "call: Invokes a function with a specified this value and arguments passed individually. apply: Similar to call, but arguments are passed as an array. bind: Returns a new function with a specified this value and arguments."
    },
    {
        "question": "What is the difference between deep copy and shallow copy?",
        "answer": "Shallow copy: Copies only the first level of properties. Deep copy: Recursively copies all levels of properties."
    },
    {
        "question": "What are arrow functions?",
        "answer": "Arrow functions provide a concise way to define functions and do not have their own this or arguments binding."
    },
    {
        "question": "What is the difference between null and undefined?",
        "answer": "null is an intentionally empty value, while undefined means a variable has been declared but not assigned a value."
    },
    {
        "question": "What is the difference between map(), filter(), and reduce()?",
        "answer": "map transforms each element in an array, filter returns elements that match a condition, and reduce aggregates array elements into a single value."
    },
    {
        "question": "What is the difference between mutable and immutable data types?",
        "answer": "Mutable data types can be changed after creation (e.g., objects, arrays), while immutable data types cannot be changed (e.g., strings, numbers)."
    },
    {
        "question": "What is prototypal inheritance?",
        "answer": "Prototypal inheritance is a way to share properties and methods between objects via their prototype."
    },
    {
        "question": "What are modules in JavaScript?",
        "answer": "Modules are reusable pieces of JavaScript code that can be exported and imported using keywords like export and import."
    },
    {
        "question": "What is the difference between a shallow copy and a deep copy?",
        "answer": "A shallow copy copies only the first layer of an object, while a deep copy recursively copies all levels."
    },
    {
        "question": "What are JavaScript generators?",
        "answer": "Generators are functions that can pause execution and resume later, producing a series of values on demand using 'yield'."
    },
    {
        "question": "What is the difference between localStorage, sessionStorage, and cookies?",
        "answer": "localStorage stores data with no expiration. sessionStorage stores data for the session only. Cookies store data with expiration and are sent to the server with HTTP requests."
    },
    {
        "question": "What is the difference between function declarations and function expressions?",
        "answer": "Function declarations are hoisted, while function expressions are not. Declarations are named, expressions can be named or anonymous."
    },
    {
        "question": "What is the difference between Object.freeze() and Object.seal()?",
        "answer": "Object.freeze() prevents adding, removing, or modifying properties. Object.seal() prevents adding or removing properties but allows modifying existing properties."
    },
    {
        "question": "What is the difference between implicit and explicit binding in JavaScript?",
        "answer": "Implicit binding occurs when a function is called with an object before it (e.g., obj.method()). Explicit binding uses call(), apply(), or bind() to set 'this' explicitly."
    },
    {
        "question": "What is the Temporal Dead Zone (TDZ) in JavaScript?",
        "answer": "TDZ is the time between the declaration of a variable with let/const and its initialization, during which accessing it throws a ReferenceError."
    },
    {
        "question": "What is the purpose of the Symbol data type?",
        "answer": "Symbols are unique and immutable primitives used as keys for object properties, ensuring property uniqueness."
    },
    {
        "question": "What are WeakMap and WeakSet?",
        "answer": "WeakMap is a Map where keys are weakly referenced objects, and WeakSet is a Set that holds weakly referenced objects, allowing garbage collection."
    },
    {
        "question": "What is throttling in JavaScript?",
        "answer": "Throttling ensures a function is called at most once in a specified period, even if triggered multiple times."
    },
    {
        "question": "What is the difference between an abstract class and an interface in JavaScript?",
        "answer": "JavaScript does not have interfaces or abstract classes natively but can simulate them using ES6 classes or TypeScript."
    },
    {
        "question": "What is the use of the async keyword in JavaScript?",
        "answer": "The 'async' keyword is used to define an asynchronous function that returns a promise and allows the use of 'await' inside it."
    },
    {
        "question": "What are JavaScript design patterns?",
        "answer": "Design patterns are reusable solutions to common problems in software design, such as Singleton, Factory, and Observer patterns."
    },
    {
        "question": "What is optional chaining in JavaScript?",
        "answer": "Optional chaining (?.) allows safe access to nested object properties, returning undefined if a reference is nullish."
    },
    {
        "question": "What is dynamic typing in JavaScript?",
        "answer": "JavaScript is dynamically typed, meaning variables are not bound to a specific data type and can hold different types during execution."
    },
    {
        "question": "What is the difference between Array.splice() and Array.slice()?",
        "answer": "slice() returns a shallow copy of a portion of an array. splice() modifies the original array by adding/removing elements."
    },
    {
        "question": "What are JavaScript's escape sequences?",
        "answer": "Escape sequences are used to represent certain characters within strings that are difficult or impossible to represent directly, such as '\\n' for a newline, '\\t' for a tab, and '\\\"' for a double quote."
    },
    {
        "question": "What is the difference between Array.map() and Array.forEach()?",
        "answer": "map() creates a new array with the results of applying a function to each element, while forEach() executes a function for each element without returning a new array."
    },
    {
        "question": "What is a JavaScript callback?",
        "answer": "A callback is a function passed as an argument to another function, which is then executed after a certain event or task completes."
    },
    {
        "question": "What is the 'use strict' directive in JavaScript?",
        "answer": "'use strict' is a pragma that enables stricter parsing and error handling in JavaScript, avoiding some silent errors and unsafe actions."
    },
    {
        "question": "What is the difference between synchronous and asynchronous execution in JavaScript?",
        "answer": "Synchronous execution occurs sequentially, blocking further code execution until a task completes, while asynchronous execution allows code to run independently, using callbacks, promises, or async/await."
    },
    {
        "question": "What is the 'arguments' object in JavaScript?",
        "answer": "The 'arguments' object is an array-like object that contains all the arguments passed to a function, available within non-arrow functions."
    },
    {
        "question": "What is a polyfill in JavaScript?",
        "answer": "A polyfill is a piece of code that implements functionality that may be missing in some browsers or JavaScript environments, making newer features compatible with older ones."
    },
    {
        "question": "What is the 'prototype' property in JavaScript?",
        "answer": "The 'prototype' property allows you to add methods and properties to a constructor function's instances, enabling inheritance in JavaScript."
    },
    {
        "question": "What is JavaScript's NaN?",
        "answer": "NaN (Not a Number) is a special numeric value that indicates an invalid or unrepresentable mathematical result, such as dividing 0 by 0."
    },
    {
        "question": "What is the 'class' syntax in JavaScript?",
        "answer": "The 'class' syntax is a more modern way to define object constructors and methods in JavaScript, providing a cleaner syntax for creating objects and dealing with inheritance."
    },
    {
        "question": "What is the difference between 'for' loop and 'for...in' loop in JavaScript?",
        "answer": "A 'for' loop iterates over arrays by index, while 'for...in' iterates over the properties of an object."
    },
    {
        "question": "What is a 'weak reference' in JavaScript?",
        "answer": "A weak reference is a reference to an object that does not prevent it from being garbage collected, which is used in data structures like WeakMap and WeakSet."
    },
    {
        "question": "What is a 'thunk' in JavaScript?",
        "answer": "A thunk is a function that wraps an expression to delay its evaluation, often used in asynchronous programming to ensure certain computations occur only when necessary."
    },
    {
        "question": "What are template literals and how are they different from regular strings?",
        "answer": "Template literals use backticks (`) and allow for embedding expressions using ${expression}, enabling multi-line strings and dynamic content within strings."
    },
    {
        "question": "What is a JavaScript event handler?",
        "answer": "An event handler is a function that handles events like clicks, key presses, or mouse movements, allowing interaction with HTML elements."
    },
    {
        "question": "What is the difference between JavaScript and Node.js?",
        "answer": "JavaScript is a programming language, while Node.js is a runtime environment for executing JavaScript code outside the browser."
    },
    {
        "question": "What is the purpose of the ‘new’ keyword in JavaScript?",
        "answer": "The ‘new’ keyword creates a new instance of a constructor function or a class."
    },
    {
        "question": "What is an asynchronous iterator in JavaScript?",
        "answer": "An asynchronous iterator is an object that can be used to loop over values that are returned asynchronously, typically used with async/await."
    },
    {
        "question": "What are JavaScript promises chained?",
        "answer": "Promises can be chained by returning a new promise from the ‘then()’ method, allowing you to execute multiple asynchronous operations in sequence."
    },
    {
        "question": "What are JavaScript Symbols used for?",
        "answer": "Symbols are unique and immutable values that can be used as object property keys to avoid naming collisions."
    },
    {
        "question": "What is the purpose of ‘Object.create()’ in JavaScript?",
        "answer": "‘Object.create()’ creates a new object with the specified prototype object and properties."
    },
    {
        "question": "What are JavaScript events?",
        "answer": "Events are actions that happen in the system, such as user interactions (click, mouseover, etc.) or system-generated events (load, error)."
    },
    {
        "question": "What is JavaScript’s ‘setTimeout()’ function?",
        "answer": "‘setTimeout()’ is a function that allows you to execute a function after a specified delay."
    },
    {
        "question": "What is the purpose of ‘try...catch’ in JavaScript?",
        "answer": "‘try...catch’ is used to handle exceptions in JavaScript, allowing the code to execute even when an error occurs."
    },
    {
        "question": "What is a JavaScript event listener?",
        "answer": "An event listener is a function that waits for a specific event to occur on an HTML element and reacts accordingly."
    },
    {
        "question": "What is a JavaScript generator function?",
        "answer": "A generator function is a special type of function that can pause its execution using the ‘yield’ keyword and resume later."
    },
    {
        "question": "What is the difference between ‘undefined’ and ‘null’ in JavaScript?",
        "answer": "‘undefined’ means a variable has been declared but not assigned a value, while ‘null’ is an intentional absence of a value."
    },
    {
        "question": "What are JavaScript data structures?",
        "answer": "Common data structures in JavaScript include arrays, objects, sets, maps, and weakmaps, each with unique use cases for storing and organizing data."
    },
    {
        "question": "What are the uses of the ‘this’ keyword in JavaScript?",
        "answer": "‘this’ refers to the object to which a function belongs or the context in which the function is called."
    },
    {
        "question": "What is the difference between ‘map()’ and ‘filter()’ methods in JavaScript?",
        "answer": "‘map()’ transforms each element in an array, while ‘filter()’ returns a new array containing only the elements that satisfy a condition."
    },
    {
        "question": "What is the significance of ‘bind()’, ‘call()’, and ‘apply()’ methods in JavaScript?",
        "answer": "These methods allow you to explicitly set the value of ‘this’ and pass arguments to a function."
    },
    {
        "question": "What is the purpose of the ‘Object.freeze()’ method in JavaScript?",
        "answer": "‘Object.freeze()’ prevents the modification of an object by making it immutable."
    },
    {
        "question": "What is the event loop?",
        "answer": "The event loop is a mechanism that continuously checks the message queue to execute tasks asynchronously. It ensures that non-blocking code, such as setTimeout or AJAX calls, is executed when the call stack is clear."
    },
    {
        "question": "What is the difference between 'let', 'const', and 'var'?",
        "answer": "'let' and 'const' are block-scoped, while 'var' is function-scoped. 'let' allows reassignment, 'const' does not allow reassignment, and 'var' can be redeclared and has a hoisting behavior."
    },
    {
        "question": "What is hoisting in JavaScript?",
        "answer": "Hoisting is the JavaScript behavior where variable and function declarations are moved to the top of their containing scope during the compilation phase, but the assignment remains in the original position."
    },
    {
        "question": "What is the difference between 'forEach()' and 'map()'?",
        "answer": "'forEach()' iterates over an array and applies a function to each element but returns 'undefined', while 'map()' creates a new array populated with the results of calling a provided function on each element of the original array."
    },
    {
        "question": "What are higher-order functions in JavaScript?",
        "answer": "Higher-order functions are functions that take other functions as arguments or return a function as a result. Examples include map(), filter(), and reduce()."
    },
    {
        "question": "What are the advantages of using 'arrow functions'?",
        "answer": "Arrow functions are more concise than traditional functions and inherit the 'this' value from their surrounding context (lexical scoping), making them useful in certain situations like event handlers."
    },
    {
        "question": "What is 'this' in JavaScript and how does it work?",
        "answer": "'this' refers to the context in which a function is called, and it can vary depending on how a function is invoked. In global scope, it refers to the global object, but in an object method, it refers to the object itself."
    },
    {
        "question": "What are JavaScript Promises and how do they work?",
        "answer": "A Promise is an object that represents the eventual completion (or failure) of an asynchronous operation. It has three states: pending, resolved (fulfilled), or rejected. Promises provide methods like 'then()', 'catch()', and 'finally()' for handling asynchronous results."
    },
    {
        "question": "What is the purpose of 'bind()' method in JavaScript?",
        "answer": "'bind()' creates a new function that, when called, has its 'this' keyword set to the provided value, and prepends any provided arguments to the function call."
    },
    {
        "question": "What is the 'typeof' operator in JavaScript?",
        "answer": "'typeof' is used to determine the type of a given variable or expression, returning a string that indicates its type, such as 'string', 'number', 'object', etc."
    },
    {
        "question": "What are JavaScript decorators?",
        "answer": "Decorators are special functions that can be used to modify or enhance the behavior of classes and class methods. They are proposed for future versions of JavaScript and are currently available in some transpilers like Babel."
    },
    {
        "question": "What is a closure in JavaScript and give an example?",
        "answer": "A closure is a function that retains access to variables from its lexical scope, even after the outer function has finished execution. For example, a function inside another function that still has access to the outer function’s variables."
    },
    {
        "question": "What are the differences between 'async' and 'await' in JavaScript?",
        "answer": "'async' is used to define a function as asynchronous, returning a promise, and 'await' is used within an 'async' function to pause the function’s execution until the promise resolves."
    },
    {
        "question": "What is 'throttling' and 'debouncing' in JavaScript?",
        "answer": "Throttling limits the rate at which a function is invoked, ensuring it is only called once within a specified time period. Debouncing ensures that a function is only called after a certain period of inactivity."
    },
    {
        "question": "What is the difference between '==', '===' and 'Object.is()'?",
        "answer": "'==' performs type coercion, '===' checks both value and type equality, and 'Object.is()' checks strict equality without type conversion, handling edge cases like NaN and -0."
    },
    {
        "question": "What is the purpose of the 'new' keyword in JavaScript?",
        "answer": "The 'new' keyword is used to create a new instance of a user-defined object type or class. It allocates memory for the object, sets the object's 'prototype' to the constructor function’s prototype, and returns the new object."
    },
    {
        "question": "What is the difference between 'shallow copy' and 'deep copy'?",
        "answer": "A shallow copy copies only the first level of an object, meaning nested objects are shared between the original and the copy, while a deep copy recursively copies all levels, creating entirely separate objects."
    },
    {
        "question": "How do you handle errors in JavaScript?",
        "answer": "Errors in JavaScript can be handled using 'try...catch' blocks, where code is executed inside the 'try' block, and any errors are caught by the 'catch' block. Additionally, custom errors can be thrown using 'throw'."
    },
    {
        "question": "What is a generator function in JavaScript?",
        "answer": "A generator function is defined using the 'function*' syntax and allows you to pause and resume the function’s execution. It uses the 'yield' keyword to yield values one at a time."
    },
    {
        "question": "What is the purpose of the 'super' keyword in JavaScript?",
        "answer": "The 'super' keyword is used to call functions on an object's parent class. It is commonly used in classes to call the constructor of the parent class or to access methods in the parent class."
    },
    {
        "question": "What is a 'weakmap' in JavaScript?",
        "answer": "A 'WeakMap' is a collection of key-value pairs where the keys are objects and the values can be any value. The keys in a WeakMap are weakly referenced, meaning they do not prevent garbage collection if there are no other references to the key."
    },
    {
        "question": "What are the different ways to define a function in JavaScript?",
        "answer": "Functions in JavaScript can be defined using function declarations, function expressions, arrow functions, and methods inside objects or classes."
    },
    {
        "question": "What are JavaScript’s primitive data types?",
        "answer": "The primitive data types in JavaScript are: String, Number, Boolean, Null, Undefined, Symbol, and BigInt."
    },
    {
        "question": "What is an anonymous function?",
        "answer": "An anonymous function is a function that is defined without a name. It is often used as an argument to higher-order functions."
    },
    {
        "question": "What is the difference between 'call' and 'apply' methods?",
        "answer": "'call' and 'apply' are both used to invoke functions with a specified 'this' value, but 'call' takes arguments individually, while 'apply' takes arguments as an array."
    },
    {
        "question": "What are closures in JavaScript?",
        "answer": "A closure is a function that retains access to the variables from its lexical scope, even after the outer function has finished execution."
    },
    {
        "question": "What is the difference between 'Array.push()' and 'Array.unshift()'?",
        "answer": "'push()' adds an element to the end of an array, while 'unshift()' adds an element to the beginning of an array."
    },
    {
        "question": "What is 'JSON.parse()' and 'JSON.stringify()' used for?",
        "answer": "'JSON.parse()' converts a JSON string into a JavaScript object, while 'JSON.stringify()' converts a JavaScript object into a JSON string."
    },
    {
        "question": "What is an ES6 feature in JavaScript?",
        "answer": "ES6 (ECMAScript 2015) introduced several features, such as arrow functions, classes, template literals, let/const, and destructuring assignments."
    },
    {
        "question": "What is the purpose of 'debugger' in JavaScript?",
        "answer": "'debugger' is a keyword used to pause code execution in a browser's developer tools for debugging purposes."
    },
    {
        "question": "What is the purpose of the 'eval()' function?",
        "answer": "'eval()' executes a string of JavaScript code in the current scope, but it is generally avoided due to security risks and performance issues."
    },
    {
        "question": "What is the difference between a deep copy and a shallow copy?",
        "answer": "A shallow copy copies the first level of an object, while a deep copy copies all levels recursively, including nested objects."
    },
    {
        "question": "What is the difference between 'undefined' and 'undeclared' variables?",
        "answer": "'undefined' refers to a variable that has been declared but not assigned a value, while 'undeclared' refers to a variable that has not been declared at all."
    },
    {
        "question": "What is the difference between '==' and '===' operators?",
        "answer": "'==' compares values after performing type coercion, while '===' compares both value and type without performing type coercion."
    },
    {
        "question": "What is the purpose of 'use strict'?",
        "answer": "'use strict' enables stricter parsing and error handling in JavaScript to avoid some silent errors and unsafe actions."
    },
    {
        "question": "What is the difference between 'null' and 'undefined' in JavaScript?",
        "answer": "'null' is an assignment value representing the intentional absence of any object value, while 'undefined' is the default value of variables that have been declared but not assigned a value."
    },
    {
        "question": "What is the 'Promise.all()' method in JavaScript?",
        "answer": "The 'Promise.all()' method takes an array of promises and returns a single promise that resolves when all the input promises have resolved or rejects if any of the promises reject."
    },
    {
        "question": "What is the 'reduce()' method in JavaScript?",
        "answer": "The 'reduce()' method is used to apply a function to an accumulator and each element in the array (from left to right) to reduce it to a single value, such as summing an array of numbers."
    },
    {
        "question": "What is a 'singleton' pattern in JavaScript?",
        "answer": "The singleton pattern is a design pattern that restricts a class to only one instance, ensuring a global access point to that instance. In JavaScript, it can be implemented using closures or by using a class."
    },
    {
        "question": "What is the difference between 'slice()' and 'splice()' in JavaScript?",
        "answer": "'slice()' is used to create a shallow copy of a portion of an array, without modifying the original array. 'splice()' modifies the original array by removing or adding elements to it."
    },
    {
        "question": "What is the 'event delegation' pattern in JavaScript?",
        "answer": "Event delegation is a technique where you attach a single event listener to a parent element instead of individual child elements. The event is then propagated from the child element to the parent, reducing the number of listeners."
    },
    {
        "question": "What is the 'Module' pattern in JavaScript?",
        "answer": "The module pattern is a design pattern that allows you to encapsulate private data and functions while exposing a public API. This is commonly done using closures and immediately invoked function expressions (IIFE)."
    },
    {
        "question": "What are 'Web Workers' in JavaScript?",
        "answer": "Web Workers allow for the execution of JavaScript in the background, enabling parallel processing without blocking the main thread. They are useful for performing resource-intensive computations."
    },
    {
        "question": "What is a 'proxy' in JavaScript?",
        "answer": "A Proxy is an object that wraps another object and allows you to intercept and customize operations performed on that object, such as getting or setting properties, calling functions, etc."
    },
    {
        "question": "What is 'localStorage' and 'sessionStorage' in JavaScript?",
        "answer": "'localStorage' and 'sessionStorage' are both used for storing data in the web browser. 'localStorage' stores data persistently until it is explicitly deleted, while 'sessionStorage' stores data for the duration of a page session."
    },
    {
        "question": "What is the difference between 'Object.create()' and 'new' in JavaScript?",
        "answer": "'Object.create()' creates a new object with a specified prototype, whereas 'new' creates an instance of a constructor function, linking the object to the constructor's prototype."
    },
    {
        "question": "What is the 'apply()' method in JavaScript?",
        "answer": "'apply()' is a method that calls a function with a specified 'this' value and arguments passed as an array (or an array-like object). It is often used when you want to invoke a function with dynamic arguments."
    },
    {
        "question": "What are 'set' and 'map' objects in JavaScript?",
        "answer": "'Set' is a collection of unique values (no duplicates), while 'Map' is a collection of key-value pairs where keys can be any value (not just strings) and can store both primitive and object values."
    },
    {
        "question": "What is a 'callback hell' and how do you avoid it?",
        "answer": "Callback hell refers to the nested and often hard-to-read structure of multiple callback functions in asynchronous programming. It can be avoided by using promises, async/await, or modularizing the code into smaller functions."
    },
    {
        "question": "What is the 'EventEmitter' class in Node.js?",
        "answer": "The 'EventEmitter' class is used to handle events in Node.js. It allows an object to emit events and allows other objects to listen and respond to those events."
    },
    {
        "question": "What is the purpose of the 'Reflect' API in JavaScript?",
        "answer": "The 'Reflect' API provides methods to interact with objects in a more declarative manner. It is often used for operations such as defining properties, getting values, or calling methods, and offers better error handling than traditional techniques."
    },
    {
        "question": "What is a 'deep freeze' in JavaScript?",
        "answer": "A 'deep freeze' is a technique used to make an object and all its nested objects immutable. This ensures that the object’s properties cannot be modified or added after freezing."
    },
    {
        "question": "What is the 'Rest' parameter in JavaScript?",
        "answer": "The 'Rest' parameter is used to collect all remaining arguments into a single array. It is defined by placing '...' before a parameter in a function definition."
    },
    {
        "question": "What is the 'spread' operator?",
        "answer": "The 'spread' operator is used to unpack values from arrays or objects into individual elements. It is often used to combine or copy arrays and objects."
    },
    {
        "question": "What is 'event bubbling' and 'event capturing'?",
        "answer": "Event bubbling refers to the process where an event starts at the target element and propagates upward through the DOM tree. Event capturing (or trickling) is the opposite, where the event starts from the root and goes down to the target element."
    },
    {
        "question": "What are 'getter' and 'setter' methods in JavaScript?",
        "answer": "Getter and setter methods allow you to define custom behavior for getting and setting object properties. A getter method returns the value of a property, while a setter method sets the value of a property."
    },
    {
        "question": "What is a 'throttle' function in JavaScript?",
        "answer": "A throttle function ensures that a function is only called once in a specified period, no matter how frequently the event is triggered. It is useful for rate-limiting function execution, such as during scrolling or resizing."
    },
    {
        "question": "What is 'async/await' in JavaScript?",
        "answer": "The 'async/await' syntax provides a way to write asynchronous code in a synchronous-like manner. The 'async' keyword is used to define a function that returns a promise, and 'await' is used to pause execution until the promise resolves."
    },
    {
        "question": "What is the 'setImmediate' method in Node.js?",
        "answer": "'setImmediate' is a method in Node.js that schedules a function to be executed after the current event loop cycle, which means it runs after all I/O events in the event queue have been processed."
    },
    {
        "question": "What is the 'set' data structure?",
        "answer": "A 'set' is a collection of unique values in JavaScript. It does not allow duplicates and is typically used when you need to store non-repetitive items. It also provides methods like 'add()', 'has()', and 'delete()'."
    },
    {
        "question": "What is 'setTimeout()' vs 'setInterval()' in JavaScript?",
        "answer": "'setTimeout()' schedules a function to execute once after a specified delay, while 'setInterval()' repeatedly executes a function at specified intervals. Both return a unique identifier for clearing the timer."
    },
    {
        "question": "What is the 'call stack' in JavaScript?",
        "answer": "The call stack is a mechanism that keeps track of the function calls in a program. When a function is invoked, it is added to the call stack, and when it finishes, it is removed. It follows a Last In, First Out (LIFO) order."
    },
    {
        "question": "What is 'IIFE' (Immediately Invoked Function Expression) in JavaScript?",
        "answer": "An IIFE is a function that is defined and invoked immediately after its creation. It is often used to create a private scope for variables, avoiding polluting the global namespace."
    },
    {
        "question": "What is 'destructuring' in JavaScript?",
        "answer": "Destructuring is a syntax that allows unpacking values from arrays or properties from objects into distinct variables. It can simplify the process of accessing and assigning values from complex structures."
    },
    {
        "question": "What is 'memoization' in JavaScript?",
        "answer": "Memoization is an optimization technique where a function’s results are cached based on its inputs, so subsequent calls with the same arguments can return the cached result instead of recomputing it."
    },
    {
        "question": "What is a 'currying' function in JavaScript?",
        "answer": "Currying is a technique where a function with multiple arguments is transformed into a series of functions, each taking one argument and returning a new function to handle the next argument."
    },
    {
        "question": "What is 'destructuring assignment' and how is it used in JavaScript?",
        "answer": "Destructuring assignment allows you to extract values from arrays or objects and assign them to variables. It simplifies syntax for accessing multiple properties or elements from a structure."
    },
    {
        "question": "What is DOM?",
        "answer": "DOM (Document Object Model) is a programming interface for web documents. It represents the structure of a web page as a tree of objects where each object corresponds to part of the page (elements, attributes, text). DOM allows programming languages like JavaScript to manipulate the structure, style, and content of the page."
    },
    {
        "question": "What is BOM?",
        "answer": "BOM (Browser Object Model) is a model that provides interaction with the web browser itself. It allows access to features such as the browser window, history, location, screen size, and more. Unlike the DOM, which is focused on the document, BOM deals with the environment outside of the document."
    },
    {
        "question": "What is the difference between function declaration and function expression?",
        "answer": "A function declaration defines a function with a name and can be called before it appears in the code due to hoisting. A function expression, on the other hand, creates a function as part of an expression and cannot be called before its definition, as it is not hoisted. Function expressions can be anonymous or named."
    },
    {
        "question": "What is the output of `console.log(typeof NaN);` in JavaScript?",
        "answer": "'number'. Although `NaN` stands for 'Not-a-Number', it is technically of the 'number' type in JavaScript."
    },
    {
        "question": "What does the `typeof` operator return when used on an array in JavaScript?",
        "answer": "'object'. In JavaScript, arrays are technically objects, and `typeof` will return 'object' when applied to an array."
    },
    {
        "question": "How do you remove the last element of an array in JavaScript?",
        "answer": "You can use the `pop()` method to remove the last element from an array."
    },
    {
        "question": "What is the purpose of `Array.isArray()` in JavaScript?",
        "answer": "`Array.isArray()` checks if a given value is an array and returns `true` if it is, and `false` otherwise."
    }
];


