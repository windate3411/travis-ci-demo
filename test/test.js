const { expect } = require('chai')
const db = require('../models')
const UserModel = require('../models/user')
var chai = require('chai');
var sinon = require('sinon');
chai.use(require('sinon-chai'));

const {
  sequelize,
  dataTypes,
  checkModelName,
  checkUniqueIndex,
  checkPropertyExists
} = require('sequelize-test-helpers')

describe('a simple test unit', () => {
  it('should equal to 1', () => {
    expect(1).to.be.equal(1)
  })
})

describe('User model', () => {

  before(done => {
    done()
  });

  const User = UserModel(sequelize, dataTypes)
  const user = new User()
  checkModelName(User)('User')

  context('properties', () => {
    ;[
      'name', 'email', 'password',
    ].forEach(checkPropertyExists(user))
  });

})