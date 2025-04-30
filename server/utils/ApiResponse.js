class ApiResponse{
    constructor(statusCode, message, data = []){
        this.success = true;
        this.statusCode = statusCode;
        this.message = message;
        this.data = data;
    }
}

module.exports = ApiResponse;