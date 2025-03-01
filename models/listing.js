// Import Mongoose to define and work with MongoDB schemas
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Review = require("./review.js");

// Define the schema for a listing
const listingSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: String,
  image: {
    type: String,
    default: "/images/cozio-default-image.jpg",
    set: (v) => (v.trim() === "" ? "/images/cozio-default-image.jpg" : v),
  },
  price: Number,
  location: String,
  country: String,
  reviews: [
    {
      type: Schema.Types.ObjectId,
      ref: "Review",
    },
  ],
});

// This is a mongoose middleware, which will automatically run database-level logic after a specific query operation occurs.
// This middle is going to delete all the reviews for the Deleted listing.
listingSchema.post("findOneAndDelete", async (listing) => {
  // Above code:
  // This is a Mongoose post-hook that listens for the "findOneAndDelete" operation on documents that follow the listingSchema.
  // When It Runs: It executes after a listing document has been found and deleted using a method like Listing.findOneAndDelete().
  if (listing) {
    await Review.deleteMany({ _id: { $in: listing.reviews } });
    // { _id: { $in: listing.review } : This is a MongoDB query using the $in operator. It tells MongoDB to find all reviews whose _id is included in the array listing.review.
  }
});

// Export the model to use it in other parts of the app
const Listings = mongoose.model("Listing", listingSchema);
module.exports = Listings;
