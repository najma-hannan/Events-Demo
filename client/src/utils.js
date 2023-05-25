export function authenticate(user) {
    localStorage.setItem("logged_in_user", JSON.stringify(user));
}

export function isAuthenticated() {
    const user = retrieveUser();

    return user !== null || user !== undefined
}

export function retrieveUser() {
    return JSON.parse(localStorage.getItem("logged_in_user"))
}

export function logout() {
    localStorage.removeItem("logged_in_user");
}
