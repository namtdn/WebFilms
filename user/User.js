class User {
    constructor(Id, userName, password) {
        this.userName = userName;
        this.password = password;
        this.Id = Id;
    }

    getPassword() {
        return this.password;
    }

    getUsername() {
        return this.userName;
    }

    getId() {
        return this.Id;
    }
}

module.exports = User;
