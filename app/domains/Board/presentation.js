import React from 'react'

import List from "../List"
import './style.css'

function BoardPresentation({ 
    id, boardName, lists,
    handleAddList, handleNameChange, handleDeleteBoard
}) {
    return (
        <div className="container board-wrapper">
            <div className="board-header">
                <h2>
                    <input
                        type="text"
                        placeholder="New board Name"
                        value={boardName}
                        onChange={(e) => handleNameChange(e, id)}
                    />
                </h2>
                <div className="board-actions">
                    <button className="add-list" onClick={() => handleAddList(id)}>Add List</button>
                    <button className="delete-board" onClick={() => handleDeleteBoard(id)}>Delete Board</button>
                </div>
            </div>
            <div className="list-wrapper">
                {lists.map((list) =>
                    <List key={list.id} id={list.id} />
                )}
            </div>
            <br/>
            <hr></hr>
        </div>
    )
}

export default BoardPresentation