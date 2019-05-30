const Sequelize = require('sequelize');
const config = require('../config/database.js');
const moment = require('moment');
var sequelize = new Sequelize(config);
    
var User = sequelize.define('user', {
    id: {
        allowNull: false,
        autoIncrement: false,
        primaryKey: true,
        type: Sequelize.DataTypes.STRING,
        validate: {
            notEmpty: {
                msg: "Esse campo não pode ser vazio!"
            }
        }
      },
      accountId: {
        allowNull: false,
        type: Sequelize.DataTypes.STRING,
        validate: {
            notEmpty: {
                msg: "Esse campo não pode ser vazio!"
            }
        }
      },
      sessionId: {
        allowNull: false,
        type: Sequelize.DataTypes.STRING,
        validate: {
            notEmpty: {
                msg: "Esse campo não pode ser vazio!"
            }
        }
      },
      optIn: {
        allowNull: false,
        type: Sequelize.DataTypes.BOOLEAN,
        validate: {
            notEmpty: {
                msg: "Esse campo não pode ser vazio!"
            }
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DataTypes.DATE, //DATEONLY
        get: function() {
          return moment.utc(this.getDataValue('createdAt')).format('YYYY-MM-DD hh:mm:ss');
        }
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DataTypes.DATE, //DATEONLY
        get: function() {
          return moment.utc(this.getDataValue('updateAt')).format('YYYY-MM-DD hh:mm:ss');
        }
      }
});

module.exports = User;

  