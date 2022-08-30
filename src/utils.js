function createResponse(res, status, data) {
    const json = JSON.stringify(data);
    res.status(status).send(json);
}

const successResponse = (data, res) =>  {
    return createResponse(res,200, data);
}
const notFoundResponse = (data,res) => {
    return createResponse(res,404, data);
}
const errorResponse = (data,res) => {
    return createResponse(res,500, data);
}

module.exports = {
    successResponse,
    notFoundResponse,
    errorResponse,
}
