boxModel :

margin[border[padding[content]]]
The height and width are for content and rest all are extra.See chrome devtools image.

display property :

block, inline , block-inline, none (visibility : hidden)
block -> you can specify width(next element will be below it)
inline -> you cannot specify width(next element will be next to it)
inline-block -> specify width and next to it.
none -> it is sort of removed. 

positioning : 

static : as default HTML 
relative : happens with respect to static(default), it does not affect other elements. 
           {
             position : relative; (not usefull until top,left, right or bottom is used)
             top : 20px;
           }

absolute : happens with respect to its parent, it affects other elements. 
           Ex:- Let say you move a red square to right, then below element takes its position.

fixed    : remains fixed with respect to body(??)



Dynamic Fontsize :  1em = 16px
Always try to use rem. 
