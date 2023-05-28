import axios from "axios";

export function authenticate(auth_token) {
    localStorage.setItem("logged_in_user", auth_token);
}

export function isAuthenticated() {
    return localStorage.getItem("logged_in_user") !== null;
}

export async function retrieveUser() {
    if (!isAuthenticated()) {
        return null;
    }

    try {
        const response = await axios.get("/profile");
        return response.data;
    } catch (error) {
        console.error(error);

        if(error.response?.status === 401) {
            logout();
            return null;
        }


        throw new Error("Trouble fetching logged in user profile.")
    }
}

export function logout() {
    localStorage.removeItem("logged_in_user");
}
