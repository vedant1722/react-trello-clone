import { ADD_CARD, UPDATE_CARD, DELETE_CARD, DELETE_CARDS_BY_LISTID } from "./actionTypes";
import { v4 as uuidv4 } from 'uuid';

export const addCard = listId => {
    return {
        type: ADD_CARD,
        payload: {
            id: uuidv4(),
            body: '',
            listId
        }
    }
};

export const updateCard = (id, data) => {
    return {
        type: UPDATE_CARD,
        payload: { id, data }
    }
}

export const deleteCard = filter => ({
    type: DELETE_CARD,
    payload: { filter }
});

export const deleteCardsByListId = listId => {
    return {
        type: DELETE_CARDS_BY_LISTID,
        payload: { listId }
    }
}
