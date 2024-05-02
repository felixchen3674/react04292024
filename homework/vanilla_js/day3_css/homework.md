## Homework Day 3 CSS

1. what is box model<br>
    content / padding / border / margin
    content-box vs border-box

    -Answer:
    content: where the actual content of the box will be. if there is text, the content will contain the text
    padding: a space between the content and border.
    border: end of the box
    margin: a space provided to give space between the box and the outer elements.

    content-box: This is where the element only has height and width as a dimension. no border, no padding.
    border-box: this is a box that has not only heigh and width, but also border, padding.

2. difference between flex and grid<br>
    one dimensional / multi-dimensional

    -Answer:
    Flexbox: it is one dimensional
    Grid: it is two dimensional


3. how to do responsive web design<br>
    media query
    use of flex & grid

    -Answer:
    you could use media queries for websites to be used in mobile devices and computers for example. You could set the size of the screen and when it is on that specific size, it could change the layout or color or fonts (anything) to fit the device size (to be better suit for that device or creator's intention)

    flex would be best used when you need to align simple elements 
    Grid would be best used when you have complex design.
    
    **from other articles, I've read that Flex is used when you need a "content-first" design and Grid is used when you need a "layout-first" design


4. What is BEM? (explain each part)<br>
    block / element / modifier

    -Answer:
    BEM is Block Element Modifier where it uses double underscores (__)or double dashes(--). 

    Block: standalone entity that is meaningful on its own.
    - block could be a whole block of element where it has picture and description of a country for example. 

    example: class="card"

    Element: A part of a block that has no standalone meaning and is semantically tied to its block
    -element could be a picture, title, or description inside the block (it will use double underscore __)

    example: class="card__picture"

    Modifier: A flag on a block or element. Use them to change appearance or behavior.
    -modifier could be a button in a block where the color might be different from the other elements inside the block.
    
    example: class="card__button" and class="card__button card__button--active" (there is 2 different class because button on its own could be a element and the active portion could also be a element and a modifier)



