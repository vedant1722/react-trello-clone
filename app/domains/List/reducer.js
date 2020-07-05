import { ADD_LIST, UPDATE_LIST, DELETE_LIST, DELETE_LISTS_BY_BOARDID } from "./actionTypes";
import { getListsByBoardId } from './selectors'

const initialState = {
    all: {
        1: {
            id: 1,
            boardId: 1,
            listName: 'Backlog'
        },
        2: {
            id: 2,
            boardId: 1,
            listName: 'Prioritizes'
        }
    }
};

export default function (state = initialState, action) {
    switch (action.type) {
        case ADD_LIST: {
            const { id, listName, boardId } = action.payload;
            return {
                ...state,
                all: {
                    ...state.all,
                    [id]: {
                        id, listName, boardId
                    }
                }
            };
        }
        case UPDATE_LIST: {
            const { id, listName } = action.payload;
            return {
                ...state,
                all: {
                    ...state.all,
                    [id]: {
                        ...state.all[id],
                        listName
                    }
                }
            };
        }
        case DELETE_LIST: {
            const { id } = action.payload;
            let allLists =  { ...state.all };
            const { [id]: value , ...newObj} = allLists
            return { all: newObj }
        }
        case DELETE_LISTS_BY_BOARDID: {
            const { boardId } = action.payload;
            const listsToRemove = getListsByBoardId({ lists: state }, boardId)
            const allCards = { ...state.all }

            for (let i = 0; i < listsToRemove.length; i++) {
                const listToRemove = listsToRemove[i];
                delete allCards[listToRemove.id]
            }
            return {
                all: allCards
            }
        }
        default:
            return state;
    }
}
