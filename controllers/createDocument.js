import documentSchema from "../models/documentSchema.js";
import userSchema from "../models/userSchema.js";

const createDocument = async (req, res) => {
    const { title, users } = req.body;
    const userId = req.userId; // Assuming userId is extracted from user authentication

    if (!title) {
        return res.status(400).json({ success: false, message: 'Title is required' });
    }

    try {
        const usersIds = [];

        // Check if users array is provided
        if (users && Array.isArray(users) && users.length > 0) {
            for (const userEmail of users) {
                const user = await userSchema.findOne({ email: userEmail });
                if (user) {
                    usersIds.push(user._id);
                } else {
                    return res.status(404).json({ success: false, message: `User with email ${userEmail} not found` });
                }
            }
        }

        // Create document only if users array is provided or empty
        const document = await documentSchema.create({ title, owner: userId, collabs: usersIds });
        const toChangeUser = await userSchema.findByIdAndUpdate(userId, { $push: { documents: document._id } }, { new: true });
        return res.status(201).json({ success: true, message: 'Document created successfully', document });
    } catch (e) {
        console.error('Error:', e);
        return res.status(500).json({ success: false, message: 'Some internal error occurred' });
    }
}

export default createDocument;
