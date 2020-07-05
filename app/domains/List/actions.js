import { ADD_LIST, UPDATE_LIST, DELETE_LIST, DELETE_LISTS_BY_BOARDID } from "./actionTypes";
import { v4 as uuidv4 } from 'uuid';

export const addList = (boardId) => {
    return {
        type: ADD_LIST,
        payload: {
            id: uuidv4(),
            listName: '',
            boardId
        }
    }
};

export const updateList = (id, listName) => {
    return {
        type: UPDATE_LIST,
        payload: { id, listName }
    }
}

export const deleteList = id => ({
    type: DELETE_LIST,
    payload: { id }
});

export const deleteListsByBoardId = boardId => {
    return {
        type: DELETE_LISTS_BY_BOARDID,
        payload: { boardId }
    }
}
