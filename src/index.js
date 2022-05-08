import React from 'react'
import ReactDom from 'react-dom'

//importing css file
import './index.css'

//setting up variables
const author = 'Amelia Hepworth'
const title = 'I Love You To The Moon And Back'
const img = 'https://m.media-amazon.com/images/I/8144Vic9C5L._AC_UY436_FMwebp_QL65_.jpg'


function BookList(){
    return(
        <section className="booklist">
            <Book />
        </section>
    )
}

const Book = ()=> {
    return (
    <article className="book">
        <img src={img} alt="" />
        <h2>{title}</h2>
        <h4>{author.toUpperCase()}</h4>
    </article>
    )
}

ReactDom.render(<BookList />, document.getElementById('root'))