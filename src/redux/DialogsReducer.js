const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";
const SEND_MESSAGE = "SEND-MESSAGE"

let initialState = {
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
		{ id: 3, name: "Edik" },
		{ id: 4, name: "Dasha" },
		{ id: 5, name: "Valera" },
		{ id: 6, name: "Viktor" }
	],
	newMessageBody: ""
};

const dialogsReducer = (state = initialState, action) => {
	switch(action.type) {
		case UPDATE_NEW_MESSAGE_BODY:
			return {
				...state,
				newMessageBody: action.body
			};
		case SEND_MESSAGE:
			let body = state.newMessageBody;
			return {
				...state,
				newMessageBody: "",
				messages: [...state.messages, { id: 6, message: body }]
			};
		default:
			return state;
	}
}

export const sendMessageActionCreator = () => ({ type: SEND_MESSAGE });

export const updateNewMessageBodyActionCreator = (body) => ({ type: UPDATE_NEW_MESSAGE_BODY, body: body });

export default dialogsReducer;