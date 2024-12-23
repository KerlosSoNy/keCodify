export const cssinterview = 
[
    {
        "question": "What is CSS?",
        "answer": "CSS (Cascading Style Sheets) is used to style and layout web pages. It controls the appearance of elements, such as their colors, sizes, and positions."
    },
    {
        "question": "What are the different ways to apply CSS to a webpage?",
        "answer": "CSS can be applied in three ways: 1) Inline CSS (using the style attribute in HTML elements), 2) Internal CSS (within the <style> tag in the HTML document's <head>), and 3) External CSS (linked using the <link> tag to a separate CSS file)."
    },
    {
        "question": "What is the difference between 'class' and 'id' selectors in CSS?",
        "answer": "'class' selectors are used to target multiple elements and can be reused across different elements, while 'id' selectors are used to target a single, unique element on a page."
    },
    {
        "question": "What are the CSS box model properties?",
        "answer": "The CSS box model consists of the content area, padding, border, and margin. These properties define the space around elements and how they are displayed on the page."
    },
    {
        "question": "What is the 'z-index' in CSS?",
        "answer": "'z-index' is a CSS property used to control the stacking order of elements. Elements with a higher z-index value will appear on top of those with a lower z-index value, but it only works on positioned elements (those with position: relative, absolute, or fixed)."
    },
    {
        "question": "Explain the difference between 'position: absolute', 'position: relative', and 'position: fixed'.",
        "answer": "'position: absolute' positions an element relative to its closest positioned ancestor, 'position: relative' positions an element relative to its normal position, and 'position: fixed' positions an element relative to the browser window, staying fixed in place even when the page is scrolled."
    },
    {
        "question": "What is the 'display' property in CSS?",
        "answer": "The 'display' property defines the display behavior of an element. Common values include 'block' (elements take up the full width of the container), 'inline' (elements only take up as much width as their content), and 'none' (element is not displayed)."
    },
    {
        "question": "What is the difference between 'display: none' and 'visibility: hidden'?",
        "answer": "'display: none' removes the element from the layout entirely, while 'visibility: hidden' hides the element but still occupies space in the layout."
    },
    {
        "question": "What are pseudo-elements and pseudo-classes??",
        "answer": "Pseudo-classes are used to style elements based on their state or position in the document, such as ':hover' for when an element is hovered over, ':first-child' for the first child of a parent element, or ':nth-child()' to target specific children. Pseudo-elements are used to style specific parts of an element, such as ':before' to insert content before an element, ':after' to insert content after an element, or ':first-letter' to style the first letter of a text block."
    },
    {
        "question": "What is the 'nth-child' selector in CSS?",
        "answer": "The ':nth-child()' selector is used to target specific child elements of a parent based on a pattern, such as even, odd, or a specific number. Example: 'li:nth-child(2)' targets the second list item in an unordered list."
    },
    {
        "question": "What is the difference between nth-child() and nth-of-type()?",
        "answer": "nth-child(): Matches the child based on its position relative to all siblings. nth-of-type(): Matches the child based on its position relative to siblings of the same type."
    },
    {
        "question": "What is Flexbox in CSS?",
        "answer": "Flexbox is a layout model that allows easy alignment and distribution of elements within a container, even when their sizes are unknown or dynamic. It provides properties like 'justify-content', 'align-items', and 'flex-direction' to manage the positioning of items within a flex container."
    },
    {
        "question": "How does Flexbox work?",
        "answer": "Flexbox (Flexible Box Layout) is a CSS layout model designed to align and distribute space among items in a container, even when their sizes are dynamic. It uses a parent container with `display: flex;` and aligns items along two axes: the main axis (defined by `flex-direction`) and the cross axis (perpendicular to the main axis). Key properties include `justify-content` for alignment along the main axis, `align-items` for alignment along the cross axis, and `flex-wrap` to handle wrapping of items. Flexbox simplifies responsive design by adjusting item sizes and spacing automatically."
    },    
    {
        "question": "What is the 'float' property in CSS?",
        "answer": "The 'float' property is used to float an element to the left or right of its container, allowing other content to wrap around it. However, it has been largely replaced by Flexbox and Grid layouts in modern web design."
    },
    {
        "question": "What is a CSS Grid?",
        "answer": "CSS Grid is a two-dimensional layout system that allows web designers to create complex layouts with rows and columns. It is more powerful and flexible than Flexbox when dealing with grid-based designs."
    },
    {
        "question": "How does CSS Grid differ from Flexbox?",
        "answer": "CSS Grid is a two-dimensional layout system, meaning it can handle both rows and columns, while Flexbox is a one-dimensional layout system, focusing on either rows or columns at a time. CSS Grid is best for designing complete page layouts, whereas Flexbox is ideal for aligning and distributing items in a single axis. For example, CSS Grid allows you to define a grid structure with rows and columns using properties like `grid-template-rows` and `grid-template-columns`, while Flexbox aligns items along a single main axis using properties like `justify-content` and `align-items`."
    },
    {
        "question": "Explain the use of the grid-template-columns property.",
        "answer": "The `grid-template-columns` property defines the number and size of columns in a CSS Grid container. It accepts values such as fixed sizes (e.g., `100px`), relative sizes (e.g., `1fr` for fractional units), or a combination. For example, `grid-template-columns: 100px 1fr 2fr;` creates a grid with three columns: the first is 100px wide, the second takes up 1 fraction of the remaining space, and the third takes up 2 fractions of the remaining space."
    },    
    {
        "question": "What are media queries in CSS?",
        "answer": "Media queries are used to apply different styles based on the device's characteristics, like screen size or resolution. They enable responsive design, ensuring that a webpage looks good on all devices."
    },
    {
        "question": "What is the 'transition' property in CSS?",
        "answer": "The 'transition' property allows you to change property values smoothly over a specified duration, enabling animations on hover or when certain conditions are met. It requires a target property, duration, and optional timing functions."
    },
    {
        "question": "What is the 'box-sizing' property?",
        "answer": "The 'box-sizing' property controls how the width and height of an element are calculated. 'content-box' (default) excludes padding and border from width/height, while 'border-box' includes padding and border in the element's total width and height."
    },
    {
        "question": "How do you center a block element in CSS?",
        "answer": "To center a block element horizontally, use 'margin: 0 auto'. To center it vertically, use 'display: flex' with 'align-items: center' and 'justify-content: center' on the parent container."
    },
    {
        "question": "What is the 'align-items' property in CSS?",
        "answer": "The 'align-items' property is used in Flexbox and Grid layouts to align items along the cross axis (vertical by default). Common values include 'flex-start', 'center', 'flex-end', 'stretch', and 'baseline'."
    },
    {
        "question": "What is the 'justify-content' property in CSS?",
        "answer": "The 'justify-content' property is used in Flexbox and Grid layouts to align and distribute items along the main axis (horizontal by default). Common values include 'flex-start' (align items at the start), 'center' (center items), 'space-between' (distribute items with space between), and 'space-around' (distribute items with space around)."
    },
    {
        "question": "How do you center an element horizontally and vertically using CSS?",
        "answer": "To center an element horizontally and vertically, you can use Flexbox by setting the parent container to 'display: flex', 'justify-content: center' (horizontal) and 'align-items: center' (vertical). Alternatively, use Grid with 'display: grid', 'place-items: center'."
    },
    {
        "question": "What is the 'opacity' property in CSS?",
        "answer": "The 'opacity' property in CSS is used to control the transparency level of an element, where '1' is fully opaque and '0' is fully transparent."
    },
    {
        "question": "What is the 'white-space' property in CSS?",
        "answer": "The 'white-space' property controls how whitespace is handled within an element. Common values are 'normal' (default behavior, collapsing whitespace), 'nowrap' (prevents line breaks), 'pre' (preserves whitespace and line breaks), and 'pre-wrap' (preserves whitespace but allows wrapping)."
    },
    {
        "question": "What is the 'cursor' property in CSS?",
        "answer": "The 'cursor' property is used to specify the type of cursor to be displayed when the mouse pointer is over an element. Common values include 'pointer' (hand cursor), 'default' (arrow), and 'text' (text selection)."
    },
    {
        "question": "What is the 'background' shorthand property in CSS?",
        "answer": "The 'background' shorthand property combines several background-related properties, such as 'background-color', 'background-image', 'background-position', 'background-size', and 'background-repeat', into one line."
    },
    {
        "question": "What is the 'text-transform' property in CSS?",
        "answer": "The 'text-transform' property is used to control the capitalization of text. Common values include 'uppercase' (converts text to uppercase), 'lowercase' (converts text to lowercase), and 'capitalize' (capitalizes the first letter of each word)."
    },
    {
        "question": "What is the difference between 'inline' and 'inline-block' elements?",
        "answer": "'inline' elements do not break the flow of content and only take up as much width as necessary, while 'inline-block' elements behave like inline elements but can have width and height properties."
    },
    {
        "question": "What is the purpose of the 'clearfix' hack?",
        "answer": "The 'clearfix' hack is used to clear floated elements within a container, preventing the container from collapsing. It typically involves adding the 'clearfix' class with 'clear: both' to the container."
    },
    {
        "question": "What is the 'clear' property in CSS?",
        "answer": "The 'clear' property is used to control the behavior of an element when it comes after floated elements. It can have values like 'left', 'right', or 'both' to prevent elements from wrapping around floats."
    },
    {
        "question": "What are the CSS 'transform' and 'translate' properties?",
        "answer": "The 'transform' property allows you to apply various transformations (such as scaling, rotating, or skewing) to an element. 'translate' is a transformation function that moves an element along the X, Y, or Z axis."
    },
    {
        "question": "What are CSS animations?",
        "answer": "CSS animations allow you to animate changes in CSS properties over time. They use '@keyframes' to define the states of an animation, and the 'animation' property to control its behavior, such as duration, delay, and iteration."
    },
    {
        "question": "What is the 'visibility' property in CSS?",
        "answer": "The 'visibility' property controls whether an element is visible or hidden. If set to 'hidden', the element will not be visible, but it will still occupy space in the layout. 'visible' is the default value, making the element visible."
    },
    {
        "question": "What is the purpose of the 'position' property in CSS?",
        "answer": "The 'position' property defines how an element is positioned in the document. Values include 'static' (default), 'relative', 'absolute', 'fixed', and 'sticky', each with different behavior regarding positioning in the layout."
    },
    {
        "question": "What is a 'sticky' positioning in CSS?",
        "answer": "'sticky' positioning allows an element to stick to the top or bottom of the viewport when scrolling, but it remains in the normal document flow until it reaches its defined position. Example: 'position: sticky; top: 0;'."
    },
    {
        "question": "What is the 'box-shadow' property in CSS?",
        "answer": "The 'box-shadow' property adds shadow effects to elements. It can take values for horizontal and vertical offsets, blur radius, spread radius, and color. Example: 'box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);'."
    },
    {
        "question": "What is the 'text-align' property in CSS?",
        "answer": "The 'text-align' property is used to set the horizontal alignment of text or inline elements within a block element. Common values include 'left', 'right', 'center', and 'justify'."
    },
    {
        "question": "How do you create a responsive layout with CSS?",
        "answer": "A responsive layout can be created using media queries, Flexbox, or CSS Grid. Media queries allow the layout to adjust based on the screen size, while Flexbox and Grid offer flexible methods to position elements dynamically."
    },
    {
        "question": "What is the 'overflow' property in CSS?",
        "answer": "The 'overflow' property controls what happens when content overflows the boundaries of a container. Common values are 'visible', 'hidden', 'scroll', and 'auto'."
    },
    {
        "question": "What are 'CSS variables'?",
        "answer": "CSS variables, also known as custom properties, are user-defined values that can be reused throughout a stylesheet. They are declared with '--' and accessed using 'var()'. Example: '--main-color: red;'."
    },
    {
        "question": "How do you add a gradient background in CSS?",
        "answer": "A gradient background can be added using the 'background-image' property with the 'linear-gradient' or 'radial-gradient' function. Example: 'background-image: linear-gradient(to right, red, blue);'."
    },
    {
        "question": "What is the 'max-width' property in CSS?",
        "answer": "The 'max-width' property defines the maximum width of an element. The element will not exceed this width, but can shrink down depending on its content or container's size."
    },
    {
        "question": "How can you make a website mobile-friendly with CSS?",
        "answer": "A mobile-friendly website can be made by using responsive design principles, such as using flexible layouts (via Flexbox or Grid), setting a fluid viewport using the 'meta' tag, and employing media queries to adapt to different screen sizes."
    },
    {
        "question": "What is the 'border-radius' property in CSS?",
        "answer": "The 'border-radius' property is used to create rounded corners on elements. It accepts one or more values for radius, such as 'border-radius: 10px;' for uniform rounding on all corners."
    },
    {
        "question": "What is the 'clip-path' property in CSS?",
        "answer": "The 'clip-path' property allows you to define a visible region of an element, making parts of it invisible. It can use various shapes like circles, polygons, or SVG paths. Example: 'clip-path: circle(50% at 50% 50%);'."
    },
    {
        "question": "What is the 'rem' unit in CSS?",
        "answer": "'rem' stands for 'root em'. It is relative to the root element's font size (typically 16px). For example, '1rem' equals the font size of the <html> element, making it easier to scale elements consistently."
    },
    {
        "question": "What is the difference between em and rem units in CSS?",
        "answer": "The `em` unit is relative to the font size of its parent element, meaning it compounds if used in nested elements. The `rem` unit is relative to the root element's font size (`html`), ensuring consistent sizing regardless of nesting. For example, if the root font size is 16px, `2rem` equals 32px everywhere, while `2em` depends on the parent element's font size."
    },    
    {
        "question": "What is the 'vw' and 'vh' units in CSS?",
        "answer": "'vw' stands for viewport width, and 'vh' stands for viewport height. These units are relative to the viewport's dimensions. For example, '100vw' is equal to 100% of the viewport's width, and '100vh' is equal to 100% of the viewport's height."
    },
    {
        "question": "What is the 'will-change' property in CSS?",
        "answer": "The 'will-change' property is used to tell the browser which properties are likely to change, so it can optimize the performance of those elements. Example: 'will-change: transform;' prepares the element for upcoming transformations."
    },
    {
        "question": "How would you create a responsive design?",
        "answer": "Use: Fluid grids (e.g., flex, grid), Relative units (%, em, rem), Media queries."
    }
];

