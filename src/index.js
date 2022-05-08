import React from 'react'
import ReactDom from 'react-dom'

//importing css file
import './index.css'

//setting up variables
const firstBook={
    img: 'https://m.media-amazon.com/images/I/8144Vic9C5L._AC_UY436_FMwebp_QL65_.jpg',
    title: 'I Love You To The Moon And Back',
    author: 'Amelia Hepworth'
}


function BookList(){
    return(
        <section className="booklist">
            <Book 
                img = {firstBook.img}
                title = {firstBook.title}
                author = {firstBook.author}
            />
            <Book />
        </section>
    )
}

const Book = (props)=> {
    return (
    <article className="book">
        <img src={props.img} alt="" />
        <h2>{props.title}</h2>
        <h4>{props.author}</h4>
    </article>
    )
}

ReactDom.render(<BookList />, document.getElementById('root'))