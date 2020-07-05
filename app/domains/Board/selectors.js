export const getBoardsState = store => store.boards;

export const getBoardIds = store =>
    getBoardsState(store) ? Object.keys(getBoardsState(store).all) : [];

export const getBoardById = (store, id) =>
    getBoardsState(store) ? { ...getBoardsState(store).all[id], id } : {};

export const getBoards = store =>
    getBoardIds(store).map(id => getBoardById(store, id));
