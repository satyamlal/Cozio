const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Listing = require("../Cozio/models/listing");
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const wrapAsync = require("./utils/wrapAsync.js");
const ExpressError = require("./utils/ExpressError.js");
const { listingSchema } = require("./schema.js");

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
app.use(methodOverride("_method"));
app.engine("ejs", ejsMate);
app.use(express.static(path.join(__dirname, "/public")));
app.use("/static", express.static("images"));

app.get("/", (req, res) => {
  res.send("Everything is working fine!");
});

// Index Route
app.get(
  "/listings",
  wrapAsync(async (req, res) => {
    const allListing = await Listing.find({});
    res.render("listings/index.ejs", { allListing });
  })
);

// New Route
app.get(
  "/listings/new",
  wrapAsync((req, res) => {
    // New Form will render here to create a new listing
    res.render("listings/new.ejs");
  })
);

// Show Route
app.get("/listings/:id", async (req, res) => {
  let { id } = req.params;
  const listing = await Listing.findById(id);
  res.render("listings/show.ejs", { listing });
});

// Create Route
app.post(
  "/listings",
  wrapAsync(async (req, res, next) => {
    let result = listingSchema.validate(req.body);
    console.log(result);
    if (result.error) {
      throw new ExpressError(400, result.error);
    }

    // 1st way:
    // If the {title, description, image, price, location, country} is written like this inside new.ejs file: name="title",
    // then we can use this (given below):
    // let { title, description, image, price, location, country } = req.body;

    // 2nd and better way:
    const newListing = new Listing(req.body.listing); // this will create a instance of new listings
    await newListing.save();
    res.redirect("/listings");
  })
);

// Edit Route
app.get(
  "/listings/:id/edit",
  wrapAsync(async (req, res) => {
    // Edit form will render here
    let { id } = req.params;
    const listing = await Listing.findById(id);
    res.render("listings/edit.ejs", { listing });
  })
);

// Update Route
app.put(
  "/listings/:id",
  wrapAsync(async (req, res) => {
    if (!req.body.listing) {
      throw new ExpressError(400, "Send valid Data Please!");
    }

    let { id } = req.params;
    await Listing.findByIdAndUpdate(id, { ...req.body.listing });
    res.redirect(`/listings/${id}`);
  })
);

// Delete Route
app.delete(
  "/listings/:id",
  wrapAsync(async (req, res) => {
    let { id } = req.params;
    let deletedListing = await Listing.findByIdAndDelete(id);
    console.log(deletedListing);
    res.redirect("/listings");
  })
);

app.all("*", (req, res, next) => {
  next(new ExpressError(404, "Page Not Found!"));
});

app.use((err, req, res, next) => {
  let { statusCode = 500, message = "Something went wrong!" } = err;
  res.status(statusCode).render("error.ejs", { message });
  // res.status(statusCode).send(message);
});

app.listen(3000, () => {
  console.log("Server is listening to port 3000.");
});
