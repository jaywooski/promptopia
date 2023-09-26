import { Schema, model, models } from "mongoose";

const UserSchema = new Schema({
    email: {
        type: String,
        unique: [true, 'Email already exists!'],
        required: [true, 'Email is required!']
    },
    username: {
        type: String,
        required: [true, 'Username is required!'],
        match: [
            /^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/,
            "Username invalid, it should contain 8-20 alphanumeric letters and be unique!"
        ]
    },
    image: {
        type: String
    }
})

/* If we were using a regular express backend, we would use and export as the following: 

const User = model("User", UserSchema);
export default User;

*/


/* Instead, use this: */
const User = models.User || model("User", UserSchema);

// models by mongoose will check the library and see if a model exists under the User name.
//  If it does not then it will create one 

export default User;