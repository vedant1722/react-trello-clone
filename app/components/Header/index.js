import { connect } from "react-redux"
import React from 'react'

import { addBoard } from '../../domains/Board/actions'

import './style.css'

class Header extends React.Component{
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <header className="header">
                <h1>Trello Clone</h1>
                <button onClick={this.props.handleAddBoardClick} className="add-board">+ Add board</button>
            </header>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleAddBoardClick: () => dispatch(addBoard())
    }
}

export default connect(null, mapDispatchToProps)(Header)