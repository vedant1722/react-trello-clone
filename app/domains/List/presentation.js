import React from 'react'

import Card from '../Card'
import './style.css'

function ListPresentation({ 
    id, listName, cards,
    handleAddCardClick, handleListNameChange, handleDeleteListClick
}) {
    return (
        <div className="list">
            <div className="input-wrapper">
                <input
                    placeholder="Enter list name"
                    type="text"
                    name="listName"
                    value={ listName }
                    onChange={ (e) => handleListNameChange( e, id ) }
                />
            </div>
            {cards.map((card) =>
                <Card key={card.id} id={card.id} />
            )}
            {
                cards.length == 0 && <div className="no-cards"> No cards added. </div>
            }
            <br></br>
            <div>
                <button className="add-card-btn" onClick={() => handleAddCardClick(id)} > Add Card </button>
                <button className="delete-list-btn" onClick={() => handleDeleteListClick(id)} > Delete List </button>
            </div>
        </div>
    )
}

export default ListPresentation
