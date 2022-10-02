import React from 'react'

const Books = ({ books }) => {
    return (
        books.map((book, index) =>
            <ul>
                <li key={index}>
                    {book.title} - {book.year}
                </li>
            </ul>
        )
    )
}

export default Books