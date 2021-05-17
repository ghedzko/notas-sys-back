import { Handler } from "express";
const Role = require("../models/Role");

export const createRole: Handler = async(req, res) =>{
  try {
    const { name } = req.body;

    // creating a new Role
    const role = new Role({
      name,
      });

    // saving the new user
    const savedRole = await role.save();

    return res.status(200).json(savedRole);
  } catch (error) {
    console.error(error);
  }
};
export const getRoleById: Handler = async(req,res) =>{
  const{roleId} = req.params;
  const role = await Role.findById(roleId);
  res.status(200).json(role);
};

export const getRoles: Handler = async(req, res) =>{
  try{
    const roles = await Role.find({});
    // console.log(roles);
    return res.status(200).json(roles);
  }
  catch(error){
    console.log(error)
  }
};
export const updateRoleById: Handler = async(req,res) =>{
  const updatedRole = await Role.findByIdAndUpdate(
    req.params.roleId,
    req.body,
    {
      new: true,
    }
  );
  res.status(204).json(updatedRole);
};
export const deleteRoleById: Handler = async(req,res) =>{
  const { roleId} = req.params;
  const deletedRole = await Role.findByIdAndDelete(roleId);
  res.status(204).json(deletedRole);
};
// module.exports = {
//   createRole:createRole,
//   getRoleById:getRoleById,
//   getRoles:getRoles,
//   updateRoleById:updateRoleById,
//   deleteRoleById:deleteRoleById
// }