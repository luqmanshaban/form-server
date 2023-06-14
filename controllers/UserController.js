import db from "../models/index.js";

const User = db.User;

export const createUser = async(req, res) => {
    const user = req.body;

    try {
        const response = await User.create(user);

        if(!response) {
            res.status(500).json({message: "INTERNALE SERVER ERROR"})
        }
        res.status(201).json({message: "User Created"})
    } catch (error) {
        res.status(400).json(error)
    }
}
