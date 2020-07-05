import { connect } from "react-redux"
import BoardPresentation from './presentation'

import { addList, deleteListsByBoardId } from "../List/actions"
import { updateBoard, deleteBoard } from "../Board/actions"
import { getListsByBoardId } from '../List/selectors'

const mapStateToProps = (state, {id}) => {
    const board = state.boards.all[id]
    return {
        ...board,
        lists: getListsByBoardId(state, id)
    }
}

const mapDispatchToProps = (dispatch, { id }) => {
    return {
        handleNameChange: (event, id) => {
            const boardName = event.target.value
            dispatch(updateBoard(id, boardName))
        },
        handleDeleteBoard: (id) => {
            let isSure = confirm("Deleting the board would also delete its Lists. Are you aure you wan to delete it?");
            if (isSure) {
                dispatch(deleteBoard(id))
                dispatch(deleteListsByBoardId(id))
            }
        },
        handleAddList: () => dispatch(addList(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BoardPresentation)