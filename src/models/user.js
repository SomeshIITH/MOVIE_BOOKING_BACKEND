import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

import {USER_ROLE,USER_STATUS} from './../utils/constants.js';
import {SALT} from './../config/server-config.js';
const UserSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    email : {
        type :  String,
        required : [true, 'Email address is required.'],
        unique : true,
        match : [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,'Please fill a valid email address.'],
    },
    password : {
        type : String,
        required : [true,'Password is required'],
        minLength : 6
    },
    userRole : {
        type :String,
        enum :  {
            values : [USER_ROLE.customer,USER_ROLE.admin,USER_ROLE.client],
            message : "User role must be either customer/admin/client"
        },
        required : true,
        default : USER_ROLE.customer
    },
    userStatus : {
        type : String,
        enum : {
            values :[USER_STATUS.approved,USER_STATUS.pending,USER_STATUS.rejected],
            message : "User status must be either approved/pending/rejected"
        },
        default : USER_STATUS.approved,
        required : true
    }
},{timestamps: true});

UserSchema.pre('save',function(){
    const user = this;
    const encryptedPassword = bcrypt.hashSync(user.password,SALT);
    user.password = encryptedPassword;
})  

UserSchema.methods.comparePassword = function(normalPassword){
    return bcrypt.compareSync(normalPassword,this.password);
}

const User = mongoose.model('User',UserSchema);

export default User;