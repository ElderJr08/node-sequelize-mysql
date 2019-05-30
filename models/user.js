const Sequelize = require('sequelize');
const config = require('../config/database.js');

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
      }
});

module.exports = User;

  