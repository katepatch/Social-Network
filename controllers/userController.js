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
}