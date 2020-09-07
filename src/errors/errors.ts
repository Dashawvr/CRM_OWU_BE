export const errors = {
  // 400
  BAD_REQUEST_WRONG_PARAMS: {
    message: 'Bad request wrong params',
    code: 4000
  },
  BAD_REQUEST_USER_ALREADY_EXIST: {
    message: 'User already exist',
    code: 4001
  },
  BAD_REQUEST_INVALID_FILE_MIME_TYPE: {
    code: 4003
  },
  BAD_REQUEST_MAX_PHOTO_AMOUNT: {
    code: 4004,
    message: 'Cant upload more than one user photo'
  },

  // 401
  UNAUTHORIZED_WRONG_CREDENTIALS: {
    code: 4011,
    message: 'Wrong login or password'
  },

  // 403
  CORS_NOT_ALLOWED: {
    message: 'Cors not allowed',
    code: 4031
  },
  FORBIDDEN_NO_PERMISSION: {
    message: 'You don\'t have permission',
    code: 4032
  },

  // 404
  NOT_FOUND_ROUTE: {
    message: 'API route not found',
    code: 4041
  },
  NOT_FOUND_USER_NOT_PRESENT: {
    message: 'User is not found',
    code: 4042
  },
  NOT_FOUND_TASK_NOT_PRESENT: {
    message: 'Task is not found',
    code: 4043
  },
  NOT_FOUND_TASK_STATUS_NOT_PRESENT: {
    message: 'Task status is not found',
    code: 4044
  },
  NOT_FOUND_CLIENT_NOT_PRESENT: {
    message: 'Client is not found',
    code: 4045
  },
  NOT_FOUND_CLIENT_STATUS_NOT_PRESENT: {
    message: 'Client status is not found',
    code: 4046
  },
  NOT_FOUND_COMMENT_NOT_PRESENT: {
    message: 'Comment is not found',
    code: 4047
  },
  NOT_FOUND_CITY_NOT_PRESENT: {
    message: 'City is not found',
    code: 4048
  },
  NOT_FOUND_GROUP_NOT_PRESENT: {
    message: 'Group is not found',
    code: 4049
  },
  NOT_FOUND_COURSE_NOT_PRESENT: {
    message: 'Course is not found',
    code: 40410
  },
  NOT_FOUND_APPLICATION_NOT_PRESENT: {
    message: 'Application is not found',
    code: 40411
  },
  NOT_FOUND_DISCOUNT_NOT_PRESENT: {
    message: 'Discount is not found',
    code: 40412
  },
  NOT_FOUND_PAYMENT_NOT_PRESENT: {
    message: 'Payment is not found',
    code: 40413
  },
  NOT_FOUND_PAYMENT_STATUS_NOT_PRESENT: {
    message: 'Payment status is not found',
    code: 40414
  },
  NOT_FOUND_PAYMENT_TYPE_NOT_PRESENT: {
    message: 'Payment status is not found',
    code: 40415
  },
  NOT_FOUND_SOURCE_NOT_PRESENT: {
    message: 'Source is not found',
    code: 40416
  },

  // 500
  SERVER_UNKNOWN_ERROR: {
    message: 'Unknown error',
    code: 5001
  }
};
