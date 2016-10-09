/**
 * Created by soknaly on 10/9/16.
 */
const helper = require('../lib/Helpers/DatabaseHelper');

module.exports = helper.createSchema('Profile', {
  user: {
    ref: 'User',
    required: true,
    unique: true
  },
  firstName: String,
  lastName: String,
  projects: []
});