import { combineReducers } from "redux";
import cards from "../domains/Card/reducer";
import lists from "../domains/List/reducer";
import boards from "../domains/Board/reducer";

export default combineReducers({ cards, lists, boards });
