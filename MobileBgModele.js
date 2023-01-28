class User {
    constructor(username,password,email){
        this.username = username;
        this.password = password;
        this.email = email;
    }
}

class UserManager {
    users = [];
    logedUser = null;

    addUser (newUser){
        let filter = this.users.filter(i => i.name === newUser.name);

        if(filter.length){
            console.log("This username is already taken!");
        } else {
            this.users.push(newUser);
        }
    }

    deleteUser (user){
        let filter = this.users.filter(i => i.name !== user.name);

        this.users = filter;
    }

    loginUser (user)
}