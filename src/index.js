import React from 'react'
import ReactDom from 'react-dom'

//importing css file
import './index.css'

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
        <img src="https://m.media-amazon.com/images/I/8144Vic9C5L._AC_UY436_FMwebp_QL65_.jpg" alt="" />
        <h2>I Love You to the Moon and Back`</h2>
        <h4>Amelia Hepworth</h4>
    </article>
    )
}

ReactDom.render(<BookList />, document.getElementById('root'))