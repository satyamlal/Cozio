// wrapAsync function is a higher-order function designed to simplify error handling in asynchronous Express route handlers.

// This line exports an anonymous function that takes one argument, fn
// fn is expected to be an asynchronous function
module.exports = (fn) => {
  return (req, res, next) => {
    // The .catch(next) part attaches a catch handler to the Promise. If any error is thrown or the Promise is rejected, the error is passed to the next function.
    // In Express, calling next(error) signals that an error has occurred, so Express will then pass control to your error-handling middleware.
    fn(req, res, next).catch(next);
  };
};
