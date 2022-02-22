const mongoose = require("mongoose");

mongoose
  .connect("mongodb+srv://govind:magic123@cluster0.szc6e.mongodb.net", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DB connection successful!!"));

const myNotesSchema = new mongoose.Schema(
  {
    notesID: {
      type: Number,
      unique: true,
      required: [true, "Required field"],
    },
    name: {
      type: String,
      required: [true, "Required field"],
    },
    data: {
      type: String,
    },
  },
  {
    timestamps: {
      createdAt: true,
      updatedAt: true,
    },
  }
);

const NotesModel = mongoose.model("mynotes", myNotesSchema);
module.exports = NotesModel;
