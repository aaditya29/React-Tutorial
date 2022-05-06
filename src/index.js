// Creating First Component
import React from 'react'
import ReactDom from 'react-dom'


function BookList(){//by capitalising the first letter now react knows it is an special component.
    return(
        <div>
            <Person />
            <Message />
        </div>
    );
}// Add this functionality in index.html

const Person = () => <h2>John Doe</h2>//Returning implicitly
const Message = () => {
    return <p>This is John Doe</p>//Returning explicitly
}

ReactDom.render(<Greeting />, document.getElementById('root'))// This function sees two things, what we are going to render and where we want it to be rendered.