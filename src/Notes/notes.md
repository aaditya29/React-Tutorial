# React Tutorial Notes

## First Component

```
// Creating First Component
import React from 'react'
import ReactDom from 'react-dom'

function Greeting(){//by capitalising the first letter now react knows it is an special component.
    return <h4>This is Aditya and i am here making my first component</h4>
}// Add this functionality in index.html

ReactDom.render(<Greeting />, document.getElementById('root'))// This function sees two things, what we are going to render and where we want it to be rendered.
```
