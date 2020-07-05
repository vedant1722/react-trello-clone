import React from 'react'
import './style.css'

const CardPresentation = ({ body, handleChange }) => {
    return (
        <div className="card">
            <textarea
                placeholder="What is this about?"
                name="body"
                onChange={handleChange}
                value={body}
            />
        </div>
    )
}

export default CardPresentation
