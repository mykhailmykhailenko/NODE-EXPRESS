const User = require('../models/User');


module.exports.createUser = async (req, res, next) => {
        try {
                const {body} = req;
                const createdUser = await new User(body);
                const result = await createdUser.save();
                 res.status(201).send(result);
        } catch(error) {
                next(error);
        }

}

module.exports.getAllUsers = async (req, res, next) => {
        try {
                const users = await User.findAll();
                res.status(200).send(users);
        }catch(error) {
                next(error)
        }
}

module.exports.getOneUser = async (req, res, next) => {
        try {
                const {params: {userId}} = req;
                const foundedUser = await User.findOne(Number(userId));
                res.send(foundedUser);
        } catch (error) {
                next(error)
        }

}

module.exports.updateUser = async (req, res, next) => {
        try {
                const {params: {userId}, body} = req;
                const foundedUser = await User.findOne(Number(userId));
                const updated = await foundedUser.update(body);
                res.status(200).send(updated);
        } catch(error) {
                next(error);
        }
}

module.exports.deleteUser = async (req, res, next) => {
        try {
                const {params: {userId}} = req;
                const foundedUser = await User.findOne(Number(userId));
               const result = await foundedUser.delete();
                res.status(200).send('User deleted');
        } catch(error) {
              next(error);
        }

}