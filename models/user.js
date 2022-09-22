const { Schema, mdoel, Types } = require('mongoose');

const userSchema = new Schema(
    {
        username: {
            type: Sting,
            unique: true,
            required: true,
            trim: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            match: [
                /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                "Please fill a valid email address",
              ],
        },
        thoughts: [
            {
                type: Schema.Types.ObjectId,
                ref: "Thought",
            },
        ],
        friends: [
            {
                type: Schema.Types.ObjectId,
                ref: "User",
            },
        ],
    },
    {
        toJSon: {
            virtuals: ture,
        },
        id: false,
    }
);

userSchema.virtual("friendCount").get(function () {
    return this.friends.length;
});

const User = model('User', userSchema);

module.exports = User;