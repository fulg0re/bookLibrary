const mergeDeep = require('merge-deep');
const { inputValidate } = require('../../input-validator');
const validateOptionsArr = require('./validationOptions');

const validate = async (input, schema) => {
  try {
    return await inputValidate(
      input,
      schema,
      mergeDeep(...validateOptionsArr)
    );
  } catch (err) {
    console.log(err);
  }
};

module.exports = { validate };
