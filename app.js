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

// New Route
app.get("/listings/new", (req, res) => {
  // New Form will render here to create a new listing
  res.render("listings/new.ejs");
});

// Show Route
app.get("/listings/:id", async (req, res) => {
  let { id } = req.params;
  const listing = await Listing.findById(id);
  res.render("listings/show.ejs", { listing });
});

// Create Route
app.post("/listings", async (req, res) => {
  // 1st way:
  // If the {title, description, image, price, location, country} is written like this inside new.ejs file: name="title",
  // then we can use this (given below):
  // let { title, description, image, price, location, country } = req.body;

  // 2nd and better way:
  const newListing = new Listing(req.body.listing); // this will create a instance of new listings
  await newListing.save();
  res.redirect("/listings");
});

// Edit Route
app.get("/listings/:id/edit", async (req, res) => {
  // Edit form will render here
  let { id } = req.params;
  const listing = await Listing.findById(id);
  res.render("listings/edit.ejs", { listing });
});

app.listen(3000, () => {
  console.log("Server is listening to port 3000.");
});
