import dialogsReducer from "./DialogsReducer";
import profileReducer from "./ProfileReducer";
import sidebarReducer from "./SidebarReducer";

let store = {
	_state: {
		profilePage: {
			posts: [
				{ id: 1, message: "Hi, how are you?", likes: 15 },
				{ id: 2, message: "It\'s is my first post", likes: 10 }
			],
			newPostText: "it-kamasutra.com"
		},
		dialogsPage: {
			messages: [
				{ id: 1, message: "Hi" },
				{ id: 2, message: "How are you?" },
				{ id: 3, message: "How is your IT-Kamasutra?" },
				{ id: 4, message: "It's okay" },
				{ id: 5, message: "That's good!" },
				{ id: 6, message: "Thank you!" }
			],
			dialogs: [
				{ id: 1, name: "Dimych" },
				{ id: 2, name: "Jeka" },
				{ id: 3, name: "Eva" },
				{ id: 4, name: "Dasha" },
				{ id: 5, name: "Valera" },
				{ id: 6, name: "Viktor" }
			],
			newMessageBody: ""
		},
		sidebar: {}
	},
	_callSubscriber() {
		console.log("State was changed")
	},

	getState() {
		return this._state;
	},
	subscribe(observer) {
		this._callSubscriber = observer;
	},
	
	dispatch(action) {

		this._state.profilePage = profileReducer(this._state.profilePage, action);
		this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
		this._state.sidebar = sidebarReducer(this._state.sidebar, action);

		this._callSubscriber(this._state);
	}
};

window.store = store;

export default store;