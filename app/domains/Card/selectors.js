export const getCardsState = store => store.cards;

export const getCardIds = store =>
    getCardsState(store) ? Object.keys(getCardsState(store).all) : [];

export const getCardById = (store, id) =>
    getCardsState(store) ? { ...getCardsState(store).all[id], id } : {};

export const getCards = store =>
    getCardIds(store).map(id => getCardById(store, id));

export const getCardsBylistId = (store, listId) => {
    const allCards = getCards(store);
    return allCards.filter(card => card.listId == listId)
};

export const getNewCardId = store => {
    return Math.max(...getCardIds(store)) + 1
}
