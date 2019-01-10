import UserModel from '../models/User';

const User = {

  create(req, res) {
    if (!req.body.firstname && !req.body.lastname && !req.body.email) {
        return res.status(400).send({
            status: 400,
            error: 'All fields are required',
        });
    }
    const user = UserModel.create(req.body);
    return res.status(200).send({
        status: 201,
        data: [{
            id: user.id,
            firstname: user.firstname,
            lastname: user.lastname,
            othername: user.othername,
            email: user.email,
            phonenumber: user.phonenumber,
            isAdmin: user.isAdmin
        }],
    });
  },

  getAll(req, res) {
    const users = UserModel.getAllUsers();
    return res.status(200).send({
        status: 200,
        data: users,
    });
  },

  getOne(req, res) {
    const user = UserModel.getUser(parseInt(req.params.id, 10));
    if (!user) {
        return res.status(404).send({
            status: 404,
            error: 'user was not found',
        });
    }
    return res.status(200).send({
        status: 200,
        data: [{
            id : user.id,
            firstname: user.firstname,
            lastname: user.lastname,
            othername: user.othername,
            email: user.email,
            phonenumber: user.phonenumber,
            isAdmin: user.isAdmin
        }],
    });
  },

}

export default User;
