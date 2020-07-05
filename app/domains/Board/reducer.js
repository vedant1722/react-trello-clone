import { ADD_BOARD, UPDATE_BOARD, DELETE_BOARD } from "./actionTypes";

const initialState = {
    all: {
        1: {
            id: 1,
            boardName: 'Kubric Board'
        },
        2: {
            id: 2,
            boardName: 'Template Board'
        }
    }
};

export default function (state = initialState, action) {
    switch (action.type) {
        case ADD_BOARD: {
            const { id, boardName } = action.payload;
            return {
                ...state,
                all: {
                    ...state.all,
                    [id]: { id, boardName }
                }
            };
        }
        case UPDATE_BOARD: {
            const { id, boardName } = action.payload;
            return {
                ...state,
                all: {
                    ...state.all,
                    [id]: {
                        ...state.all[id],
                        id, boardName
                    }
                }
            };
        }
        case DELETE_BOARD: {
            const { id } = action.payload;
            let allBoards =  { ...state.all };
            const { [id]: value , ...newObj} = allBoards
            return { all: newObj }
        }
        default:
            return state;
    }
}
