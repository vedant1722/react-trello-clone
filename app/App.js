import { connect } from "react-redux";
import React from 'react'

import Header from './components/Header'
import Board from './domains/Board'
import { getBoards } from './domains/Board/selectors'

import './assets/css/style.css'

class App extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <Header />
                {this.props.boards.map((board) => 
                    <Board key={board.id} id={board.id}/>
                )}
            </div>
        )
    }
}

const mapStateToProps = (state, {id}) => {
    return {
        boards: getBoards(state)
    }
}

export default connect(mapStateToProps, {})(App)