import mongoose from "mongoose";

const { Schema } = mongoose;

const contact_formschema = new Schema({
    comment: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    }
});

const Contact_form = mongoose.model("Contact_form", contact_formschema);

export default Contact_form;