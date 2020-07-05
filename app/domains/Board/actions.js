import { ADD_BOARD, UPDATE_BOARD, DELETE_BOARD } from "./actionTypes";
import { v4 as uuidv4 } from 'uuid';

export const addBoard = listId => {
    return {
        type: ADD_BOARD,
        payload: {
            id: uuidv4(),
            boardName: '',
        }
    }
};

export const updateBoard = (id, boardName) => {
    return {
        type: UPDATE_BOARD,
        payload: { id, boardName }
    }
}

export const deleteBoard = id => ({
    type: DELETE_BOARD,
    payload: { id }
});
