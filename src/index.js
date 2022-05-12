import React from 'react'
import ReactDom from 'react-dom'

//importing css file
import './index.css'

const books[
    {
    img: 'https://m.media-amazon.com/images/I/8144Vic9C5L._AC_UY436_FMwebp_QL65_.jpg',
    title: 'I Love You To The Moon And Back',
    author: 'Amelia Hepworth'
    },

    {
    img: 'https://m.media-amazon.com/images/I/81GRU7xd2iL._AC_UY436_QL65_.jpg',
    title: 'Mural',
    author: 'Mahmoud Darwish'

    },
];

function BookList(){
    return(
        <section className="booklist">
            {books}
        </section>
    )
}

const Book = (props) => {
    const {img, title, author} = props;
    return (
    <article className="book">
        <img src={img} alt="" />
        <h2>{title}</h2>
        <h4>{author}</h4>
    </article>
    )
}

ReactDom.render(<BookList />, document.getElementById('root'))