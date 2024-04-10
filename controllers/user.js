const User = require("../models/user")

async function handleGetAllUsers(req, res){
    const allDbUsers = await User.find({});
    return res.status(200).json(allDbUsers);
}

async function handleGetUserById(req, res){
    const id = req.params.id;
    // const user = users.find(user => user.id === id);
    const user = await User.findById(id);
    if(!user) return res.status(404).json({error: "User not found!!!"});
    return res.json(user);
}

async function handleUpdateUserById(req, res){
    const updateUser = req.body;
    const user = await User.findByIdAndUpdate(req.params.id, {lastName: updateUser.last_name});
    // const popUser = users.pop(id);
    // users.push({...popUser, ...updateUser })
    // fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err, data) => {
    //     return res.json({status: "success", id: id});
    // });
    return res.status(200).json({status: "success"});
}

async function handledeleteUserById(req, res){
    // const popUser = users.pop(id)
    // fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err, data) => {
    //     return res.json({status: "success", id: popUser.id});
    // });
    const user = await User.findByIdAndDelete(req.params.id);
    return res.status(404).json({status: "success"});
}

async function handleCreateNewUser(req, res){
    const body = req.body;
    // users.push({...body, id: users.length + 1});
    // fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err, data) => {
    //     return res.status(201).json({status: "success", id: users.length});
    // });
    // console.log(body);

    if(!body||
        !body.first_name||
        !body.last_name||
        !body.email||
        !body.job_title||
        !body.gender){
            return res.status(400).json({msg: "All fields are req...."});
        }

        
    const result = await User.create({
        firstName: body.first_name,
        lastName: body.last_name,
        email: body.email,
        jobTitle: body.job_title,
        gender: body.gender
    })
    // console.log("result : " + result)
    return res.status(201).json({msg: "success", id: result._id});
}

module.exports = {
    handleGetAllUsers,
    handleGetUserById,
    handleUpdateUserById,
    handledeleteUserById,
    handleCreateNewUser
}