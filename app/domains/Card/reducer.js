import { ADD_CARD, UPDATE_CARD, DELETE_CARD, DELETE_CARDS_BY_LISTID } from "./actionTypes";
import { getCardsBylistId } from './selectors'

const initialState = {
    all: {
        1: {
            id: 1,
            listId: 1,
            body: 'UI : Modify display listing of ads (storyboards) to like the vimeo video section'
        },
        2: {
            id: 2,
            listId: 1,
            body: 'Creative Insights View'
        },
        3: {
            id: 3,
            listId: 2,
            body: 'Language Support'
        },
        4: {
            id: 4,
            listId: 2,
            body: ''
        }
    }
};

export default function (state = initialState, action) {
    switch (action.type) {
        case ADD_CARD: {
            const { id, listId, body } = action.payload;
            return {
                ...state,
                all: {
                    ...state.all,
                    [id]: { id, listId, body }
                }
            };
        }
        case UPDATE_CARD: {
            const { id, data } = action.payload;
            return {
                ...state,
                all: {
                    ...state.all,
                    [id]: {
                        ...state.all[id],
                        ...data
                    }
                }
            }
        }
        case DELETE_CARD: {
            const { id } = action.payload;
            return {
                ...state,
                all: {
                    ...state.all,
                    [id]: {
                        ...state.all[id],
                        completed: !state.all[id].completed
                    }
                }
            };
        }
        case DELETE_CARDS_BY_LISTID: {
            const { listId } = action.payload;
            const cardsToRemove = getCardsBylistId({ cards: state }, listId)
            const allCards = { ...state.all }

            for (let i = 0; i < cardsToRemove.length; i++) {
                const cardToRemove = cardsToRemove[i];
                delete allCards[cardsToRemove.id]
            }
            return {
                all: allCards
            }
        }
        default:
            return state;
    }
}
