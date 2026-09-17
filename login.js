function login(user, pass) {
    return user === "admin" && pass === "123";
}

if (typeof module !== "undefined") {
    module.exports = login;
}
