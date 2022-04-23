import {createStore, applyMiddleware, compose} from "redux";
import thunk from "redux-thunk";
import rootReducers from "../Reducers/rootReducer"
const middleWare = [thunk];



const store = createStore(
    rootReducers,
    undefined,
    compose(applyMiddleware(...middleWare)),
);
export default store;

