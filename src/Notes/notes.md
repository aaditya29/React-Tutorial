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

<>
