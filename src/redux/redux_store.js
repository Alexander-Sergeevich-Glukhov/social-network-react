import friendsReducer from "./friends_reducer";

const { combineReducers, createStore } = require("redux");
const { default: messagesReducer } = require("./messages_reducer");
const { default: profileReducer } = require("./profile_reducer");


let reducers = combineReducers({
    profilePage: profileReducer,
    messagesPage: messagesReducer,
    friendsPage: friendsReducer
});


let store = createStore(reducers);

window.store = store;

export default store;