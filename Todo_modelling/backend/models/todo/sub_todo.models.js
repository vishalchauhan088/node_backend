import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        // username: String,
        // email: String,
        // isActive: Boolean
        username: {
            type: String,
            required: true,
            unique:true,
            lowercase: true
        },
        email:{
            type: String,
            required: true,
            unique: true,
            lowercase: true
        },

        password:{
            type: String,
            // required: true
            rquired: [true, "password is required"]
        }
    },
    {
        timestamps: true // addds createAt & updatedAt
    }
);

export const User = mongoose.model("User",userSchema);

// remember: User will change to users || lower & plural
// like: todo -> todos || not todoes