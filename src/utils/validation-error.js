import { StatusCodes } from "http-status-codes";

class ValidationError extends Error{
    constructor(error){
        const message = "Not able to validate data sent in request";
        super(message);
        this.name = "Validation Error",
        // this.name = error.name,
        this.statusCode = StatusCodes.BAD_REQUEST,
        this.message = [],
        error.errors.forEach(element=>{this.message.push(element.message)})
    }
}

export default ValidationError;

