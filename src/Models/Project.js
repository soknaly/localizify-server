/**
 * Created by soknaly on 10/9/16.
 */
const helper = require('../lib/Helpers/DatabaseHelper');

module.exports = helper.createSchema('Project', {
  firstName: String,
  lastName: String
});