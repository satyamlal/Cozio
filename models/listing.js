// Import Mongoose to define and work with MongoDB schemas
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Define the schema for a listing
const listingSchema = new Schema({
  title: String, // Listing title
  description: String, // Detailed description
  image: String, // Image URL or file path
  price: Number, // Price (e.g., per night)
  location: String, // Location (e.g., city or address)
  country: String, // Country of the listing
});

// Export the model to use it in other parts of the app
const Listings = mongoose.model("Listing", listingSchema);
module.exports = Listings;
