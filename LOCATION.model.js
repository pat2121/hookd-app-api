// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const location = sequelizeClient.define('location', {
  LOCATION_ID: {
      type: DataTypes.STRING(4),
      allowNull: false,
  }, 
  City: {
    type: DataTypes.STRING(20),
    allowNull: true,
  },
  State: {
    type: DataTypes.STRING(20),
    allowNull: true,
  },
  Type: {
    type: DataTypes.STRING(10),
    allowNull: true,
  },
  Name: {
    type: DataTypes.STRING(20),
    allowNull: true,
  },
  Description: {
    type: DataTypes.STRING(30),
    allowNull: true,
  },
  Lat: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  Lon: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
    hooks: {
      beforeCount(options) {
        options.raw = true;
      }
    }
  });

  // eslint-disable-next-line no-unused-vars
  location.associate = function (models) {
    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
  };

  return location;
};
