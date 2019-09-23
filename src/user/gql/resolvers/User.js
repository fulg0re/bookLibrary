const { UserModel } = require('../../../../mongo/model');
const { idGenerate } = require('../../../../graphql-flg-suit/mongo/common');
const { COLLECTION_USER_NAME } = require('../../../../config');
const { validate } = require('../../../validation');
const { validationUserSchema } = require('../../validation');

const getUser = async(id) => await UserModel.findOne({_id: id});

const createNewUser = async(input) => {
  const validationResult = await validate(input, validationUserSchema);

  if (!validationResult.validation) {
    throw new Error(validationResult.message)
  }

  const newUser = new UserModel({
    _id: await idGenerate(COLLECTION_USER_NAME),
    username: input.username,
    password: input.password,
    email: input.email,
    firstName: input.firstName,
    lastName: input.lastName,
    created: new Date(),
  });

  const savedUser = await newUser.save();

  return savedUser;
};

module.exports = { getUser, createNewUser };
