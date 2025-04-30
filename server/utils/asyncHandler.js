// const asyncHandler = function(fn) {
//     return async (req, res, next) => {
//         try {
//             await fn(req, res, next);
//         } catch (error) {
//             next(error);  // Passing the error to Express
//         }
//     };
// };



const asyncHandler = (fn) => (req, res, next) => {
    Promise.resolve(fn(req, res, next)).catch(next);
    // Promise.resolve(fn(req, res, next)).catch(() => next());
};

module.exports = asyncHandler;