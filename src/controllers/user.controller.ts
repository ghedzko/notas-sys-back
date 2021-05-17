import { Handler } from "express";
const User = require("../models/User");
const Role =require("../models/Role");

export const createUser: Handler = async(req, res) =>{
  try {
    const { username, email, password, roles } = req.body;

    const rolesFound = await Role.find({ name: { $in: roles } });

    // creating a new User
    const user = new User({
      username,
      email,
      password,
      roles: rolesFound.map((role) => role._id),
    });

    // encrypting password
    user.password = await User.encryptPassword(user.password);

    // saving the new user
    const savedUser = await user.save();

    return res.status(200).json({
      _id: savedUser._id,
      username: savedUser.username,
      email: savedUser.email,
      roles: savedUser.roles,
    });
  } catch (error) {
    console.error(error);
  }
};
export const getUserById: Handler = async(req,res)=>{
  const{userId} = req.params;
  const user = await User.findById(userId);
  res.status(200).json(user);
};

export const getUsers: Handler = async(req,res) => {
  try{
    const users = await User.find({});
    return res.json(users)
  }
  catch(error){
    console.log(error)
  }
};
export const updateUserById: Handler = async(req,res)=>{
  const updatedUser = await User.findByIdAndUpdate(
    req.params.userId,
    req.body,
    {
      new: true,
    }
  );
  res.status(204).json(updatedUser);
};
export const deleteUserById: Handler = async(req,res)=>{
  const { userId} = req.params;
  const deletedUser = await User.findByIdAndDelete(userId);
  res.status(204).json(deletedUser);
};
module.exports = {
  createUser:createUser,
  getUserById:getUserById,
  getUsers:getUsers,
  updateUserById:updateUserById,
  deleteUserById:deleteUserById
}