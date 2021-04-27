import { combineReducers, createStore } from "redux";
import AuthReducer from "./AuthReducer";
import dialogsReducer from "./DialogsReducer";
import profileReducer from "./ProfileReducer";
import sidebarReducer from "./SidebarReducer";
import UsersReducer from "./UsersReducer";

let reducers = combineReducers({
	profilePage: profileReducer,
	dialogsPage: dialogsReducer,
	sidebar: sidebarReducer,
	usersPage: UsersReducer,
	auth: AuthReducer
});

let store = createStore(reducers);

window.store = store;

export default store;