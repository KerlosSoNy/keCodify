export const htmlInterview = 
[
    {
        "question": "What is HTML?",
        "answer": "HTML (HyperText Markup Language) is the standard markup language for creating web pages. It structures content on the web using elements like headings, paragraphs, and images."
    },
    {
        "question": "What are the differences between HTML and XHTML?",
        "answer": "HTML is more forgiving with syntax errors, while XHTML requires strict adherence to syntax rules. XHTML is XML-based and must be well-formed. XHTML elements must always be properly closed (e.g., <br />)."
    },
    {
        "question": "What are HTML tags? List a few examples.",
        "answer": "Tags are elements enclosed in angle brackets, like <p> (paragraph), <a> (link), <img> (image), etc."
    },
    {
        "question": "What are semantic HTML tags? And give examples.",
        "answer": "Tags that clearly describe their purpose: Examples: <header>, <footer>, <article>, <section>."
    },
    {
        "question": "What is the <nav> element?",
        "answer": "The <nav> element is used to define navigation links within a document. It is intended to group links that help users navigate the site or application, such as menus or sidebars. It helps search engines and assistive technologies identify and prioritize navigation sections. Example: <nav><ul><li><a href='#home'>Home</a></li><li><a href='#about'>About</a></li></ul></nav>."
    },    
    {
        "question": "What is the difference between <div> and <span>?",
        "answer": "<div>: Block-level container. <span>: Inline container."
    },
    {
        "question": "What is the difference between the <head> and <body> sections of an HTML document?",
        "answer": "<head>: Contains metadata, title, links to CSS/JS. <body>: Contains visible content displayed on the webpage."
    },
    {
        "question": "What is the difference between a block-level element and an inline element?",
        "answer": "Block-level elements start on a new line (e.g., <div>, <h1>). Inline elements do not break the line (e.g., <span>, <a>)."
    },
    {
        "question": "What is the purpose of the <DOCTYPE> declaration?",
        "answer": "It tells the browser which version of HTML is used, ensuring proper rendering."
    },
    {
        "question": "What is the difference between `div` and `span` tags?",
        "answer": "The `<div>` tag is a block-level element, used to group content and structure a page, while the `<span>` tag is an inline element, used to style a part of a content without breaking the flow of text."
    },
    {
        "question": "What is the <main> element?",
        "answer": "The <main> element is used to represent the primary content of the document. It is intended to contain content that is directly related to or expands upon the central topic of the document, excluding things like headers, footers, navigation, and sidebars. There should only be one <main> element per document. Example: <main><h1>Main content here</h1></main>."
    },
    {
        "question": "What is the purpose of the <head> tag in HTML?",
        "answer": "The <head> tag in HTML is used to contain meta-information about the document, such as the document title, character encoding, links to stylesheets, scripts, and other resources. It is not directly visible on the webpage but provides important data to the browser and search engines."
    },    
    {
        "question": "What is the difference between the `<ul>`, `<ol>`, and `<li>` tags?",
        "answer": "The `<ul>` tag creates an unordered list, the `<ol>` tag creates an ordered list, and the `<li>` tag defines list items inside either `<ul>` or `<ol>`."
    },
    {
        "question": "What does the `alt` attribute do in an `<img>` tag?",
        "answer": "The `alt` attribute provides alternative text for an image if it cannot be displayed, improving accessibility for users with screen readers or when the image fails to load."
    },
    {
        "question": "How do you create a hyperlink in HTML?",
        "answer": "To create a hyperlink, use the <a> tag with the href attribute to specify the URL."
    },
    {
        "question": "What is an anchor (`<a>`) tag used for?",
        "answer": "The `<a>` tag is used to define hyperlinks in a webpage. It links to other documents or sections within the same document using the `href` attribute."
    },
    {
        "question": "What is the difference between inline and block-level elements in HTML?",
        "answer": "Block-level elements occupy the full width available and start on a new line, such as `<div>`, `<section>`, and `<header>`. Inline elements, like `<span>`, do not break the flow of content and only take up as much width as necessary."
    },
    {
        "question": "How do you create a form in HTML?",
        "answer": "You can create a form using the `<form>` tag."
    },
    {
        "question": "What is the use of the `<label>` tag in a form?",
        "answer": "The `<label>` tag is used to define labels for `<input>`, `<textarea>`, `<select>`, and other form elements. It improves accessibility, allowing screen readers to associate the label with the corresponding input field."
    },
    {
        "question": "How do you include external CSS in an HTML document?",
        "answer": "You can include external CSS by using the `<link>` tag in the `<head>` section. Example:\n<link rel='stylesheet' href='styles.css'>"
    },
    {
        "question": "How do you add a background color to a web page in HTML?",
        "answer": "You can add a background color to a webpage byusing the style attribute in the <body> tag or through CSS."
    },
    {
        "question": "What is the difference between the `<link>` and `<script>` tags?",
        "answer": "The `<link>` tag is used to link external resources such as CSS files, while the `<script>` tag is used to include or link external JavaScript files."
    },
    {
        "question": "How can you make a table in HTML?",
        "answer": "A table is created using the `<table>` tag, with rows defined by the `<tr>` tag, header cells by the `<th>` tag, and data cells by the `<td>` tag. Example:\n<table>\n  <tr>\n    <th>Name</th>\n    <th>Age</th>\n  </tr>\n  <tr>\n    <td>John</td>\n    <td>25</td>\n  </tr>\n</table>"
    },
    {
        "question": "What does the `colspan` attribute do in a table?",
        "answer": "The `colspan` attribute in a `<td>` or `<th>` element specifies how many columns the cell should span across. Example: `<td colspan='2'>Cell</td>` will span 2 columns."
    },
    {
        "question": "What is the `<iframe>` tag used for?",
        "answer": "The `<iframe>` tag is used to embed another HTML document within the current document. Example: `<iframe src='https://example.com'></iframe>`."
    },
    {
        "question": "How do you create a contact form with text area in HTML?",
        "answer": "You can create a contact form with a text area by using the <textarea> tag."
    },
    {
        "question": "What is the difference between the `<b>` and `<strong>` tags?",
        "answer": "The `<b>` tag is used to make text bold, while the `<strong>` tag also makes text bold but has semantic meaning, indicating that the text is of strong importance."
    },
    {
        "question": "How can you include an external JavaScript file in HTML?",
        "answer": "You can include an external JavaScript file using the `<script>` tag. Example:\n<script src='script.js'></script>"
    },
    {
        "question": "What is the `viewport` meta tag used for?",
        "answer": "The `viewport` meta tag controls the layout on mobile devices, allowing you to set the width, zoom level, and scaling behavior. Example: `<meta name='viewport' content='width=device-width, initial-scale=1.0'>`."
    },
    {
        "question": "What is the difference between the `<head>` and `<body>` tags?",
        "answer": "The `<head>` tag contains metadata and links to external resources (like stylesheets), while the `<body>` tag contains the content that is visible on the page."
    },
    {
        "question": "How do you embed a video in HTML?",
        "answer": "You can embed a video by using the <video> tag. You can also include the controls attribute for video controls like play, pause, and volume."
    },
    {
        "question": "What is the difference between the `<section>` and `<div>` tags?",
        "answer": "The `<section>` tag is used for grouping related content with a semantic meaning, while the `<div>` tag is a generic container with no semantic meaning. `<section>` is better for accessibility and SEO."
    },
    {
        "question": "What does the `<audio>` tag do in HTML?",
        "answer": "The `<audio>` tag is used to embed audio content in a web page. It supports multiple file formats and can include controls like play, pause, and volume adjustment. Example:\n<audio controls>\n  <source src='audio.mp3' type='audio/mpeg'>\n  Your browser does not support the audio element.\n</audio>"
    },
    {
        "question": "What does the `<video>` tag do in HTML?",
        "answer": "The `<video>` tag is used to embed a video in a web page. It can include controls for play, pause, and volume, as well as support for multiple video file formats. Example:\n<video controls>\n  <source src='video.mp4' type='video/mp4'>\n  Your browser does not support the video element.\n</video>"
    },
    {
        "question": "How do you specify multiple file inputs in a form?",
        "answer": "You can allow multiple file selection by using the 'multiple' attribute on the <input type='file'> element, like this: <input type='file' multiple>."
    },    
    {
        "question": "What are the attributes of the `<form>` tag and what do they do?",
        "answer": "The most common attributes of the `<form>` tag are `action` (specifies where to send form data) and `method` (defines the HTTP method, usually 'GET' or 'POST'). Example:\n<form action='/submit' method='post'>\n</form>"
    },
    {
        "question": "What is the difference between the `<input>` types `text`, `password`, and `email`?",
        "answer": "The `<input type='text'>` is used for single-line text input, `<input type='password'>` hides the input for sensitive data, and `<input type='email'>` is used for email addresses with built-in validation for email format."
    },
    {
        "question": "How do you define a clickable button in HTML?",
        "answer": "You can define a clickable button using the `<button>` tag. Example:\n<button type='button' onclick='alert(\"Button clicked!\")'>Click Me</button>"
    },
    {
        "question": "How do you create a dropdown list in HTML?",
        "answer": "You can create a dropdown list using the `<select>` and `<option>` tags. Example:\n<select>\n  <option value='1'>Option 1</option>\n  <option value='2'>Option 2</option>\n</select>"
    },
    {
        "question": "How do you create a button in HTML?",
        "answer": "To create a button in HTML, you can use the <button> element or the <input> element with type='button'. The <button> element is more versatile, as it can contain text or HTML content, whereas the <input> element is used for simple buttons."
    },    
    {
        "question": "What is the `charset` attribute in the `<meta>` tag?",
        "answer": "The `charset` attribute in the `<meta>` tag specifies the character encoding for the HTML document, which helps ensure the correct rendering of text. Example: `<meta charset='UTF-8'>`."
    },
    {
        "question": "What are the new form input types introduced in HTML5?",
        "answer": "HTML5 introduced several new input types, including `email`, `url`, `date`, `time`, `range`, `number`, `tel`, and `search`, among others, to provide better user input validation and control."
    },
    {
        "question": "What is the <time> element used for?",
        "answer": "The <time> element is used to represent a specific period in time, such as a date, time, or a range of time. It allows the browser and search engines to better understand and format the content. Example: <time datetime='2024-11-20'>November 20, 2024</time>."
    },
    {
        "question": "What is the purpose of the `<noscript>` tag?",
        "answer": "The `<noscript>` tag is used to define content that is displayed if the user's browser does not support JavaScript or if JavaScript is disabled. Example:\n<noscript>Your browser does not support JavaScript.</noscript>"
    },
    {
        "question": "What does the `placeholder` attribute do in HTML forms?",
        "answer": "The `placeholder` attribute provides a short hint inside an input field to describe the expected value. It disappears when the user starts typing. Example:\n<input type='text' placeholder='Enter your name'>"
    },
    {
        "question": "What are the different types of lists in HTML?",
        "answer": "There are three types of lists in HTML: unordered list (`<ul>`), ordered list (`<ol>`), and definition list (`<dl>`), which is used to define terms and their descriptions."
    },
    {
        "question": "How do you create an ordered list in HTML?",
        "answer": "An ordered list can be created using the <ol> tag, and each item is defined with the <li> tag."
    },
    {
        "question": "What is the use of the `<mark>` tag?",
        "answer": "The `<mark>` tag is used to highlight text, typically for search results or important keywords. Example:\n<p>This is an <mark>important</mark> note.</p>"
    },
    {
        "question": "What is the `action` attribute of the `<form>` tag?",
        "answer": "The `action` attribute specifies the URL where the form data should be submitted. Example:\n<form action='submit_form.php' method='post'>"
    },
    {
        "question": "What is the `method` attribute in the `<form>` tag?",
        "answer": "The `method` attribute defines how the form data is sent to the server. It can be `GET` (data is appended to the URL) or `POST` (data is sent in the request body). Example:\n<form method='post'>"
    },
    {
        "question": "How do you create a table in HTML?",
        "answer": "You can create a table using the `<table>`, `<tr>`, `<th>`, and `<td>` tags. Example:\n<table>\n  <tr>\n    <th>Name</th>\n    <th>Age</th>\n  </tr>\n  <tr>\n    <td>John</td>\n    <td>25</td>\n  </tr>\n</table>"
    },
    {
        "question": "How do you make text italic in HTML?",
        "answer": "You can make text italic using the `<i>` or `<em>` tag. The `<em>` tag also gives semantic meaning (emphasis). Example:\n<p><i>Italic text</i></p>"
    },
    {
        "question": "What is the difference between `<strong>` and `<b>` tags?",
        "answer": "The `<strong>` tag is used to indicate that the text is of strong importance (semantically meaningful), while the `<b>` tag is used for styling purposes to make the text bold without semantic meaning."
    },
    {
        "question": "What is the `target='_blank'` attribute used for in an anchor tag?",
        "answer": "The `target='_blank'` attribute causes the link to open in a new tab or window."
    },
    {
        "question": "How do you specify a character encoding for an HTML document?",
        "answer": "To specify a character encoding for an HTML document, you use the <meta> tag with the 'charset' attribute in the <head> section of the HTML document. The most common encoding is UTF-8."
    },     
    {
        "question": "How do you define an image map?",
        "answer": "An image map is defined using the <map> element, which contains one or more <area> elements that define clickable areas on an image. Each <area> element specifies a shape (like rectangle, circle, or polygon) and links to a target."
    },    
    {
        "question": "What is the difference between the <em> and <i> tags in HTML?",
        "answer": "The <em> tag is used to emphasize text, which is typically displayed in italics by default. It also has semantic meaning, indicating that the text should be emphasized or stressed, which can affect screen readers or search engines. The <i> tag is used to apply italic styling to text without implying any special emphasis or meaning. It is purely a presentational element and does not carry semantic meaning."
    },    
    {
        "question": "What is the difference between id and class attributes?",
        "answer": "The 'id' attribute is used to uniquely identify an element within a document. It must have a unique value on the page, meaning no two elements can share the same 'id'. It is commonly used for targeting a specific element with JavaScript or CSS. The 'class' attribute is used to assign one or more class names to an element, which can be shared across multiple elements. It is useful for applying the same styles or behaviors to multiple elements."
    },    
    {
        "question": "What is the <fieldset> tag used for in HTML forms?",
        "answer": "The <fieldset> tag is used to group related elements within an HTML form, often with a visual border, to improve form organization and accessibility. It helps in organizing complex forms into sections. The <legend> tag is often used inside a <fieldset> to provide a title for the group. Example: <fieldset><legend>Personal Information</legend><input type='text' name='name'></fieldset>."
    },    
    {
        "question": "What is the difference between <link> and <a> tags?",
        "answer":"The <link> tag is used to define relationships between the current document and external resources, such as linking a CSS stylesheet or a favicon. It is placed in the <head> section of the HTML document and does not create clickable content on the page. The <a> (anchor) tag is used to create hyperlinks that navigate to other web pages or resources. It is placed within the body of the document and can be clicked by users to navigate."
    },    
    {
        "question": "What is the <canvas> tag?",
        "answer": "The <canvas> tag is used to draw graphics, such as shapes, images, and animations, on the fly using JavaScript. It provides an area on the webpage where you can programmatically render content. Example: <canvas id='myCanvas' width='200' height='100'></canvas> allows for drawing inside the specified width and height. JavaScript methods, such as 'getContext()' and drawing functions, are used to interact with the canvas."
    },    
    {
        "question": "What are data attributes in HTML?",
        "answer": "Data attributes in HTML allow you to store extra information on an element without affecting its rendering. They are prefixed with 'data-', followed by a custom name. For example, <div data-user-id='1234'> stores a custom 'user-id' attribute. You can access data attributes using JavaScript via 'element.dataset'."
    },    
    {
        "question": "What is the <aside> element used for?",
        "answer": "The <aside> element is used to represent content that is tangentially related to the content around it. It typically contains information like sidebars, call-out boxes, or additional resources that are indirectly related to the main content. Example: <aside><p>Related articles or links</p></aside>."
    },    
    {
        "question": "What is the `<progress>` tag?",
        "answer": "The <progress> tag is used to represent the progress of a task, such as downloading, uploading, or completing a process. It displays a visual progress bar, where the 'value' attribute specifies the current progress, and the 'max' attribute defines the total value."
    },
    {
        "question": "How do you define a progress bar in HTML?",
        "answer": "A progress bar is defined using the <progress> tag. The value attribute represents the current progress, and the max attribute defines the maximum value. Example: <progress value='50' max='100'></progress>."
    },    
    {
        "question": "What are semantic HTML elements?",
        "answer": "They are elements with meaningful names that describe their purpose, such as `<header>`, `<footer>`, and `<article>`."
    },
    {
        "question": "What is the `download` attribute in an `<a>` tag?",
        "answer": "It enables files to be downloaded instead of being opened in the browser."
    },
    {
        "question": "What are HTML entities?",
        "answer": "HTML entities are special characters that are represented by a code or name, used to display reserved or non-printable characters in HTML. They are used to ensure that characters are displayed correctly in the browser without interfering with the HTML code. For example, the less-than symbol (<) is represented as &lt;, and the ampersand (&) is represented as &amp;."
    },    
    {
        "question": "What is the `<datalist>` tag?",
        "answer": "It provides a list of predefined options for an input field."
    },
    {
        "question": "How do you disable an input field?",
        "answer": "Add the `disabled` attribute to the input field."
    },
    {
        "question": "What is the purpose of the `<details>` and `<summary>` tags?",
        "answer": "The `<details>` tag is used to create a collapsible content area that users can toggle open or closed. The `<summary>` tag is placed inside the `<details>` element and serves as a summary or label for the content. Together, they provide an easy way to hide or show information interactively without requiring JavaScript."
    },
    {
        "question": "What is the purpose of the doctype declaration?",
        "answer": "The <!DOCTYPE> declaration specifies the HTML version being used and ensures that the browser renders the page in standards mode rather than quirks mode, providing consistent behavior across different browsers."
    },
    {
        "question": "How do you add a favicon to a website?",
        "answer": "A favicon can be added to a website by including a <link> tag in the <head> section of the HTML document, pointing to the image file you want to use as the favicon. Example: <link rel='icon' href='favicon.ico' type='image/x-icon'>."
    },
    {
        "question": "How do you include JavaScript in HTML?",
        "answer": "JavaScript can be included in HTML using the <script> tag. It can be placed either in the <head> or <body> section. You can include external JavaScript files by using the 'src' attribute, like this: <script src='script.js'></script>. Alternatively, you can write inline JavaScript within the <script> tags: <script>console.log('Hello, World!');</script>."
    }
    
];
