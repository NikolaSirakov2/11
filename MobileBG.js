class User {
    constructor (name, password) {
        this.name = name;
        this.password = password;
    }
}

let gosho = new User("Gosho", "007")

class UserManager {
    constructor (User){
        this.user = User.name;
    }
}

console.log(gosho);