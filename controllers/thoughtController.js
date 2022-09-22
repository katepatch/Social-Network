const { User, Thought } = require("../models");

module.exports = {

    getThought(reeq, res) {
        Thought.find({})
            .then((thought) => res.json(thought))
            .catch((err) => res.status(500).json(err));
    },

    getSingleThought(req, res) {
        Thought.findOne({ _id: req.params.thoughtId })
            .select("-__v")
            .then((thought) => 
                !thought
                ? res.status(404).json({ message: "No Thought with this ID" })
                : res.json(thoufght)
            )
            .catch((err) => res.status(500).json(err));
    },

    createThought(req, res) {
        
    }
}