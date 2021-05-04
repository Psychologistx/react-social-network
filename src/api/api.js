import axios from 'axios';

const instance = axios.create({
	withCredentials: true,
	baseURL: "https://social-network.samuraijs.com/api/1.0/",
	headers: {
		"API-KEY" : "d66bbcf3-3cb5-4d96-84ee-a7dda7556872"
	}
});

export const UsersAPI = {
	getUsers(currentPage, pageSize) {
		return (
			instance.get(`users?page=${currentPage}&count=${pageSize}`)
			.then(response => response.data)
		)
	}
}
