# React Tutorial Notes

## First Component

Creating first react component

```JavaScript
// Creating First Component
import React from 'react'
import ReactDom from 'react-dom'

function Greeting(){//by capitalising the first letter now react knows it is an special component.
    return <h4>This is Aditya and i am here making my first component</h4>
}// Add this functionality in index.html

ReactDom.render(<Greeting />, document.getElementById('root'))// This function sees two things, what we are going to render and where we want it to be rendered.
```

## First Component In Detail

```JavaScript
//stateless function component always returns JSX


// Creating First Component
import React from 'react'
import ReactDom from 'react-dom'


function Greeting(){//by capitalising the first letter now react knows it is an special component.
    return <h4>This is Aditya and i am here making my first component</h4>
}// Add this functionality in index.html

ReactDom.render(<Greeting />, document.getElementById('root'))// This function sees two things, what we are going to render and where we want it to be rendered.
```

If we remove the return statement from the aobve component it will give error.

#### Making Component Using Arrow Function

```JavaScript
// Creating First Component
import React from 'react'
import ReactDom from 'react-dom'

const Greeting = () =>{
    return React.createElement('h1', {}, 'hello world');
};

ReactDom.render(<Greeting />, document.getElementById('root'))// This function sees two things, what we are going to render and where we want it to be rendered.
```

<b>Function of React.createElement: </b>In React, you won't be using <i>document.createElement.</i><br>
However, we saw how it works because it shares some similarities with <i>React.createElement</i> but it's not the same thing.<br>
document.createElement returns a DOM element (for example a div or an h1). Whereas React.createElement returns an object that represents the DOM element.

```
React.createElement(type, options, children)
```

#### Syntax

To write a text inside the element, you have to provide the 3rd parameter for React.createElement which is called children (so it also accepts other Elements for later on).<br>

```JavaScript
React.createElement("h1", {}, "Hello World")
```

This returns an Object representing an h1 that contains Hello World.<br>
Notice how we're saying that we don't want to set a className or style (or other options) so we pass {} as the second parameter (you could also pass null).<br>

But downside of using React.createElement is that we have to make other components as children of the node.<br>

#### Example:

```JavaScript
import React from 'react'
import ReactDom from 'react-dom'

const Greeting = () =>{
    return React.createElement('h1', {},
        React.createElement('h1', {}, 'hello world'));
};

ReactDom.render(<Greeting />, document.getElementById('root'))
```

This code looks confusing and complicated. Hence we don't use the arrow functions to make the compoents.<br>
Instead we will use the method we used in the <b>First Component.</b>

```JavaScript
import React from 'react'
import ReactDom from 'react-dom'


function Greeting(){
    return(
        <div>
            <h1>Hello World</h1>
        </div>
    );
}

ReactDom.render(<Greeting />, document.getElementById('root'))
```

Above way to make the divisions looks a little different and least complicated than the arrow functions.<br>
