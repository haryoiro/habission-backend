function createResponse(status, data) {
    const json = JSON.stringify(data);
    return {
        status: status,
        Headers: {
            'Content-Type': 'application/json',
        },
        data: json,
    };
}

const successResponse = (data) =>  {
    return createResponse(200, data);
}
const notFoundResponse = (data) => {
    return createResponse(404, data);
}
const errorResponse = (data) => {
    return createResponse(500, data);
}

module.exports = {
    successResponse,
    notFoundResponse,
    errorResponse,
}
