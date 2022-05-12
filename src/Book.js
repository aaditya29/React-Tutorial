import React from 'react'

const Book = ({img, title, author}) => {
    //const {img, title, author} = props.book;

    // using events onClick and onMouseOver
    const clickHandler = (e) => {
        console.log(e)
        console.log(e.target)
        alert('Hello World!')
    }

    const complexExample = (author) => {
        console.log(author)
    }
    return (
    <article className="book"
        onMouseOver = {() => {
            console.log(title)
        }}
    >
        <img src={img} alt="" />
        <h2 onClick={() => console.log(title)} >{title}</h2>
        <h4>{author}</h4>
        <button type="button" onClick={clickHandler}>Event Example</button>
        <button type="button" onClick={() => complexExample(author)}>More Complex Example</button>
    </article>
    )
}

export default Book