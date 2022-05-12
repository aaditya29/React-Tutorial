import React from 'react'
import ReactDom from 'react-dom'

//importing css file
import './index.css'

const books = [
    {
    id: 1,
    img: 'https://m.media-amazon.com/images/I/8144Vic9C5L._AC_UY436_FMwebp_QL65_.jpg',
    title: 'I Love You To The Moon And Back',
    author: 'Amelia Hepworth'
    },

    {
    id: 2,
    img: 'https://m.media-amazon.com/images/I/81GRU7xd2iL._AC_UY436_QL65_.jpg',
    title: 'Mural',
    author: 'Mahmoud Darwish'

    },

    {
    id: 3,
    img: 'https://m.media-amazon.com/images/I/71NxaDZFDSL._AC_UY436_QL65_.jpg',
    title: 'Letters To Milena',
    author: 'Franz Kafka'

    },
];

function BookList(){
    return(
        <section className="booklist">
            {books.map((book) =>{
                const {img, title, author} = book;
                return <Book key= {book.id} {...book}></Book>//using spread operator
            })}
        </section>
    )
}

const Book = ({img, title, author}) => {
    //const {img, title, author} = props.book;

    // using events onClick and onMouseOver
    const clickHandler = () => {
        alert('Hello World!')
    }

    const complexExample = (author) => {
        console.log(author)
    }
    return (
    <article className="book">
        <img src={img} alt="" />
        <h2 onClick={() => console.log(title)} >{title}</h2>
        <h4>{author}</h4>
        <button type="button" onClick={clickHandler}>Event Example</button>
        <button type="button" onClick={() => complexExample(author)}>More Complex Example</button>
    </article>
    )
}

ReactDom.render(<BookList />, document.getElementById('root'))