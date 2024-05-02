# Loom Recording Link:

Link:https://www.loom.com/share/abf104e57e204cee89d1621feb47d3c9

# Homework: Answer Questions

### what is box model

keywords:
content / padding / border / margin
content-box vs borderbox
<br>
Answer: It is a fundamental concept that defines the layout and rendering elements on the web page.It consists of four parts,content,padding,border and margin.
Content: the content of the element, where text and images usually appear
Padding: the transparent space surrounding the content
Border: the border surrounding the padding and content
Margin: the transparent space outside the border, separating an element from other HTML elements
And there are two kinds of box-sizing model which are content-box and border-box model. contentbox exclude the size of padding and border to reflect the size of content, but border-box will include the size of padding and border as content, those two size model will affect the calculation of the content size and height.

### difference between flex and grid

keywords: one dimensional / multi-dimensional
<br>
Answer:
Flexbox is a flexible box layout model that allows you to design a flexible and efficient layout for the element in the container.It is content-first approach and 1-D layout.Grid is a 2-D layout model in CSS that allows you to design a complex grid-based layout with rows and columns.It is layout first approach that defines the layout first then the content is placed in the specific position.

### how to do responsive web design

keywords: media query, use of flex & grid
<br>
Answer:
Responsive Web Design is an approach to design and build the website to ensure optimal user experience across different devices and screen sizes. If the device with small screen , the layout will display as a column so that the user will be able to view the whole content.To achieve this, we can use viewport from meta tag , media queries or flex& grid model to design the webpage.

### What is BEM? (explain each part)

keywords: block / element / modifier
<br>
Answer:
BEM stands for Block, Element, Modifier. It's a methodology and naming convention for writing clean, modular, and maintainable CSS and HTML code.
Block: A standalone component that is a self-contained unit of functionality or design. Blocks are named semantically to describe their purpose.
Element: Parts of a block that have no standalone meaning and are semantically tied to the block. They are always attached to a block and are prefixed with the block's name and double underscores (\_\_).
Modifier: Flags or states that modify the appearance or behavior of blocks or elements. They are prefixed with the block or element's name and double hyphens (--)
