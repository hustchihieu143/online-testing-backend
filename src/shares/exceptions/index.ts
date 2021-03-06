export const httpErrors = {
  // user error
  ACCOUNT_NOT_FOUND: {
    message: 'Account not found.',
    code: 'USER_00000',
  },
  ACCOUNT_EXISTED: {
    message: 'Account already existed.',
    code: 'USER_00001',
  },
  ACCOUNT_HASH_NOT_MATCH: {
    message: 'Account adress and hash message are not matched.',
    code: 'USER_00002',
  },
  UNAUTHORIZED: {
    message: 'Unauthorized user.',
    code: 'USER_00003',
  },
  LOCKED_USER: {
    message: 'User has been locked.',
    code: 'USER_00004',
  },
  VERIFY_SIGNATURE_FAIL: {
    message: 'System has been failed to verify signture.',
    code: 'USER_00005',
  },
  REFRESH_TOKEN_EXPIRED: {
    message: 'Refresh tokens is expired.',
    code: 'USER_00006',
  },
  ACCESS_TOKEN_EXPIRED: {
    message: 'Refresh tokens is expired.',
    code: 'USER_00007',
  },
  FORBIDDEN: {
    message: 'You are not authorized to access this resource.',
    code: 'USER_00008',
  },
  ACCOUNT_EXISTED_BY_EMAIL: {
    message: 'Email already existed.',
    code: 'USER_00009',
  },
  ACCOUNT_EXISTED_BY_ADDRESS: {
    message: 'Address already existed.',
    code: 'USER_000010',
  },
  ACCOUNT_INCORRECT_FORMAT_ADDRESS: {
    message: 'Wallet address is incorrect format.',
    code: 'USER_000011',
  },
  ACCOUNT_NOT_EXISTED: {
    message: 'Address is not existed.',
    code: 'USER_000012',
  },
  ACCOUNT_WRONG_PASSWORD: {
    message: 'Password is incorrect.',
    code: 'USER_000013',
  },
  TIME_LIMIT_LOGIN: {
    message: 'Login time is more than 5 minutes',
    code: 'ADMIN_000014',
  },
  WRONG_TOKEN_VERIFY: {
    message: 'The time verify has expired.',
    code: 'USER_000014',
  },
  USER_EMAIL_EXISTED: {
    message: 'Email has been associted with an other account.',
    code: 'USER_00025',
  },
  USER_EMAIL_VERIFY_FAIL: {
    message: 'Failed to verify this email.',
    code: 'USER_00026',
  },
  EMAIL_CONFIRM_NOT_FOUND: {
    message: 'Email request not found!',
    code: 'USER_00027',
  },
};
