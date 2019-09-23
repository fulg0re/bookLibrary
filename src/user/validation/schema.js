const validationUserSchema = {
  username: {
    type: 'String',
    errorMessage: 'UserName is not valid'
  },
  password: {
    type: 'String',
    identical: 'confirmPassword',
    errorMessage: 'Password is not valid'
  },
  confirmPassword: {
    type: 'String',
    errorMessage: 'Password is not valid'
  },
  email: {
    type: 'Email',
    errorMessage: 'Email is not valid'
  },
  firstName: {
    type: 'String',
    errorMessage: 'FirstName is not valid'
  },
  lastName: {
    type: 'String',
    errorMessage: 'LastName is not valid'
  }
};

module.exports = { validationUserSchema };
