/**
 * Created by soknaly on 10/9/16.
 */
const helper = require('../../lib/Helpers/DatabaseHelper');

module.exports = helper.createSchema('User', {
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  }
});