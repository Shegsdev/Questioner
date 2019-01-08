class User {
    constructor(id, firstname, lastname, othername, email, phoneNumber, username, registered, isAdmin) {
        this.id = id;
        this.firstname = firstname;
        this.lastname = lastname;
        this.othername = othername;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.username = username;
        this. registered = new Date;
        this.isAdmin = false;
    }
}
