const statusCode = {
    ERROR_401: {
        code: 401,
        msg: 'unauthorized，请求需要用户的身份认证！'
    },

    ERROR_403: (msg) => {
        return {
            code: 403,
            msg
        }
    },

    ERROR_404: {
        code: 404,
        msg: 'Not Found，不存在的请求资源！'
    },

    ERROR_412: (msg) => {
        return {
            code: 412,
            msg
        }
    },

    SUCCESS_200: (msg, data) => {
        return {
            code: 200,
            msg,
            data,
        }
    }
}

module.exports = statusCode