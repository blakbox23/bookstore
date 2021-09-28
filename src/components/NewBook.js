import React from 'react'

function NewBook() {
    const handleSubmit = () => {
        console.log('form submitted')
    }
    return (
        <div className="new-book">
            <p>ADD NEW BOOK</p>
    <form onSubmit={handleSubmit} className="form-container">
      <input
        type="text"
        className="input-title"
        placeholder="Book title"
        name="title"
      />
      <input 
      type="text"
      className="input-category"
      placeholder="Category"
      name="category"
        
      />
      <button type="button" className="input-submit">Add book</button>
    </form>
        </div>
    )
}

export default NewBook
