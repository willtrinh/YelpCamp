var mongoose = require("mongoose");
// schema setup
var campgroundSchema = new mongoose.Schema({
   name: { 
      type: String,
      required: "Campground name cannot be blank."
   },
   slug: {
      type: String,
      unique: true
   },
   price: String,
   image: String,
   description: String,
   createdAt: { type: Date, default: Date.now },
   location: String,
   lat: Number,
   lng: Number,
   author: {
      id: {
         type: mongoose.Schema.Types.ObjectId,
         ref: "User"
      },
      username: String
   },
   comments: [
         {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Comment"
         }
      ],
   likes: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        }
      ]
});

module.exports = mongoose.model("Campground", campgroundSchema);