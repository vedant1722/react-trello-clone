import { connect } from "react-redux";
import CardPresentation from './presentation'

import { updateCard } from "./actions";

const mapStateToProps = (state, { id }) => state.cards.all[id]

const mapDispatchToProps = (dispatch, { id }) => {
    return {
        handleChange: (event) => {
            const { name, value } = event.target
            const data = { [name]: value }
            dispatch( updateCard( id, data ))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CardPresentation)