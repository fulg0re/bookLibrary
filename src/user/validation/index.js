const { inputValidate } = require('../../../input-validator');
const { userValidateSchema } = require('./schema/user');
const { validateOptions } = require('./options/user');

const validateCreateNewUserInput = async (input) => {
  try {
    return await inputValidate(input, userValidateSchema, validateOptions)
  } catch (err) {
    console.log(err);
  }
};

module.exports = { validateCreateNewUserInput };
