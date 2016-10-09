/**
 * Created by soknaly on 10/9/16.
 */
const mongoose = require('mongoose');
const _ = require('lodash');
const Schema = mongoose.Schema;
class DatabaseHelper {

  static createSchema(schemaName, obj) {

    for (var key in obj) {
      if (obj[key].hasOwnProperty('ref')) {
        obj[key].type = mongoose.Schema.ObjectId;
        continue;
      }
    }

    const defaultProps = {
      createdAt: {
        type: Date,
        default: Date.now
      },
      updatedAt: {
        type: Date,
        default: Date.now
      }
    };
    var props = _.merge(obj, defaultProps);
    console.log(props);
    var schema = new Schema(props);
    schema.pre('save', function(next) {
      this.updatedAt = Date.now;
      next();
    });
    return mongoose.model(schemaName, schema);

  };
}

module.exports = DatabaseHelper;
