class UserModel {
	constructor() {
	    this.users = [];
    }
    
	create(data){
        const date = new Date;
		const user = {
			id: this.users.length + 1,
			firstname: data.firstname,
			lastname: data.lastname,
			othername: data.othername,
			email: data.email,
			phonenumber: data.phonenumber,
			username: data.username,
			registered: date.getDate() + '-' + date.getMonth() + '-' + date.getFullYear(),
			isAdmin: data.isAdmin
        }
        
		this.users.push(user);
		return user;
    }
    
	getUser(id) {
        const user = this.users.find(user => user.id === parseInt(id, 10))
        return user;
	}
	getAllUsers() {
		return this.users;
	}
	
}

export default new UserModel;
