Basics Learn CSS in 20 min
selectors
box model

CSS is not language just like HTML, just for presentation.
Syntax:

selector{
    property1: value;
}
example
h1{
    color: black;
}

class use .
Id use #
** try using class instead if id as id can be only 1

combining selector
example
h1.large-header{
    font-size: 200%
}
#big-blue.large.blue{
    color:blue;
}
div p {
    color: red;
}
(where you select all p tags that are under div. Don't have to be directly under div)
header.main-header h1.brown{
    color: brown;
}
(this is where you want all h1 tag that has class of brown that is under header tag with class of main-header)
.big, .large {
    font-size:200%
}
(to avoid duplication)
*{
    font-family: Arial;
}
(All)
**no space between . and #
**but for ancestor, use space


