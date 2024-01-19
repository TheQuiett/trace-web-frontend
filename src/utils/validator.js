const validators= {
    usernameValidator(username = "") {
        return username.length > 6;
    },
    passwordValidator(password = "") {
        return password.length > 8;
    },
}

export default validators;