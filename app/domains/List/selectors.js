export const getListsState = store => store.lists;

export const getListIds = store =>
    getListsState(store) ? Object.keys(getListsState(store).all) : [];

export const getListById = (store, id) =>
    getListsState(store) ? { ...getListsState(store).all[id], id } : {};

export const getLists = store =>
    getListIds(store).map(id => getListById(store, id));

export const getListsByBoardId = (store, boardId) => {
    const allLists = getLists(store)
    return allLists.filter(list => list.boardId == boardId)
}