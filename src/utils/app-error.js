class AppError extends Error{
    constructor(message,name,explaination,statusCode){
        super(message); //because js Error has 3 properties , message, stack, 
        this.name = name,
        this.explaination = explaination,
        this.statusCode = statusCode
    }
}

export default AppError;