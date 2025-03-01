const Joi = require("joi");

//backend validation for all Listings
module.exports.listingSchema = Joi.object({
  listing: Joi.object({
    title: Joi.string().required(),
    description: Joi.string().required(),
    location: Joi.string().required(),
    country: Joi.string().required(),
    price: Joi.number().required().min(0),
    image: Joi.string().allow("", null),
  }).required(),
});

//backend validation for all forms
module.exports.reviewSchema = Joi.object({
  review: Joi.object({
    rating: Joi.number().required().min(1).max(5).messages({
      "number.base": "Rating must be a number",
      "number.empty": "Rating is required",
      "number.min": "Rating must be at least 1",
      "number.max": "Rating must be at most 5",
      "any.required": "Rating is required",
    }),
    comment: Joi.string().required().messages({
      "string.base": "Comment must be a text",
      "string.empty": "Please provide a comment",
      "any.required": "Comment is required",
    }),
  }).required(),
});
