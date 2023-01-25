class User {
    constructor (name, password) {
        this.name = name;
        this.password = password;
    }
}

let gosho = new User("Gosho", "007")

class UserManager {

    allUsers = [];
    loggedUsers = [];
    constructor (User){
        this.user = User.name;
    }
}

