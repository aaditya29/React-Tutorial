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

## JSX Rules

> #### Following are the few React JSX rules which must be followed while using React
>
> - Return Single Element
> - div/section/article or React Fragment.
> - Use camelCase for HTML Attribute.
> - className instead of Class.
> - Close every element.
> - Formatting.
> - Tags are elements.

1. Return Single Element:<br>
   In react we can return a whole bunch of code or element but the HTML code must be wrapped in ONE top level element.<br>
   So if you like to write two “div”, you must put them inside a parent element, like a “div” element.

   ```JavaScript
    function Component(){
        return(
            <div>
                <h1>Hello World</h1>
                    <ul>
                        <li>
                            <a href= "#">Hello World</a>
                        </li>
                    </ul>
            </div>
        );
    }
   ```

2. div/section/article or React Fragment:<br>
   A pair of empty <> and </> tags get’s turned into a React. Fragment element, i.e. an element that doesn’t map to DOM nodes. Fragments are useful for returning multiple cells or list items from a component.

3. Use camelCase for HTML attributes:<br>
   In JavaScript we used to write inline attributes or event Listeners e.g. “onclick()”. But in case of React we can’t write attributes like this. “onclick” attribute of JavaScript must be capitalized e.g. camelCase.

4. className Instead of Class:<br>
   In HTML we use class attribute for specific element. As we are using React, a JavaScript framework so we can’t use class keyword because in ES6 it is a reserve keyword to define a class. If we use class for HTML attribute it will gives an error, instead we should use className.

5. Close Every Element:<br>
   In HTML almost all the tags have starting and closing tags, rather than a few e.g. <img>, <input>, <br>.
   These few tags have no closing tags. We use it simply as the way they are defined in the example above. In React JSX every tag must be close even those which have no closing tags e.g.

   > <img src = “ “ alt = “ “ />

6. Formatting:<br>
   While returning JSX we should have parenthesis so the HTML code must be wrapped inside.<br>
   If we don’t use parenthesis compiler will gives us an error.

7. Tags are elements:<br>
   JSX Tags map to calls to `React.createElement().`<br>
   Use lowercase tags `<lowercase/>` when you need a DOM elements, and Capitalized tags `<Capitalized/>` for component elements.

## React Nested Components

In React, we can nest components inside within one another. This helps in creating more complex **_User Interfaces_**. The components that are nested inside parent components are called child components. Import and Export keywords facilitate nesting of the components.<br>

<b>We are returning following code first implicitly then explicitly through nested components</b>

```JavaScript
import React from 'react'
import ReactDom from 'react-dom'


function Greeting(){
    return(
        <div>
            <h2>Hello World</h2>
            <p> This is my message</p>
        </div>
    );
}

ReactDom.render(<Greeting />, document.getElementById('root'))
```

#### Using Nested Components

```JavaScript
import React from 'react'
import ReactDom from 'react-dom'


function Greeting(){
    return(
        <div>
            <Person />
            <Message />
        </div>
    );
}

const Person = () => <h2>John Doe</h2>//Returning implicitly
const Message = () => {
    return <p>This is John Doe</p>//Returning explicitly
}

ReactDom.render(<Greeting />, document.getElementById('root'))
```

## First Project: Mini Book

```JavaScript
import React from 'react'
import ReactDom from 'react-dom'


function BookList(){
    return(
        <section>
            <Book />//To render book component
        </section>
    )
}

const Book = ()=> {
    return (
    <article>
        <Image></Image>//To render image component
        <Title />// To render title component
        <Author />// To render author component
    </article>
    )
}

const Image = () => <img src="https://images-na.ssl-images-amazon.com/images/I/51PH05QauDL._SX326_BO1,204,203,200_.jpg" alt="" />//returns image

const Title = () => <h2>The Song Of Achilles</h2>//returns bookname
const Author = () => <h4>Madeline Miller</h4>// returns author name

ReactDom.render(<BookList />, document.getElementById('root'))
```

## Props in React
