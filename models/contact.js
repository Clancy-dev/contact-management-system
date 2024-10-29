import { Schema, model, models } from "mongoose";

const contactSchema = new Schema(
    {
        phoneContact:String,
        phoneCategory:String,
    },
    {
        timestamps:true
    }

);

const Contact = models.Contact||model("Contact",contactSchema)
export default Contact;
