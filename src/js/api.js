export function login(username, password) {
    if(username === "s" && password === "1")
        return null;
    if(username !== "s")
        return "username does not exist";
    return "username and password does not match";
}

export function signup(username, email, password, password_confirm) {
    if(username === "s")
        return null;
    return "error"
}