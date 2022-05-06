// Creating First Component
import React from 'react'
import ReactDom from 'react-dom'


function BookList(){
    return(
        <section>
            <Book />
        </section>
    )
}

const Book = ()=> {
    return (
    <article>
        <Image></Image>
        <Title />
        <Author />
    </article>
    )
}

const Image = () => <img src="https://images-na.ssl-images-amazon.com/images/I/51PH05QauDL._SX326_BO1,204,203,200_.jpg" alt="" />

const Title = () => <h2>The Song Of Achilles</h2>
const Author = () => <h4>Madeline Miller</h4>

ReactDom.render(<BookList />, document.getElementById('root'))