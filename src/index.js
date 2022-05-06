import React from 'react'
import ReactDom from 'react-dom'

//importing css file
import './index.css'

function BookList(){
    return(
        <section className="booklist">
            <Book />
            <Book />
            <Book />
            <Book />
            <Book />
            <Book />
        </section>
    )
}

const Book = ()=> {
    return (
    <article className="book">
        <Image></Image>
        <Title />
        <Author />
    </article>
    )
}

const Image = () => <img src="https://m.media-amazon.com/images/I/8144Vic9C5L._AC_UY436_FMwebp_QL65_.jpg" alt="" />

const Title = () => <h2>I Love You to the Moon and Back`</h2>
const Author = () => <h4>Amelia Hepworth</h4>

ReactDom.render(<BookList />, document.getElementById('root'))