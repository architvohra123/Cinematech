const responsWithData = (res, statusCode, data) => res.status(statusCode).json(data)

const error = (res) => responseWithData(res, 500, {
    status: 500,
    message: "Oops! Something wrong!"
})

const badrequest = (res) => responseWithData(res, 400, {
    status: 400,
    message
})

const ok = (res, data) => responsWithData(res, 200, data)

const created = (res, data) => responsWithData(res, 201, data)

const unauthorize = (res) => responsWithData(res, 401, {
    status: 401,
    message: "Unauthorized"
})

const notfound = (res) => responsWithData(res, 404, {
    status: 404,
    message: "Resource not found"
})

export default {
    error,
    badrequest,
    ok,
    created,
    unauthorize,
    notfound
};