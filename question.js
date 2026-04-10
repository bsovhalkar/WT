const allQuestions = [
  {
    question: "Which HTML tag is used to create a hyperlink?",
    options: { a: "&lt;link&gt;", b: "&lt;a&gt;", c: "&lt;href&gt;", d: "&lt;url&gt;" },
    answer: "b"
  },
  {
    question: "Which CSS property is used to change the text color?",
    options: { a: "font-style", b: "background-color", c: "color", d: "text-transform" },
    answer: "c"
  },
  {
    question: "Which JavaScript method selects an element by its ID?",
    options: { a: "getElementByClass()", b: "queryById()", c: "getElementById()", d: "selectId()" },
    answer: "c"
  },
  {
    question: "Which HTTP method is commonly used to submit form data securely?",
    options: { a: "GET", b: "POST", c: "TRACE", d: "CONNECT" },
    answer: "b"
  },
  {
    question: "Which of the following helps make web pages responsive?",
    options: { a: "Media queries", b: "Cookies", c: "SVG filters", d: "Meta refresh" },
    answer: "a"
  },
  {
    question: "What does HTML stand for?",
    options: { a: "HyperText Markup Language", b: "HighText Machine Language", c: "HyperText Machine Link", d: "Hyperlink and Text Markup Language" },
    answer: "a"
  },
  {
    question: "Which tag defines the largest heading in HTML?",
    options: { a: "&lt;h6&gt;", b: "&lt;head&gt;", c: "&lt;h1&gt;", d: "&lt;heading&gt;" },
    answer: "c"
  },
  {
    question: "What does CSS stand for?",
    options: { a: "Cascading Style Sheets", b: "Creative Style System", c: "Computer Style Sheets", d: "Colorful Style Sheets" },
    answer: "a"
  },
  {
    question: "Which attribute specifies the URL of the page a link goes to?",
    options: { a: "src", b: "href", c: "link", d: "url" },
    answer: "b"
  },
  {
    question: "Which HTML element is used to insert an image?",
    options: { a: "&lt;picture&gt;", b: "&lt;src&gt;", c: "&lt;photo&gt;", d: "&lt;img&gt;" },
    answer: "d"
  },
  {
    question: "Which CSS property controls the space between elements?",
    options: { a: "margin", b: "spacing", c: "border", d: "gap-size" },
    answer: "a"
  },
  {
    question: "What is the correct JavaScript syntax to write 'Hello World' in the browser console?",
    options: { a: "console.log('Hello World')", b: "print('Hello World')", c: "document.write('Hello World')", d: "echo('Hello World')" },
    answer: "a"
  },
  {
    question: "Which HTML element defines a table row?",
    options: { a: "&lt;td&gt;", b: "&lt;th&gt;", c: "&lt;tr&gt;", d: "&lt;table-row&gt;" },
    answer: "c"
  },
  {
    question: "Which CSS display value makes elements appear side by side?",
    options: { a: "block", b: "inline", c: "none", d: "table" },
    answer: "b"
  },
  {
    question: "Which HTML attribute is used to define inline styles?",
    options: { a: "class", b: "font", c: "style", d: "styles" },
    answer: "c"
  },
  {
    question: "What does the 'alt' attribute in an &lt;img&gt; tag provide?",
    options: { a: "Alternative text for the image", b: "Image alignment", c: "Image title", d: "Image source" },
    answer: "a"
  },
  {
    question: "Which JavaScript keyword declares a block-scoped variable?",
    options: { a: "var", b: "let", c: "define", d: "set" },
    answer: "b"
  },
  {
    question: "Which event fires when a user clicks an element?",
    options: { a: "onhover", b: "onpress", c: "onclick", d: "onfocus" },
    answer: "c"
  },
  {
    question: "Which HTML tag is used for an unordered list?",
    options: { a: "&lt;ol&gt;", b: "&lt;list&gt;", c: "&lt;ul&gt;", d: "&lt;li&gt;" },
    answer: "c"
  },
  {
    question: "Which CSS property is used to make text bold?",
    options: { a: "font-style", b: "text-weight", c: "font-weight", d: "bold" },
    answer: "c"
  },
  {
    question: "Which HTML element represents the body of a document?",
    options: { a: "&lt;main&gt;", b: "&lt;body&gt;", c: "&lt;section&gt;", d: "&lt;content&gt;" },
    answer: "b"
  },
  {
    question: "Which JavaScript method removes the last element from an array?",
    options: { a: "shift()", b: "splice()", c: "pop()", d: "remove()" },
    answer: "c"
  },
  {
    question: "What is the default position value of an HTML element?",
    options: { a: "relative", b: "fixed", c: "absolute", d: "static" },
    answer: "d"
  },
  {
    question: "Which HTTP status code means 'Not Found'?",
    options: { a: "200", b: "301", c: "404", d: "500" },
    answer: "c"
  },
  {
    question: "Which CSS unit is relative to the font size of the root element?",
    options: { a: "em", b: "rem", c: "px", d: "%" },
    answer: "b"
  },
  {
    question: "Which HTML tag is used to define a paragraph?",
    options: { a: "&lt;para&gt;", b: "&lt;text&gt;", c: "&lt;p&gt;", d: "&lt;pg&gt;" },
    answer: "c"
  },
  {
    question: "Which JavaScript operator is used for strict equality?",
    options: { a: "==", b: "=", c: "!=", d: "===" },
    answer: "d"
  },
  {
    question: "What does the DOM stand for?",
    options: { a: "Document Object Model", b: "Data Object Model", c: "Document Oriented Model", d: "Dynamic Object Markup" },
    answer: "a"
  },
  {
    question: "Which HTML attribute makes an input field required?",
    options: { a: "mandatory", b: "required", c: "validate", d: "must-fill" },
    answer: "b"
  },
  {
    question: "Which CSS property changes the background color?",
    options: { a: "color", b: "bg-color", c: "background-color", d: "fill" },
    answer: "c"
  },
  {
    question: "Which JavaScript method adds an element to the end of an array?",
    options: { a: "push()", b: "append()", c: "add()", d: "insert()" },
    answer: "a"
  },
  {
    question: "Which HTML element is used for creating a form?",
    options: { a: "&lt;input&gt;", b: "&lt;form&gt;", c: "&lt;fieldset&gt;", d: "&lt;submit&gt;" },
    answer: "b"
  },
  {
    question: "Which CSS value makes an element invisible but still occupies space?",
    options: { a: "display: none", b: "opacity: 0", c: "visibility: hidden", d: "hidden: true" },
    answer: "c"
  },
  {
    question: "Which HTML5 element is used for navigation links?",
    options: { a: "&lt;menu&gt;", b: "&lt;nav&gt;", c: "&lt;header&gt;", d: "&lt;aside&gt;" },
    answer: "b"
  },
  {
    question: "Which JavaScript method converts a string to an integer?",
    options: { a: "toInt()", b: "parseInt()", c: "Integer()", d: "convertInt()" },
    answer: "b"
  },
  {
    question: "What does JSON stand for?",
    options: { a: "JavaScript Object Notation", b: "Java Structured Object Name", c: "JavaScript Online Network", d: "Java Source Object Node" },
    answer: "a"
  },
  {
    question: "Which CSS property specifies the transparency of an element?",
    options: { a: "visibility", b: "transparency", c: "display", d: "opacity" },
    answer: "d"
  },
  {
    question: "Which HTML element embeds a video?",
    options: { a: "&lt;media&gt;", b: "&lt;movie&gt;", c: "&lt;video&gt;", d: "&lt;embed&gt;" },
    answer: "c"
  },
  {
    question: "Which JavaScript method is used to fetch data from a server asynchronously?",
    options: { a: "get()", b: "load()", c: "fetch()", d: "request()" },
    answer: "c"
  },
  {
    question: "What is the purpose of the &lt;head&gt; element in HTML?",
    options: { a: "Contains visible page content", b: "Contains metadata and links", c: "Defines page footer", d: "Groups form elements" },
    answer: "b"
  },
  {
    question: "Which CSS layout model is best for creating complex grid-based designs?",
    options: { a: "Float layout", b: "Inline-block layout", c: "CSS Grid", d: "Table layout" },
    answer: "c"
  },
  {
    question: "Which HTML attribute is used to open a link in a new tab?",
    options: { a: "rel=\"noopener\"", b: "target=\"_blank\"", c: "open=\"new\"", d: "window=\"new\"" },
    answer: "b"
  },
  {
    question: "Which JavaScript method returns the number of elements in an array?",
    options: { a: "array.size()", b: "array.count()", c: "array.length", d: "array.total()" },
    answer: "c"
  },
  {
    question: "Which CSS flexbox property aligns items along the main axis?",
    options: { a: "align-items", b: "justify-content", c: "flex-wrap", d: "align-content" },
    answer: "b"
  },
  {
    question: "What is the correct HTML element for inserting a line break?",
    options: { a: "&lt;lb&gt;", b: "&lt;break&gt;", c: "&lt;newline&gt;", d: "&lt;br&gt;" },
    answer: "d"
  },
  {
    question: "Which JavaScript keyword is used to define a constant?",
    options: { a: "final", b: "static", c: "const", d: "fixed" },
    answer: "c"
  },
  {
    question: "Which HTTP method is used to retrieve data from a server?",
    options: { a: "POST", b: "PUT", c: "DELETE", d: "GET" },
    answer: "d"
  },
  {
    question: "Which CSS property sets the size of the font?",
    options: { a: "text-size", b: "font-size", c: "size", d: "font-style" },
    answer: "b"
  },
  {
    question: "Which HTML element is used to define emphasized (italicized) text?",
    options: { a: "&lt;b&gt;", b: "&lt;strong&gt;", c: "&lt;em&gt;", d: "&lt;italic&gt;" },
    answer: "c"
  },
  {
    question: "Which event is triggered when a web page has fully loaded?",
    options: { a: "onready", b: "onload", c: "onstart", d: "oncomplete" },
    answer: "b"
  }
];
