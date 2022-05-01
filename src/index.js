// Creating First Component
import React from 'react'
import ReactDom from 'react-dom'


function Greeting(){//by capitalising the first letter now react knows it is an special component.
    return(
        <div>
            <h1>Hello World</h1>
        </div>
    );
}// Add this functionality in index.html

ReactDom.render(<Greeting />, document.getElementById('root'))// This function sees two things, what we are going to render and where we want it to be rendered.