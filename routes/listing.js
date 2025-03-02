// This is to restructure the Express routes
const express = require("express");
const router = express.Router(); // router is an object of Express
const wrapAsync = require("../utils/wrapAsync.js");
const ExpressError = require("../utils/ExpressError.js");
const { listingSchema, reviewSchema } = require("../schema.js");
const Listing = require("../models/listing");

//backend Schema validation for all Listing through Schema.js
const validateListing = (req, res, next) => {
  let { error } = listingSchema.validate(req.body);
  if (error) {
    let errMsg = error.details.map((element) => element.message).join(",");
    throw new ExpressError(400, errMsg);
  } else {
    next();
  }
};

// Index Route
router.get(
  "/",
  wrapAsync(async (req, res) => {
    const allListing = await Listing.find({});
    res.render("listings/index.ejs", { allListing });
  })
);

// New Route
router.get(
  "/new",
  wrapAsync((req, res) => {
    // New Form will render here to create a new listing
    res.render("listings/new.ejs");
  })
);

// Show Route
router.get(
  "/:id",
  wrapAsync(async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id).populate("reviews");
    res.render("listings/show.ejs", { listing });
  })
);

// Create Route
router.post(
  "/",
  validateListing,
  wrapAsync(async (req, res, next) => {
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
router.get(
  "/:id/edit",
  wrapAsync(async (req, res) => {
    // Edit form will render here
    let { id } = req.params;
    const listing = await Listing.findById(id);
    res.render("listings/edit.ejs", { listing });
  })
);

// Update Route
router.put(
  "/:id",
  validateListing,
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
router.delete(
  "/:id",
  wrapAsync(async (req, res) => {
    let { id } = req.params;
    let deletedListing = await Listing.findByIdAndDelete(id);
    console.log(deletedListing);
    res.redirect("/listings");
  })
);

module.exports = router;
