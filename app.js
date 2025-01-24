const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Listing = require("../Cozio/models/listing");
const path = require("path");

const MONGO_URL = "mongodb://127.0.0.1:27017/cozio";

main()
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect(MONGO_URL);
}

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Everything is working fine!");
});

// Index Route
app.get("/listings", async (req, res) => {
  const allListing = await Listing.find({});
  res.render("listings/index.ejs", { allListing });
});

// Show Route
app.get("/listings/:id", async (req, res) => {
  let { id } = req.params;
  const listing = await Listing.findById(id);
  res.render("listings/show.ejs", { listing });
});

// app.get("/testListing", async (req, res) => {
//   let sampleListing = new Listing({
//     title: "My new Villa",
//     description: "Buy this beach",
//     price: 790,
//     location: "Playa Venao, Azuero Peninsula",
//     country: "Panama",
//   });

//   await sampleListing.save();
//   console.log("sample was saved");
//   res.send("Testing Successfull");
// });

app.listen(3000, () => {
  console.log("Server is listening to port 3000.");
});
