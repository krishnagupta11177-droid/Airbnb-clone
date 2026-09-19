const express = require("express");
const router = express.Router({ mergeParams: true }); //mergeParams: true --> isse parent route ko child route se merge karne ke liye...{/listings/:id/reviews} -- {/:reviewId}
const wrapAsync = require("../utils/wrapAsync.js");
const Review = require("../models/review.js");
const Listing = require("../models/listing.js");
const {
  validateReview,
  isLoggedIn,
  isReviewAuthor,
} = require("../middlewares.js");
const reviewController = require("../controllers/review.js");

//Post review Route
router.post(
  "/",
  isLoggedIn,
  validateReview,
  wrapAsync(reviewController.createReview),
);

//DELETE review route
router.delete(
  "/:reviewId",
  isLoggedIn,
  isReviewAuthor,
  wrapAsync(reviewController.destroyReview),
);

module.exports = router;
