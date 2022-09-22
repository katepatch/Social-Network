const { User, Thought } = require("../models");

module.exports = {
    getUser(req, res) {
        User.find({})
            .then((user) => res.json(user))
            .catch((err) => res.status(500).json(err));
    },

    getSingleUser(req, res) {
        User.findOne({ _id: req.params.userId })
            .populate("thoughts")
            .populate("friends")
            .select("-__v")
            .then((user) => 
                !user
                    ? res.status(404).json({ message: "Can't find User with this ID" })
                    : res.json(user)
                    )
            .catch((err) => res.status(500).son(err));
    },

    createUser(req, res) {
        User.create(req.body)
        .then((user) => res.json(user))
        .catch((err) => {
            console.log(err);
            return res.status(500).json(err);
        });
    },

    updateUser(req, res) {
        User.findOneAndUpdate(
            { _id: req.params.userId },
            { $set: req.body },
            { runValidators: true, new: true }
        )
        .then((user) => 
            !user
                ? res.status(404).json({ message: "Can't find user with this ID" })
                : res.json(user)
                )
        .catch((err) => res.status(500).json(err));
    },

    deleteUser(req, res) {
        User.findOneAndDelete({ _id: req.params.userId })
            .then((user) => 
                !user
                    ?res.status(404).json({ message: "No user found" })
                    : res.json(user)
            )
            .catch((err) => res.status(500).json(err));
    },

    addFriend(req, res) {
        User.findOneAndUpdate(
            { _id: req.params.userId },
            { $addToSet: { friends: req.params.friendId } },
            { runValidatiors: true, new: true }
        )
            .then((user) => 
                !user
                    ? res.status(404).json({ message: "Can't find user with this ID" })
                    : res.json(user)
            )
            .catch((err) => res.status(500).json(err));
    },
}