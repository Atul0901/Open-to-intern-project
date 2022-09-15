const mongoose = require("mongoose")
const objectId = mongoose.Schema.Type.objectId

const internSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
        },
        email: {
            type: String,
            unique: true,
            required: true,
            trim: true
        },
        mobile: {
            type: String,
            required: true,
            unique: true,
            trim: true
        },
        colleageId: {
            type: objectId,
            ref: "college",
            trim: true
        },
        isDeleted: {
            type: Boolean,
            default: false
        }
    }
    // {timestamps: true }
)

module.exports= mongoose.model("Intern",internSchema)