class ApiError extends Error{
    constructor(statusCode, message = 'Something went wrong.', errors = []){
        super(message);

        this.success = false;
        this.statusCode = statusCode;
        this.message = message;
        this.data = null;
        this.errors = errors;
    }

    // When we create an instance of ApiError and return it as a JSON response, JavaScript's built-in Error class does not include the message property in JSON.stringify() by default. So need to add message explicitly in the Object
    // toJSON() {
    //     return {
    //         success: this.success,
    //         statusCode: this.statusCode,
    //         message: this.message,  // Explicitly include message in JSON response
    //         data: this.data,
    //         errors: this.errors,
    //     };
    // }
}

module.exports = ApiError;