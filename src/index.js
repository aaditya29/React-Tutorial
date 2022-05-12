import React from 'react'
import ReactDom from 'react-dom'

//importing css file
import './index.css'

//importing js files
import {data} from './books'
import SpecificBook from './Book'

function BookList(){
    return(
        <section className="booklist">
            {data.map((book) =>{
                const {img, title, author} = book;
                return <SpecificBook key= {book.id} {...book}></SpecificBook>//using spread operator
            })}
        </section>
    )
}



ReactDom.render(<BookList />, document.getElementById('root'))