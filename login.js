function login(user, pass) {
    return user === "admin" && pass === "12345";
}

if (typeof module !== "undefined") {
    module.exports = login;
}
