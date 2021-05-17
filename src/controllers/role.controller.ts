const Role =require("../models/Role");

async function createRole(req, res) {
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
async function getRoleById(req,res){
  const{roleId} = req.params;
  const role = await Role.findById(roleId);
  res.status(200).json(role);
};

async function getRoles(req, res) {
  try{
    const roles = await Role.find({});
    // console.log(roles);
    return res.status(200).json(roles);
  }
  catch(error){
    console.log(error)
  }
};
async function updateRoleById(req,res){
  const updatedRole = await Role.findByIdAndUpdate(
    req.params.roleId,
    req.body,
    {
      new: true,
    }
  );
  res.status(204).json(updatedRole);
};
async function deleteRoleById(req,res){
  const { roleId} = req.params;
  const deletedRole = await Role.findByIdAndDelete(roleId);
  res.status(204).json(deletedRole);
};
module.exports = {
  createRole:createRole,
  getRoleById:getRoleById,
  getRoles:getRoles,
  updateRoleById:updateRoleById,
  deleteRoleById:deleteRoleById
}