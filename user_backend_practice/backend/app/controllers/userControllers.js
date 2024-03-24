import User from "../models/userModels.js"

const getUser = async (req,res)=>{

    try{
        const user = await User.findOne({uid: req.params.id});
        res.status(200).json({
            status:"success",
           
            result: user? user.length:0,
            data:{
                user
            }
        })
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
    
    
}

const getUsers = async (req,res)=>{
    try{
        
        const users = await User.find();
        res.status(200).json({
            status:"success",
            result:users.length,
            data:{
                users
            }
        })
    }
    catch(error){
        console.log("Error while fetching all users ");
        res.status(500).json({ message: error.message });
    }
    
}


const createUser = async (req,res)=>{

    try{
        const {uid, name, age} = req.body;
        const newUser = new User({uid,name,age});
        const savedUser = await newUser.save();
        res.status(200).json({
            status:"success",
            data:{
                savedUser
            }
        })
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
    
    
}


const deleteUser =async (req, res) => {
    try {
        const { id } = req.params;
        const deletedUser = await User.findOneAndDelete({uid: id });
        if (!deletedUser) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.json({ message: 'User deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


const updateUser = async (req, res) => {
    try {
        const { id } = req.params.id;
        const { name, age } = req.body;
        const updatedUser = await User.findOneAndUpdate({ id }, { name, age }, { new: true });
        if (!updatedUser) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.json(updatedUser);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export {getUser,getUsers,createUser,deleteUser,updateUser};




