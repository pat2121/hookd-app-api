// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const users = sequelizeClient.define('users', {
    USERS_ID: {
      type: DataTypes.STRING(5),
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(15),
      allowNull: true,
    },
    username: {
      type: DataTypes.STRING(10),
      allowNull: true,
    },
    First_Name: {
      type: DataTypes.STRING(15),
      allowNull: true,
    },
    Last_Name: {
      type: DataTypes.STRING(15),
      allowNull: true,
    },
    Password: {
      type: DataTypes.STRING(15),
      allowNull: true,
    },
    Phone_number: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  }, {
    hooks: {
      beforeCount(options) {
        options.raw = true;
      }
    }
  });

  // eslint-disable-next-line no-unused-vars
  users.associate = function (models) {
    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
  };

  return users;
};
