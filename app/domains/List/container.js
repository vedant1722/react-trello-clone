import { connect } from "react-redux";
import ListPresentation from './presentation'

import { addCard, deleteCardsByListId } from "../Card/actions";
import { updateList, deleteList } from "./actions";
import { getCardsBylistId } from '../Card/selectors'

const mapStateToProps = (state, {id}) => {
    let list = state.lists.all[id]
    return {
        ...list,
        cards: getCardsBylistId(state, list.id)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleAddCardClick: (listId) => {
            dispatch(addCard(listId))
        },
        handleListNameChange: (event, id) => {
            const listName = event.target.value
            dispatch(updateList(id, listName))
        },
        handleDeleteListClick: (id) => {
            let isSure = confirm("Deleting the list would also delete its cards. Are you aure you wan to delete it?");
            if (isSure) {
                dispatch(deleteList(id))
                dispatch(deleteCardsByListId(id))
            }
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListPresentation)
