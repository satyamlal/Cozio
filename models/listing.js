// Import Mongoose to define and work with MongoDB schemas
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Define the schema for a listing
const listingSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: String,
  image: {
    type: String,
    // default: "../images/default-image-1.jpg",
    // set: (v) => (v === "" ? "../images/default-image-1.jpg" : v),
  },
  price: Number,
  location: String,
  country: String,
});

// Export the model to use it in other parts of the app
const Listings = mongoose.model("Listing", listingSchema);
module.exports = Listings;
